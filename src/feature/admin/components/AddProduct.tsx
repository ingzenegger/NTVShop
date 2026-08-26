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
import { useState } from "react";

export default function AddProduct() {
  const [nameIs, setNameIs] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [slug, setSlug] = useState("");
  const [descriptionIs, setDescriptionIs] = useState("");
  const [descriptionEn, setDescriptionEn] = useState("");
  const [price, setPrice] = useState("");
  const [productType, setProductType] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <form className="flex flex-col gap-6 max-1-md">
      <h2 className="text-lg font-semibold">Add product</h2>

      <div className="grid gap-2">
        <Label htmlFor="nameIs">Name (Icelandic)</Label>
        <Input
          id="nameIs"
          value={nameIs}
          onChange={(e) => setNameIs(e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="nameEn">Name (English)</Label>
        <Input
          id="nameEn"
          value={nameEn}
          onChange={(e) => setNameEn(e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="descriptionIs">Description (Icelandic)</Label>
        <Input
          id="descriptionIs"
          value={descriptionIs}
          onChange={(e) => setDescriptionIs(e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="descriptionEn">Description (English)</Label>
        <Input
          id="descriptionEn"
          value={descriptionEn}
          onChange={(e) => setDescriptionEn(e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="price">Price (ISK)</Label>
        <Input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
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
        <Switch
          id="isActive"
          checked={isActive}
          onCheckedChange={setIsActive}
        />
        <Label htmlFor="isActive">Active (visible in shop)</Label>
      </div>

      <Button type="submit" disabled>
        Add product (not wired up yet)
      </Button>
    </form>
  );
}
