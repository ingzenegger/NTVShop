import { createClient } from "@/shared/lib/client";
import type { NewVariant } from "@/shared/types/product";

export async function updateVariant(id: string, variant: NewVariant) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("product_variants")
    .update({
      name: variant.name,
      price: variant.price,
      stock_quantity: variant.stock_quantity,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Update error", error);
    throw error;
  }

  return data;
}