import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Switch } from "@/shared/components/ui/switch";
import { slugify } from "@/shared/lib/slugify";
import { useEffect, useState } from "react";

export type ProductFormValues = {
  nameIs: string;
  nameEn: string;
  slug: string;
  descriptionIs: string;
  descriptionEn: string;
  price: string;
  productType: string;
  isActive: boolean;
};

type ProductFormProps = {
  initialValues: ProductFormValues;
  submitLabel: string;
  onSubmit: (values: ProductFormValues) => Promise<void>;
};

export default function ProductForm({
  initialValues,
  submitLabel,
  onSubmit,
}: ProductFormProps) {
  const [nameIs, setNameIs] = useState(initialValues.nameIs);
  const [nameEn, setNameEn] = useState(initialValues.nameEn);
  const [slug, setSlug] = useState(initialValues.slug);
  const [slugEdited, setSlugEdited] = useState(initialValues.slug !== "");
  const [descriptionIs, setDescriptionIs] = useState(initialValues.descriptionIs);
  const [descriptionEn, setDescriptionEn] = useState(initialValues.descriptionEn);
  const [price, setPrice] = useState(initialValues.price);
  const [productType, setProductType] = useState(initialValues.productType);
  const [isActive, setIsActive] = useState(initialValues.isActive);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if(!slugEdited) {
        setSlug(slugify(nameEn));
    }
  }, [nameEn, slugEdited]);

  return (
    <form
      className="flex flex-col gap-6 max-1-md"
      onSubmit={async (e) => {
        e.preventDefault();
        setError(null);
        try {
          await onSubmit({
            nameIs, nameEn, slug, descriptionIs, descriptionEn,
            price, productType, isActive,
          });
        } catch (err) {
          setError(err instanceof Error ? err.message : "something went wrong. Try again.");
        }
      }}
    >
      <div className="grid gap-2">
        <Label htmlFor="nameIs">Name (Icelandic)</Label>
        <Input id="nameIs" value={nameIs} onChange={(e) => setNameIs(e.target.value)} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="nameEn">Name (English)</Label>
        <Input id="nameEn" value={nameEn} onChange={(e) => setNameEn(e.target.value)} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="slug">Slug</Label>
        <Input id="slug" value={slug} onChange={(e) => {setSlug(e.target.value); setSlugEdited(true)}} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="descriptionIs">Description (Icelandic)</Label>
        <Input id="descriptionIs" value={descriptionIs} onChange={(e) => setDescriptionIs(e.target.value)} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="descriptionEn">Description (English)</Label>
        <Input id="descriptionEn" value={descriptionEn} onChange={(e) => setDescriptionEn(e.target.value)} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="price">Price (ISK)</Label>
        <Input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="productType">Product type</Label>
        <Select value={productType} onValueChange={setProductType}>
          <SelectTrigger id="productType">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="handmade">Handmade</SelectItem>
            <SelectItem value="pattern">Pattern</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Switch id="isActive" checked={isActive} onCheckedChange={setIsActive} />
        <Label htmlFor="isActive">Active (visible in shop)</Label>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button type="submit">{submitLabel}</Button>
    </form>
  );
}