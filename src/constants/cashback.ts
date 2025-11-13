/**
 * Constante para el porcentaje de cashback
 * Actualmente configurado al 10% del monto total de la compra
 *
 * Para modificar el porcentaje, simplemente cambia este valor.
 * Ejemplo: 0.15 para 15%, 0.20 para 20%, etc.
 */
export const CASHBACK_PERCENTAGE = 0.1; // 10%

/**
 * Calcula el monto de cashback basado en el monto de compra
 * @param purchaseAmount - Monto total de la compra
 * @returns Monto de cashback calculado
 */
export function calculateCashback(purchaseAmount: number): number {
  return purchaseAmount * CASHBACK_PERCENTAGE;
}
