PGDMP                         {            carprotection    15.3    15.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16422    carprotection    DATABASE     �   CREATE DATABASE carprotection WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE carprotection;
                postgres    false            �            1259    40973    accident    TABLE     h   CREATE TABLE public.accident (
    id integer,
    participants integer,
    clientsinvolved integer
);
    DROP TABLE public.accident;
       public         heap    postgres    false            �            1259    32782    car    TABLE     �   CREATE TABLE public.car (
    id integer NOT NULL,
    model character varying(255),
    value numeric,
    year integer,
    insurancevalue numeric
);
    DROP TABLE public.car;
       public         heap    postgres    false            �            1259    32781 
   car_id_seq    SEQUENCE     �   CREATE SEQUENCE public.car_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 !   DROP SEQUENCE public.car_id_seq;
       public          postgres    false    217                       0    0 
   car_id_seq    SEQUENCE OWNED BY     9   ALTER SEQUENCE public.car_id_seq OWNED BY public.car.id;
          public          postgres    false    216            �            1259    24590    client    TABLE     �   CREATE TABLE public.client (
    id integer NOT NULL,
    name character varying(255),
    cpf character varying(14),
    phonenumber character varying(20),
    address character varying(255),
    birthday date,
    contractnumbers integer
);
    DROP TABLE public.client;
       public         heap    postgres    false            �            1259    24589    client_id_seq    SEQUENCE     �   CREATE SEQUENCE public.client_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.client_id_seq;
       public          postgres    false    215                       0    0    client_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.client_id_seq OWNED BY public.client.id;
          public          postgres    false    214            �            1259    32792 
   thirdparty    TABLE     �   CREATE TABLE public.thirdparty (
    id integer NOT NULL,
    name character varying(255),
    cpf character varying(11),
    phonenumber character varying(20),
    address character varying(255),
    birthday date
);
    DROP TABLE public.thirdparty;
       public         heap    postgres    false            �            1259    32791    thirdparty_id_seq    SEQUENCE     �   CREATE SEQUENCE public.thirdparty_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.thirdparty_id_seq;
       public          postgres    false    219                       0    0    thirdparty_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.thirdparty_id_seq OWNED BY public.thirdparty.id;
          public          postgres    false    218            t           2604    32785    car id    DEFAULT     `   ALTER TABLE ONLY public.car ALTER COLUMN id SET DEFAULT nextval('public.car_id_seq'::regclass);
 5   ALTER TABLE public.car ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            s           2604    24593 	   client id    DEFAULT     f   ALTER TABLE ONLY public.client ALTER COLUMN id SET DEFAULT nextval('public.client_id_seq'::regclass);
 8   ALTER TABLE public.client ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            u           2604    32795    thirdparty id    DEFAULT     n   ALTER TABLE ONLY public.thirdparty ALTER COLUMN id SET DEFAULT nextval('public.thirdparty_id_seq'::regclass);
 <   ALTER TABLE public.thirdparty ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219                      0    40973    accident 
   TABLE DATA           E   COPY public.accident (id, participants, clientsinvolved) FROM stdin;
    public          postgres    false    220   �                 0    32782    car 
   TABLE DATA           E   COPY public.car (id, model, value, year, insurancevalue) FROM stdin;
    public          postgres    false    217   �                 0    24590    client 
   TABLE DATA           `   COPY public.client (id, name, cpf, phonenumber, address, birthday, contractnumbers) FROM stdin;
    public          postgres    false    215   o                 0    32792 
   thirdparty 
   TABLE DATA           S   COPY public.thirdparty (id, name, cpf, phonenumber, address, birthday) FROM stdin;
    public          postgres    false    219   �                  0    0 
   car_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.car_id_seq', 1, false);
          public          postgres    false    216                       0    0    client_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.client_id_seq', 1, false);
          public          postgres    false    214                       0    0    thirdparty_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.thirdparty_id_seq', 3, true);
          public          postgres    false    218            y           2606    32789    car car_pkey 
   CONSTRAINT     J   ALTER TABLE ONLY public.car
    ADD CONSTRAINT car_pkey PRIMARY KEY (id);
 6   ALTER TABLE ONLY public.car DROP CONSTRAINT car_pkey;
       public            postgres    false    217            w           2606    24597    client client_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.client DROP CONSTRAINT client_pkey;
       public            postgres    false    215            {           2606    32799    thirdparty thirdparty_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.thirdparty
    ADD CONSTRAINT thirdparty_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.thirdparty DROP CONSTRAINT thirdparty_pkey;
       public            postgres    false    219                  x������ � �         x   x�M̻
1����S�	���U�bcgiܠ�q�۫/���8��-�)�t+t��3�U!m�bg��BS�NP�!���Z��q�4���ŐMS�%�b��!Z��=c�g��?;"zO�%�            x������ � �         �   x�5α
1�9y��@%m/��� � ��T� w*���MO���O<lg}���C�OCf"�ZnC:�ۃ���ٱ-��h���I+�!����9��Հ��n��`�]`�v�оԫ�Ꮜ��%��T��Eq'�l���&�     