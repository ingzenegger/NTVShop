import { createClient } from "@/shared/lib/client";
import type { NewProduct } from "@/shared/types/product";

export async function updateProduct(id: string, product: NewProduct) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("products")
    .update({
      name: product.name,
      description: product.description,
      slug: product.slug,
      price: product.price,
      currency: product.currency,
      product_type: product.product_type,
      is_active: product.is_active,
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