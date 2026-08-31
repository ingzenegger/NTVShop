import { useParams } from "react-router";
import { useAdminProducts } from "../hooks/useAdminProducts";
import type { ProductFormValues } from "./ProductForm";
import ProductForm from "./ProductForm";

export default function EditProduct() {
  const { id } = useParams();
  const { data: products, isLoading, error } = useAdminProducts();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error(error);
    return <p>Something went wrong loading the product.</p>;
  }

  const product = products?.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  const initialValues: ProductFormValues = {
    nameIs: product.name.is,
    nameEn: product.name.en,
    slug: product.slug,
    descriptionIs: product.description.is,
    descriptionEn: product.description.en,
    price: String(product.price),
    productType: product.product_type,
    isActive: product.is_active,
  };

  async function handleSubmit(values: ProductFormValues) {
    //TODO: wire up to an update call
    console.log("would save:", values);
  }

  return (
    <>
      <h2 className="text-lg font-semibold">Edit Product: {product.name.en}</h2>
      <ProductForm
        initialValues={initialValues}
        submitLabel="Save changes"
        onSubmit={handleSubmit}
      />
    </>
  );
}
