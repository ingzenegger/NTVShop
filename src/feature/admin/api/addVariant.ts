import { createClient } from "@/shared/lib/client";
import type { NewVariant } from "@/shared/types/product";

export async function addVariant(variant: NewVariant) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("product_variants")
    .insert({
      product_id: variant.product_id,
      name: variant.name,
      price: variant.price,
      stock_quantity: variant.stock_quantity,
    })
    .select()
    .single();

  if (error) {
    console.error("Insert error", error);
    throw error;
  }

  return data;
}