import { site } from "./site";

export const logoFooter = {
    logo: "/media/logo-light.webp",
    ancho: 100,
    alto: "47",
    resolucion: 1000,
    alt: site.brandName
}

export const navAriaLabel = {
    titulo: "Menú de navegación footer",
}

export const derechosReservados = {
  anio: new Date().getFullYear(),
  marca: site.brandName,
  frase: "Todos los derechos reservados.",
};

export const menus = [
  {
    titulo: "Políticas",
    links: [
      { label: "Aviso de privacidad", href: site.politicaPrivacidad },
      { label: "Términos y condiciones", href: site.politicaTerminos },
    ],
  },
  {
    titulo: "Síguenos",
    links: [
      { label: "Instagram", href: site.socialInstagram, target: "_blank", rel: "noopener", clases: "fa-brands fa-instagram" },
    ],
  },
];