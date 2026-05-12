import { site } from "./site";

export const logoHeader = {
    logo: "/media/logo-light.webp",
    ancho: 100,
    alto: "47",
    resolucion: 1000,
    alt: site.brandName
}

export const navAriaLabel = {
    titulo: "Menú de navegación principal",
    abrir: "Abrir menú de navegación",
    cerrar: "Cerrar menú de navegación"
}

export const componentes = [
  { href: "/#antecedentes", label: "Antecedentes" },
  { href: "/#mision-vision-politica", label: "Misión, Visión y Política" },
  { href: "/#que-hacemos", label: "¿Qué hacemos?" },
  { href: "/#hoteleria", label: "Proyectos" },
  { href: "/#bim-revit", label: "Modelado BIM" },
  { href: "/#proyectos-destacados", label: "Obras" },
  { href: "/#mantenimiento", label: "Mantenimiento" },
  { href: "/#formulario", label: "Contáctanos", primary: true },
];
