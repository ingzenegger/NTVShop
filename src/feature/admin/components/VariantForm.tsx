import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useState } from "react";

export type VariantFormValues = {
  nameIs: string;
  nameEn: string;
  price: string;
  stockQuantity: string;
};

type VariantFormProps = {
  initialValues: VariantFormValues;
  submitLabel: string;
  onSubmit: (values: VariantFormValues) => Promise<void>;
};

export default function VariantForm({
  initialValues,
  submitLabel,
  onSubmit,
}: VariantFormProps) {
  const [nameIs, setNameIs] = useState(initialValues.nameIs);
  const [nameEn, setNameEn] = useState(initialValues.nameEn);
  const [price, setPrice] = useState(initialValues.price);
  const [stockQuantity, setStockQuantity] = useState(initialValues.stockQuantity);
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setError(null);
        try {
          await onSubmit({ nameIs, nameEn, price, stockQuantity });
        } catch (err) {
          setError(err instanceof Error ? err.message : "something went wrong. Try again.");
        }
      }}
    >
      <div className="grid gap-2">
        <Label htmlFor="variantNameIs">Name (Icelandic)</Label>
        <Input id="variantNameIs" value={nameIs} onChange={(e) => setNameIs(e.target.value)} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="variantNameEn">Name (English)</Label>
        <Input id="variantNameEn" value={nameEn} onChange={(e) => setNameEn(e.target.value)} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="variantPrice">Price (ISK)</Label>
        <Input id="variantPrice" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="variantStock">Stock quantity</Label>
        <Input id="variantStock" type="number" value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button type="submit">{submitLabel}</Button>
    </form>
  );
}