import { site } from "./site";

export const preguntas = [
  { name: "nombre", label: "Nombre completo", type: "text", required: true },
  { name: "empresa", label: "Empresa", type: "text", required: true },
  { name: "telefono", label: "Teléfono / WhatsApp", type: "tel", required: true },
  { name: "email", label: "Correo electrónico", type: "email", required: true },

  {
    name: "servicio",
    label: "¿Qué tipo de servicio necesitas?",
    type: "select",
    required: true,
    opciones: [
      { opcion: "Selecciona una opción", valor: "" },
      { opcion: "Servicio 1", valor: "Servicio 1" },
      { opcion: "Servicio 2", valor: "Servicio 2" },
      { opcion: "Servicio 3", valor: "Servicio 3" }
    ]
  },

  {
    name: "instalaciones",
    label: "¿Qué tipo de instalaciones requiere tu proyecto?",
    type: "textarea",
    required: true
  },

  {
    name: "terminos",
    label: "Acepto los términos y condiciones",
    type: "checkbox",
    urlPoliticas: site.politicaTerminos,
    textoPolitica: "Ver términos y condiciones",
    required: true
  }
];

export const boton = [
  {
    paginaGracias: "/gracias",
    cta: "Solicitar asesoría para mi proyecto"
  }
];