import Alpine from "../components/icons/tags/Alpine.astro";
import AstroIcon from "../components/icons/tags/AstroIcon.astro";
import Bun from "../components/icons/tags/Bun.astro";
import BunnyCDN from "../components/icons/tags/BunnyCDN.astro";
import Calcom from "../components/icons/tags/Calcom.astro";
import DigitalOcean from "../components/icons/tags/DigitalOcean.astro";
import Deno from "../components/icons/tags/Deno.astro";
import Docker from "../components/icons/tags/Docker.astro";
import Elementor from "../components/icons/tags/Elementor.astro";
import Evolution from "../components/icons/tags/Evolution.astro";
import Fly from "../components/icons/tags/Fly.astro";
import Hestia from "../components/icons/tags/Hestia.astro";
import Hono from "../components/icons/tags/Hono.astro";
import Laravel from "../components/icons/tags/Laravel.astro";
import Livewire from "../components/icons/tags/Livewire.astro";
import n8n from "../components/icons/tags/n8n.astro";
import Netlify from "../components/icons/tags/Netlify.astro";
import Nuxt from "../components/icons/tags/Nuxt.astro";
import PHP from "../components/icons/tags/PHP.astro";
import Pnpm from "../components/icons/tags/Pnpm.astro";
import Postgre from "../components/icons/tags/Postgre.astro";
import Railway from "../components/icons/tags/Railway.astro";
import React from "../components/icons/tags/React.astro";
import Redis from "../components/icons/tags/Redis.astro";
import Sass from "../components/icons/tags/Sass.astro";
import Sevalla from "../components/icons/tags/Sevalla.astro";
import Strapi from "../components/icons/tags/Strapi.astro";
import Supabase from "../components/icons/tags/Supabase.astro";
import Tailwind from "../components/icons/tags/Tailwind.astro";
import TypeScript from "../components/icons/tags/TypeScript.astro";
import Vite from "../components/icons/tags/Vite.astro";
import WireUI from "../components/icons/tags/WireUI.astro";
import WooCommerce from "../components/icons/tags/WooCommerce.astro";
import WordPress from "../components/icons/tags/WordPress.astro";
import Yarn from "../components/icons/tags/Yarn.astro";

const TAGS = {
  ALPINE: {
    name: "Alpine.js",
    class: "bg-green-100 text-black",
    icon: Alpine,
  },
  ASTRO: {
    name: "Astro",
    class: "bg-slate-800 text-white",
    icon: AstroIcon,
  },
  BUNNY: {
    name: "Bunny CDN",
    class: "bg-orange-100 text-black",
    icon: BunnyCDN,
  },
  BUN: {
    name: "Bun",
    class: "bg-yellow-100 text-black",
    icon: Bun,
  },
  CALCOM: {
    name: "Cal.com",
    class: "bg-gray-100 text-black dark:bg-white dark:text-black",
    icon: Calcom,
  },
  DENO: {
    name: "Deno",
    class: "bg-steel-700 text-white",
    icon: Deno,
  },
  DIGITALOCEAN: {
    name: "DigitalOcean",
    class: "bg-blue-200 text-black",
    icon: DigitalOcean,
  },
  DOCKER: {
    name: "Docker",
    class: "bg-blue-200 text-black",
    icon: Docker,
  },
  ELEMENTOR: {
    name: "Elementor",
    class: "bg-red-100 text-black",
    icon: Elementor,
  },
  EVOLUTION: {
    name: "Evolution API",
    class: "bg-green-200 text-black",
    icon: Evolution,
  },
  FLY: {
    name: "Fly.io",
    class: "bg-purple-100 text-black",
    icon: Fly,
  },
  HESTIA: {
    name: "HestiaCP",
    class: "bg-pink-200 text-black",
    icon: Hestia,
  },
  HONO: {
    name: "Hono",
    class: "bg-red-100 text-black",
    icon: Hono,
  },
  LARAVEL: {
    name: "Laravel",
    class: "bg-red-200 text-black",
    icon: Laravel,
  },
  LIVEWIRE: {
    name: "Livewire",
    class: "bg-pink-200 text-black",
    icon: Livewire,
  },
  N8N: {
    name: "n8n",
    class: "bg-pink-100 text-black",
    icon: n8n,
  },
  NETLIFY: {
    name: "Netlify",
    class: "bg-teal-100 text-black",
    icon: Netlify,
  },
  NUXT: {
    name: "Nuxt.js",
    class: "bg-green-100 text-black",
    icon: Nuxt,
  },
  PHP: {
    name: "PHP",
    class: "bg-blue-500 text-white",
    icon: PHP,
  },
  PNPM: {
    name: "pnpm",
    class: "bg-gray-700 text-white",
    icon: Pnpm,
  },
  POSTGRE: {
    name: "PostgreSQL",
    class: "bg-blue-100 text-black",
    icon: Postgre,
  },
  RAILWAY: {
    name: "Railway",
    class: "bg-grey-400 text-white",
    icon: Railway,
  },
  REACT: {
    name: "React",
    class: "bg-blue-100 text-black",
    icon: React,
  },
  REDIS: {
    name: "Redis",
    class: "bg-rose-100 text-black",
    icon: Redis,
  },
  SASS: {
    name: "Sass",
    class: "bg-pink-200 text-black",
    icon: Sass,
  },
  SEVALLA: {
    name: "Sevalla",
    class: "bg-yellow-100 text-black",
    icon: Sevalla,
  },
  STRAPI: {
    name: "Strapi",
    class: "bg-indigo-100 text-black",
    icon: Strapi,
  },
  SUPABASE: {
    name: "Supabase",
    class: "bg-slate-800 text-white",
    icon: Supabase,
  },
  TAILWIND: {
    name: "Tailwind",
    class: "bg-blue-100 text-black",
    icon: Tailwind,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-blue-200 text-black",
    icon: TypeScript,
  },
  VITE: {
    name: "Vite",
    class: "bg-yellow-100 text-black",
    icon: Vite
  },
  WIREUI: {
    name: "WireUI",
    class: "bg-green-200 text-black",
    icon: WireUI,
  },
  WOOCOMMERCE: {
    name: "WooCommerce",
    class: "bg-purple-100 text-black",
    icon: WooCommerce,
  },
  WORDPRESS: {
    name: "WordPress",
    class: "bg-cyan-100 text-black",
    icon: WordPress,
  },
  YARN: {
    name: "Yarn",
    class: "bg-blue-200 text-black",
    icon: Yarn,
  },
};

export default TAGS;
