PGDMP                  	    |            dbproveedores    15.5    16.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    64337    dbproveedores    DATABASE     �   CREATE DATABASE dbproveedores WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE dbproveedores;
                postgres    false            �            1259    64407    Proveedores    TABLE     i  CREATE TABLE public."Proveedores" (
    id integer NOT NULL,
    "NIT" character varying(255) NOT NULL,
    nombre character varying(255) NOT NULL,
    apellido character varying(255) NOT NULL,
    cedula character varying(255) NOT NULL,
    tipoproveedor character varying(255) NOT NULL,
    tipopersona character varying(255) NOT NULL,
    beneficiarios json,
    datosbancarios json,
    estado character varying(255) DEFAULT 'Pendiente de Validación'::character varying NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
 !   DROP TABLE public."Proveedores";
       public         heap    postgres    false            �            1259    64406    Proveedores_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Proveedores_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."Proveedores_id_seq";
       public          postgres    false    216                       0    0    Proveedores_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."Proveedores_id_seq" OWNED BY public."Proveedores".id;
          public          postgres    false    215            �            1259    64401    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            �            1259    64466    usuarios    TABLE     c  CREATE TABLE public.usuarios (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    rol character varying(255) DEFAULT 'user'::character varying NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    64465    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public          postgres    false    218                       0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public          postgres    false    217            n           2604    64410    Proveedores id    DEFAULT     t   ALTER TABLE ONLY public."Proveedores" ALTER COLUMN id SET DEFAULT nextval('public."Proveedores_id_seq"'::regclass);
 ?   ALTER TABLE public."Proveedores" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            r           2604    64469    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218                      0    64407    Proveedores 
   TABLE DATA           �   COPY public."Proveedores" (id, "NIT", nombre, apellido, cedula, tipoproveedor, tipopersona, beneficiarios, datosbancarios, estado, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   �                 0    64401    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    214   G                 0    64466    usuarios 
   TABLE DATA           Y   COPY public.usuarios (id, username, password, rol, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   �                  0    0    Proveedores_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Proveedores_id_seq"', 6, true);
          public          postgres    false    215                       0    0    usuarios_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.usuarios_id_seq', 1, false);
          public          postgres    false    217            y           2606    64417    Proveedores Proveedores_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."Proveedores"
    ADD CONSTRAINT "Proveedores_pkey" PRIMARY KEY (id);
 J   ALTER TABLE ONLY public."Proveedores" DROP CONSTRAINT "Proveedores_pkey";
       public            postgres    false    216            w           2606    64405     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    214            {           2606    64476    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    218            }           2606    64478    usuarios usuarios_username_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_username_key UNIQUE (username);
 H   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_username_key;
       public            postgres    false    218               I  x����N�0�g�)����ٗ���*,��|��2IO�#�b�#�RK7��,ݧ���_0ȅ��Mp���ӵn�g�:�F3�=��x�-�ȿd�z0Vgo������Z��l��fkz��	7}��yF��i�C���Ͼ��&�Fw��\��@
�@���R���8hI%KȗPQ+�=�|�g�����S����F�g� %$G�O`TJ�j�r��45��:��܉�Πƚf�8���Y[�ї?��V|��1*�*��Y��I2�&D"c{�٪O)���\��f��[Kl\W�[?4�_���Zᒣ�A
����ʓ$�]D�         >   x�320214044412t���RSS�J�rR�����`
,-L�tK�K�2���1z\\\ ��         O   x�3�tN�����4�Ĕ��<N##]C]CCCc+##+cC=sSKc]S��\F@��9�����8��"�b���� �!<     