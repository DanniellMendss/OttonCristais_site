import Gemini2 from "@/assets/Gemini_Generated_Image_3r1cua3r1cua3r1c.png";
import Gemini3 from "@/assets/Gemini_Generated_Image_au8gfnau8gfnau8g.png";
import Gemini5 from "@/assets/Gemini_Generated_Image_bmrgg9bmrgg9bmrg.png";
import Gemini6 from "@/assets/Gemini_Generated_Image_hup4s9hup4s9hup4.png";
import Gemini7 from "@/assets/Gemini_Generated_Image_ixzstaixzstaixzs.png";
import Photo1 from "@/assets/1.jpg";
import Photo2 from "@/assets/2.jpg";
import Photo3 from "@/assets/3.jpg";
import Photo4 from "@/assets/4.jpg";
import Photo5 from "@/assets/5.jpg";
import Photo6 from "@/assets/6.jpg";
import Photo7 from "@/assets/7.jpg";
import Photo8 from "@/assets/8.jpg";
import Photo9 from "@/assets/9.jpg";
import Photo10 from "@/assets/10.jpg";
import Abajur from "@/assets/Abajur.png";
import gemQuartz from "@/assets/gem-quartz.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  carats: number;
  origin: string;
  cut: string;
  badge?: string;
}

export const categories = [
  "Todas",
  "Cristais Lapidados",
  "Quartzo",
  "Raras",
  "Decoração",
];

export const products: Product[] = [
  {
    id: "13",
    name: "Quartzo Rutilado",
    price: 1650,
    image: gemQuartz,
    category: "Quartzo",
    description: "Quartzo rutilado com inclusões de rutilo dourado em formação artística.",
    carats: 12.0,
    origin: "Brasil",
    cut: "Ponta Polida",
  },
  {
    id: "18",
    name: "Pêndulo Cristal",
    price: 450,
    image: Gemini2,
    category: "Cristais Lapidados",
    description: "Pêndulo de cristal para meditação e harmonização de ambientes.",
    carats: 8.0,
    origin: "Brasil",
    cut: "Ponta",
  },
  {
    id: "19",
    name: "Orgonite Cristal",
    price: 680,
    image: Gemini3,
    category: "Cristais Lapidados",
    description: "Orgonite com cristais para limpeza energética e proteção.",
    carats: 15.0,
    origin: "Brasil",
    cut: "Piramide",
    badge: "Destaque",
  },
  {
    id: "23",
    name: "Chakras Cristalinos",
    price: 1650,
    image: Gemini7,
    category: "Quartzo",
    description: "Kit com 7 cristais representando os 7 chakras principais.",
    carats: 35.0,
    origin: "Brasil",
    cut: "Bruto",
  },
  {
    id: "27",
    name: "Abajur Cristal",
    price: 5800,
    originalPrice: 6800,
    image: Abajur,
    category: "Decoração",
    description: "Abajur de cristal com design exclusivo e iluminação suave.",
    carats: 0,
    origin: "Brasil",
    cut: "Artesanal",
    badge: "Destaque",
  },
  {
    id: "28",
    name: "Cristal Energético",
    price: 350,
    image: Photo1,
    category: "Cristais Lapidados",
    description: "Cristal para limpeza e harmonização de ambientes.",
    carats: 5.0,
    origin: "Brasil",
    cut: "Ponta",
    badge: "Destaque",
  },
  {
    id: "29",
    name: "Pedra Curativa",
    price: 420,
    image: Photo2,
    category: "Cristais Lapidados",
    description: "Pedra curativa para meditação e equilíbrio emocional.",
    carats: 8.0,
    origin: "Brasil",
    cut: "Oval",
  },
  {
    id: "31",
    name: "Pêndulo Energético",
    price: 180,
    image: Photo4,
    category: "Cristais Lapidados",
    description: "Pêndulo de cristal para radiestesia e meditação.",
    carats: 3.0,
    origin: "Brasil",
    cut: "Ponta",
  },
  {
    id: "32",
    name: "Cristal Decorativo",
    price: 550,
    originalPrice: 680,
    image: Photo5,
    category: "Decoração",
    description: "Peça decorativa cristalina para ambientes sofisticados.",
    carats: 0,
    origin: "Brasil",
    cut: "Artesanal",
    badge: "Destaque",
  },
  {
    id: "33",
    name: "Pedra Purificadora",
    price: 320,
    image: Photo6,
    category: "Cristais Lapidados",
    description: "Cristal para purificação e proteção energética.",
    carats: 6.0,
    origin: "Brasil",
    cut: "Cabrião",
  },
  {
    id: "34",
    name: "Esfera de Quarzo",
    price: 890,
    image: Photo7,
    category: "Quartzo",
    description: "Esfera de quartzo natural com alta transparência.",
    carats: 15.0,
    origin: "Brasil",
    cut: "Esfera",
    badge: "Destaque",
  },
  {
    id: "35",
    name: "Cristal Místico",
    price: 650,
    image: Photo8,
    category: "Raras",
    description: "Cristal rara com propriedades metafísicas únicas.",
    carats: 4.5,
    origin: "Myanmar",
    cut: "Oval",
    badge: "Exclusivo",
  },
  {
    id: "36",
    name: "Pedra da Sabedoria",
    price: 480,
    image: Photo9,
    category: "Cristais Lapidados",
    description: "Cristal para amplificar conhecimento e intuição.",
    carats: 7.0,
    origin: "Brasil",
    cut: "Cushion",
  },
  {
    id: "37",
    name: "Cristal da Prosperidade",
    price: 580,
    originalPrice: 720,
    image: Photo10,
    category: "Raras",
    description: "Cristal raro para atrair prosperidade e abundância.",
    carats: 9.0,
    origin: "Brasil",
    cut: "Brilhante",
    badge: "Destaque",
  },
];
