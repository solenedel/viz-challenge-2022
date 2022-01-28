DROP TABLE IF EXISTS povertydata CASCADE;


CREATE TABLE poverty (
  id SERIAL PRIMARY KEY NOT NULL, 
  sevpov DECIMAL(7,6) NOT NULL,
  year INTEGER NOT NULL,
  poverty_geo_name VARCHAR(255) NOT NULL, 
  poverty_geo VARCHAR(255) NOT NULL,
  hc DECIMAL(7,6) NOT NULL,
  poverty_level VARCHAR(255) NOT NULL,
  gender VARCHAR(255) NOT NULL,
  povgap  sevpov DECIMAL(7,6) NOT NULL
);