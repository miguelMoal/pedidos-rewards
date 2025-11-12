import { supabase } from "../initSupabase";
import type { Customer } from "../../types";
import type { Database } from "../database.types";

// Función para convertir el género de la app al enum de la BD
function mapGenderToDatabase(
  gender: "Masculino" | "Femenino" | "Otro"
): Database["public"]["Enums"]["GENDER"] {
  switch (gender) {
    case "Masculino":
      return "MALE";
    case "Femenino":
      return "FEMALE";
    case "Otro":
      return "OTHER";
    default:
      return "OTHER";
  }
}

// Función para convertir el género de la BD al de la app
function mapGenderFromDatabase(
  gender: Database["public"]["Enums"]["GENDER"] | null
): "Masculino" | "Femenino" | "Otro" {
  switch (gender) {
    case "MALE":
      return "Masculino";
    case "FEMALE":
      return "Femenino";
    case "OTHER":
      return "Otro";
    default:
      return "Otro";
  }
}

// Función para convertir el canal de contacto de la app al enum de la BD
function mapContactChannelToDatabase(
  channel: "WhatsApp" | "SMS"
): Database["public"]["Enums"]["CHANNELS"] {
  return channel === "WhatsApp" ? "WHATSAAP" : "SMS";
}

// Función para convertir el canal de contacto de la BD al de la app
function mapContactChannelFromDatabase(
  channel: Database["public"]["Enums"]["CHANNELS"]
): "WhatsApp" | "SMS" {
  return channel === "WHATSAAP" ? "WhatsApp" : "SMS";
}

export async function createCustomer(
  customer: Omit<Customer, "id" | "createdAt">
): Promise<Customer> {
  // Convertir cardBarcode (string) a card_code (number)
  const cardCode = customer.cardBarcode
    ? parseInt(customer.cardBarcode, 10)
    : null;
  if (customer.cardBarcode && isNaN(cardCode!)) {
    throw new Error("El código de tarjeta debe ser un número válido");
  }

  const { data, error } = await supabase
    .from("users")
    .insert({
      phone: customer.phone,
      name: customer.name,
      gender: mapGenderToDatabase(customer.gender),
      contact_channel: mapContactChannelToDatabase(customer.contactChannel),
      card_code: cardCode,
      federal_polygon: customer.worksForFederal ?? false,
    } as Database["public"]["Tables"]["users"]["Insert"])
    .select()
    .single();

  if (error) {
    throw new Error(`Error al crear cliente: ${error.message}`);
  }

  return mapDatabaseCustomerToCustomer(data);
}

export async function getCustomers(): Promise<Customer[]> {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Error al obtener clientes: ${error.message}`);
  }

  return data.map(mapDatabaseCustomerToCustomer);
}

export async function getCustomerByPhone(
  phone: string
): Promise<Customer | null> {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("phone", phone)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      return null;
    }
    throw new Error(`Error al obtener cliente: ${error.message}`);
  }

  return data ? mapDatabaseCustomerToCustomer(data) : null;
}

export async function getCustomerByBarcode(
  barcode: string
): Promise<Customer | null> {
  // Convertir barcode (string) a card_code (number)
  const cardCode = parseInt(barcode, 10);
  if (isNaN(cardCode)) {
    return null;
  }

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("card_code", cardCode)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      return null;
    }
    throw new Error(`Error al obtener cliente: ${error.message}`);
  }

  return data ? mapDatabaseCustomerToCustomer(data) : null;
}

function mapDatabaseCustomerToCustomer(
  dbCustomer: Database["public"]["Tables"]["users"]["Row"]
): Customer {
  return {
    id: dbCustomer.id.toString(),
    phone: dbCustomer.phone,
    name: dbCustomer.name,
    gender: mapGenderFromDatabase(dbCustomer.gender),
    contactChannel: mapContactChannelFromDatabase(dbCustomer.contact_channel),
    cardBarcode: dbCustomer.card_code?.toString() || "",
    worksForFederal: dbCustomer.federal_polygon,
    office: undefined, // La tabla users no tiene campo office
    points: 0, // La tabla users no tiene campo points, usar valor por defecto
    visits: 0, // La tabla users no tiene campo visits, usar valor por defecto
    createdAt: new Date(dbCustomer.created_at),
  };
}
