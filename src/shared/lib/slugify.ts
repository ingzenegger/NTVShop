export function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // strip anything that's not a letter, number, space, or hyphen
    .replace(/\s+/g, "-") // spaces become hyphens
    .replace(/-+/g, "-"); // collapse any doubled-up hyphens
}
