import { siteUrl } from "../config/site.mjs";

export const site = {
  lang: "es-MX",
  ogLocale: "es_MX",
  siteUrl,
  brandName: "VEAN Coordinadora",
  serviceName: "Proyectos y Ejecución de Obras Electromecánicas",
  city: "León, Guanajuato",
  countryName: "México",
  metaDescription: "VEAN Coordinadora ofrece proyectos, obras, mantenimiento integral y modelado BIM para instalaciones electromecánicas, con experiencia en hotelería, comercios, industria, gobierno y desarrollos.",
  ogDescription: "Proyectos y obras electromecánicas con calidad, experiencia y enfoque en seguridad para empresas, comercios, industrias y desarrollos. Contáctanos para cotizar tu proyecto.",
  socialFacebook: "",
  socialInstagram: "https://www.instagram.com/vean.coordinadora/",
  socialLinkedIn: "",
  regresarInicio: "Regresar a inicio",
  politicaPrivacidad: "/politicas/privacidad",
  politicaTerminos: "/politicas/terminos",
  numeroTelefonico: "+52 477 784 0856",
  correoElectronico: "vean.gerencia@gmail.com"
};

export function buildTitle() {
  return `${site.serviceName} | ${site.brandName}`;
}

export function mediaUrl(fileName: string) {
  return `${site.siteUrl}media/${fileName}`;
}
