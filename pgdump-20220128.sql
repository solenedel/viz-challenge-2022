--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4
-- Dumped by pg_dump version 13.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: poverty; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.poverty (
    id integer NOT NULL,
    sevpov numeric(7,6) NOT NULL,
    year integer NOT NULL,
    poverty_geo_name character varying(255) NOT NULL,
    poverty_geo character varying(255) NOT NULL,
    hc numeric(7,6) NOT NULL,
    poverty_level character varying(255) NOT NULL,
    gender character varying(255) NOT NULL,
    povgap numeric(7,6) NOT NULL
);


--
-- Name: poverty_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.poverty_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: poverty_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.poverty_id_seq OWNED BY public.poverty.id;


--
-- Name: poverty id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.poverty ALTER COLUMN id SET DEFAULT nextval('public.poverty_id_seq'::regclass);


--
-- Data for Name: poverty; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.poverty (id, sevpov, year, poverty_geo_name, poverty_geo, hc, poverty_level, gender, povgap) FROM stdin;
1	0.113632	2012	Nigeria	040PGNGA	0.489849	ppp1	female	0.201969
2	0.226344	2012	Nigeria	040PGNGA	0.726421	ppp2	female	0.365874
3	0.149496	2012	Nigeria	040PGNGA	0.553575	ppp1	male	0.258475
4	0.273851	2012	Nigeria	040PGNGA	0.761284	ppp2	male	0.417189
\.


--
-- Name: poverty_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.poverty_id_seq', 4, true);


--
-- Name: poverty poverty_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.poverty
    ADD CONSTRAINT poverty_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

