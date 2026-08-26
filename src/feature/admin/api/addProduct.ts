import { createClient } from "@/shared/lib/client";
import type { NewProduct } from "@/shared/types/product";

export async function addProduct(product: NewProduct) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("products")
    .insert({
      name: product.name,
      description: product.description,
      slug: product.slug,
      price: product.price,
      currency: product.currency,
      product_type: product.product_type,
      is_active: product.is_active,
    })
    .select()
    .single();

  if (error) {
    console.error("Insert error", error);
    throw error;
  }

  return data;
}
