import { supabase } from "../initSupabase";
import type { Transaction } from "../../types";
import type { Database } from "../database.types";
import {
  CASHBACK_PERCENTAGE,
  calculateCashback,
} from "../../constants/cashback";

export interface CreateVisitParams {
  customerId: string;
  amount: number;
  points?: number;
  ticketNumber?: string;
}

/**
 * Crea una nueva visita en la base de datos y registra el cashback
 */
export async function createVisit(
  visit: CreateVisitParams
): Promise<Transaction> {
  const customerIdNum = parseInt(visit.customerId, 10);
  if (isNaN(customerIdNum)) {
    throw new Error("ID de cliente inválido");
  }

  // Crear la visita en customer_visits
  const { data: visitData, error: visitError } = await supabase
    .from("customer_visits")
    .insert({
      customer_id: customerIdNum,
      amount: visit.amount,
      points: visit.points ?? 1,
      ticket_number: visit.ticketNumber || null,
    } as Database["public"]["Tables"]["customer_visits"]["Insert"])
    .select()
    .single();

  if (visitError) {
    throw new Error(`Error al crear visita: ${visitError.message}`);
  }

  // Calcular y registrar el cashback
  const cashbackAmount = calculateCashback(visit.amount);

  const { error: cashbackError } = await supabase
    .from("cashback_transactions")
    .insert({
      customer_id: customerIdNum,
      customer_visit_id: visitData.id,
      purchase_amount: visit.amount,
      cashback_percentage: CASHBACK_PERCENTAGE,
      cashback_amount: cashbackAmount,
    } as Database["public"]["Tables"]["cashback_transactions"]["Insert"]);

  if (cashbackError) {
    console.error("Error al registrar cashback:", cashbackError);
    // No lanzamos error aquí porque la visita ya fue creada
    // Solo registramos el error en consola
  }

  return {
    id: visitData.id.toString(),
    customerId: visitData.customer_id.toString(),
    amount: visitData.amount,
    points: visitData.points,
    date: new Date(visitData.created_at || new Date()),
  };
}

/**
 * Registra solo cashback sin crear una visita real (para compras sin café)
 * Crea una visita con points: 0 que no cuenta como visita real
 */
export async function createCashbackOnly(
  params: CreateVisitParams
): Promise<void> {
  const customerIdNum = parseInt(params.customerId, 10);
  if (isNaN(customerIdNum)) {
    throw new Error("ID de cliente inválido");
  }

  // Crear una visita con points: 0 que no cuenta como visita real
  const { data: visitData, error: visitError } = await supabase
    .from("customer_visits")
    .insert({
      customer_id: customerIdNum,
      amount: params.amount,
      points: 0, // No cuenta como visita real
      ticket_number: params.ticketNumber || null,
    } as Database["public"]["Tables"]["customer_visits"]["Insert"])
    .select()
    .single();

  if (visitError) {
    throw new Error(`Error al crear registro de compra: ${visitError.message}`);
  }

  // Calcular y registrar el cashback
  const cashbackAmount = calculateCashback(params.amount);

  const { error: cashbackError } = await supabase
    .from("cashback_transactions")
    .insert({
      customer_id: customerIdNum,
      customer_visit_id: visitData.id,
      purchase_amount: params.amount,
      cashback_percentage: CASHBACK_PERCENTAGE,
      cashback_amount: cashbackAmount,
    } as Database["public"]["Tables"]["cashback_transactions"]["Insert"]);

  if (cashbackError) {
    console.error("Error al registrar cashback:", cashbackError);
    throw new Error(`Error al registrar cashback: ${cashbackError.message}`);
  }
}

/**
 * Obtiene el número de visitas disponibles (no canjeadas) de un cliente
 */
export async function getCustomerVisitsCount(
  customerId: string
): Promise<number> {
  const customerIdNum = parseInt(customerId, 10);
  if (isNaN(customerIdNum)) {
    throw new Error("ID de cliente inválido");
  }

  // Obtener todas las visitas del cliente
  const { data: allVisits, error: visitsError } = await supabase
    .from("customer_visits")
    .select("id, points")
    .eq("customer_id", customerIdNum);

  if (visitsError) {
    throw new Error(`Error al obtener visitas: ${visitsError.message}`);
  }

  if (!allVisits || allVisits.length === 0) {
    return 0;
  }

  // Obtener las visitas canjeadas
  const visitIds = allVisits.map((v) => v.id);
  const { data: redeemedVisits, error: redeemedError } = await supabase
    .from("redeemed_visits")
    .select("customer_visit_id")
    .in("customer_visit_id", visitIds);

  if (redeemedError) {
    throw new Error(
      `Error al obtener visitas canjeadas: ${redeemedError.message}`
    );
  }

  const redeemedVisitIds = new Set(
    redeemedVisits?.map((rv) => rv.customer_visit_id) || []
  );

  // Contar visitas no canjeadas (solo las que tienen points > 0)
  const availableVisits = allVisits.filter(
    (visit) => !redeemedVisitIds.has(visit.id) && visit.points > 0
  );

  return availableVisits.length;
}

