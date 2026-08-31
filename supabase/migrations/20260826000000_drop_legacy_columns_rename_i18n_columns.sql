-- products
ALTER TABLE products DROP COLUMN name;
ALTER TABLE products RENAME COLUMN name_i18n TO name;

ALTER TABLE products DROP COLUMN description;
ALTER TABLE products RENAME COLUMN description_i18n TO description;

-- product_variants
ALTER TABLE product_variants DROP COLUMN name;
ALTER TABLE product_variants RENAME COLUMN name_i18n TO name;

-- product_attributes
ALTER TABLE product_attributes DROP COLUMN value;
ALTER TABLE product_attributes RENAME COLUMN value_i18n TO value;