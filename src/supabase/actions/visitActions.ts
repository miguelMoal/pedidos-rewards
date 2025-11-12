import { supabase } from "../initSupabase";
import type { Transaction } from "../../types";
import type { Database } from "../database.types";

export interface CreateVisitParams {
  customerId: string;
  amount: number;
  points?: number;
  ticketNumber?: string;
}

/**
 * Crea una nueva visita en la base de datos
 */
export async function createVisit(
  visit: CreateVisitParams
): Promise<Transaction> {
  const customerIdNum = parseInt(visit.customerId, 10);
  if (isNaN(customerIdNum)) {
    throw new Error("ID de cliente inválido");
  }

  const { data, error } = await supabase
    .from("visits")
    .insert({
      customer_id: customerIdNum,
      amount: visit.amount,
      points: visit.points ?? 1,
      ticket_number: visit.ticketNumber || null,
      redeemed: false,
    } as Database["public"]["Tables"]["visits"]["Insert"])
    .select()
    .single();

  if (error) {
    throw new Error(`Error al crear visita: ${error.message}`);
  }

  return {
    id: data.id.toString(),
    customerId: data.customer_id.toString(),
    amount: typeof data.amount === "number" ? data.amount : parseFloat(data.amount.toString()),
    points: data.points,
    date: new Date(data.created_at),
  };
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

  const { count, error } = await supabase
    .from("visits")
    .select("*", { count: "exact", head: true })
    .eq("customer_id", customerIdNum)
    .eq("redeemed", false);

  if (error) {
    throw new Error(`Error al obtener visitas: ${error.message}`);
  }

  return count ?? 0;
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
    .from("visits")
    .select("*")
    .eq("customer_id", customerIdNum)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Error al obtener visitas: ${error.message}`);
  }

  return data.map((visit) => ({
    id: visit.id.toString(),
    customerId: visit.customer_id.toString(),
    amount: typeof visit.amount === "number" ? visit.amount : parseFloat(visit.amount.toString()),
    points: visit.points,
    date: new Date(visit.created_at),
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
    .from("visits")
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

  return data.map((visit) => ({
    id: visit.id.toString(),
    customerId: visit.customer_id.toString(),
    amount: typeof visit.amount === "number" ? visit.amount : parseFloat(visit.amount.toString()),
    points: visit.points,
    date: new Date(visit.created_at),
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

  // Obtener las visitas más antiguas que aún no están canjeadas (FIFO)
  const { data: visitsToMark, error: selectError } = await supabase
    .from("visits")
    .select("id")
    .eq("customer_id", customerIdNum)
    .eq("redeemed", false)
    .order("created_at", { ascending: true })
    .limit(visitsToRedeem);

  if (selectError) {
    throw new Error(`Error al obtener visitas: ${selectError.message}`);
  }

  if (!visitsToMark || visitsToMark.length < visitsToRedeem) {
    throw new Error(
      `No hay suficientes visitas disponibles para canjear. Se intentaron canjear ${visitsToRedeem} visitas pero solo hay ${visitsToMark?.length || 0} disponibles.`
    );
  }

  // Marcar las visitas como canjeadas
  const visitIds = visitsToMark.map((visit) => visit.id);

  const { error: updateError } = await supabase
    .from("visits")
    .update({ redeemed: true } as Database["public"]["Tables"]["visits"]["Update"])
    .in("id", visitIds);

  if (updateError) {
    throw new Error(`Error al marcar visitas como canjeadas: ${updateError.message}`);
  }

  return visitIds;
}