/**
 * Obtiene todas las visitas de un cliente
 */
export async function getCustomerVisits(
  customerId: string
): Promise<Transaction[]> {
  const customerIdNum = parseInt(customerId, 10);
  if (isNaN(customerIdNum)) {
    throw new Error("ID de cliente inválido");
  }

  const { data, error } = await supabase
    .from("customer_visits")
    .select("*")
    .eq("customer_id", customerIdNum)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Error al obtener visitas: ${error.message}`);
  }

  return (data || []).map((visit) => ({
    id: visit.id.toString(),
    customerId: visit.customer_id.toString(),
    amount: visit.amount,
    points: visit.points,
    date: new Date(visit.created_at || new Date()),
  }));
}

/**
 * Obtiene todas las visitas (con paginación opcional)
 */
export async function getAllVisits(
  limit?: number,
  offset?: number
): Promise<Transaction[]> {
  let query = supabase
    .from("customer_visits")
    .select("*")
    .order("created_at", { ascending: false });

  if (limit) {
    query = query.limit(limit);
  }
  if (offset) {
    query = query.range(offset, offset + (limit ?? 100) - 1);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(`Error al obtener visitas: ${error.message}`);
  }

  return (data || []).map((visit) => ({
    id: visit.id.toString(),
    customerId: visit.customer_id.toString(),
    amount: visit.amount,
    points: visit.points,
    date: new Date(visit.created_at || new Date()),
  }));
}

/**
 * Marca visitas como canjeadas (FIFO - las más antiguas primero)
 * @param customerId ID del cliente
 * @param visitsToRedeem Número de visitas a canjear
 * @returns IDs de las visitas que fueron marcadas como canjeadas
 */
export async function redeemVisits(
  customerId: string,
  visitsToRedeem: number
): Promise<number[]> {
  const customerIdNum = parseInt(customerId, 10);
  if (isNaN(customerIdNum)) {
    throw new Error("ID de cliente inválido");
  }

  if (visitsToRedeem <= 0) {
    throw new Error("El número de visitas a canjear debe ser mayor a 0");
  }

  // Obtener todas las visitas del cliente
  const { data: allVisits, error: visitsError } = await supabase
    .from("customer_visits")
    .select("id, points")
    .eq("customer_id", customerIdNum)
    .order("created_at", { ascending: true });

  if (visitsError) {
    throw new Error(`Error al obtener visitas: ${visitsError.message}`);
  }

  if (!allVisits || allVisits.length === 0) {
    throw new Error("No hay visitas disponibles para canjear");
  }

  // Obtener las visitas ya canjeadas
  const allVisitIds = allVisits.map((v) => v.id);
  const { data: redeemedVisits, error: redeemedError } = await supabase
    .from("redeemed_visits")
    .select("customer_visit_id")
    .in("customer_visit_id", allVisitIds);

  if (redeemedError) {
    throw new Error(
      `Error al obtener visitas canjeadas: ${redeemedError.message}`
    );
  }

  const redeemedVisitIds = new Set(
    redeemedVisits?.map((rv) => rv.customer_visit_id) || []
  );

  // Filtrar visitas no canjeadas (solo las que tienen points > 0) y tomar las más antiguas (FIFO)
  const availableVisits = allVisits
    .filter((visit) => !redeemedVisitIds.has(visit.id) && visit.points > 0)
    .slice(0, visitsToRedeem);

  if (availableVisits.length < visitsToRedeem) {
    throw new Error(
      `No hay suficientes visitas disponibles para canjear. Se intentaron canjear ${visitsToRedeem} visitas pero solo hay ${availableVisits.length} disponibles.`
    );
  }

  // Registrar las visitas como canjeadas en redeemed_visits
  const visitIdsToRedeem = availableVisits.map((visit) => visit.id);

  const { error: insertError } = await supabase.from("redeemed_visits").insert(
    visitIdsToRedeem.map((visitId) => ({
      customer_id: customerIdNum,
      customer_visit_id: visitId,
    })) as Database["public"]["Tables"]["redeemed_visits"]["Insert"][]
  );

  if (insertError) {
    throw new Error(
      `Error al marcar visitas como canjeadas: ${insertError.message}`
    );
  }

  return visitIdsToRedeem;
}
