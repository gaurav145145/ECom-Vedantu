BEGIN;

-- uuid ext 
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- account
CREATE TABLE IF NOT EXISTS accounts (
    id     uuid PRIMARY KEY DEFAULT uuid_generate_v4(), -- Entery ID 
    name   text, --Name of User
    ts  timestamptz DEFAULT current_timestamp -- time-stamp
);

-- inventory
CREATE TABLE IF NOT EXISTS inventory(
    id     uuid PRIMARY KEY DEFAULT uuid_generate_v4(), -- Entery ID
    name text, -- Name of product
    amount  float(3), 
    count  integer, -- Available quantity
    ts  timestamptz DEFAULT current_timestamp --time-stamp
);

-- orders
CREATE TABLE IF NOT EXISTS orders (
    id     uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid,
    product_id uuid,
    count  integer,
    ts  timestamptz DEFAULT current_timestamp
);

COMMIT;