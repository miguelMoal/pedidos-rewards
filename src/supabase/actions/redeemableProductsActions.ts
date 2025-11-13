import { supabase } from "../initSupabase";
import { Coffee } from "lucide-react";

// Mapeo de nombres de iconos a componentes de iconos
const iconMap: Record<string, typeof Coffee> = {
  Coffee: Coffee,
  // Aquí puedes agregar más iconos en el futuro
  // Gift: Gift,
  // etc.
};

export interface RedeemableProduct {
  id: string;
  name: string;
  description: string;
  points: number;
  icon: typeof Coffee;
  image: string;
}

/**
 * Obtiene todos los productos canjeables activos desde Supabase
 */
export async function getRedeemableProducts(): Promise<RedeemableProduct[]> {
  const { data, error } = await supabase
    .from("redeemable_products")
    .select("*")
    .eq("is_active", true)
    .order("points", { ascending: true });

  if (error) {
    throw new Error(`Error al obtener productos canjeables: ${error.message}`);
  }

  if (!data || data.length === 0) {
    return [];
  }

  // Mapear los datos de la base de datos al formato esperado por el componente
  return data.map((product) => {
    // Obtener el icono correspondiente o usar Coffee por defecto
    const IconComponent = iconMap[product.icon_name || "Coffee"] || Coffee;

    return {
      id: product.id.toString(),
      name: product.name,
      description: product.description || "",
      points: product.points,
      icon: IconComponent,
      image: product.image_url || "",
    };
  });
}

/**
 * Obtiene un producto canjeable por su ID
 */
export async function getRedeemableProductById(
  productId: string
): Promise<RedeemableProduct | null> {
  const productIdNum = parseInt(productId, 10);
  if (isNaN(productIdNum)) {
    throw new Error("ID de producto inválido");
  }

  const { data, error } = await supabase
    .from("redeemable_products")
    .select("*")
    .eq("id", productIdNum)
    .eq("is_active", true)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      // No se encontró el producto
      return null;
    }
    throw new Error(`Error al obtener producto canjeable: ${error.message}`);
  }

  if (!data) {
    return null;
  }

  const IconComponent = iconMap[data.icon_name || "Coffee"] || Coffee;

  return {
    id: data.id.toString(),
    name: data.name,
    description: data.description || "",
    points: data.points,
    icon: IconComponent,
    image: data.image_url || "",
  };
}
