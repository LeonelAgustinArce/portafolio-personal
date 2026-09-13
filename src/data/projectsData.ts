import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "UnaHur Anti-Social Net",
    subtitle: "Frontend en React & TypeScript",
    category: "Frontend",
    description:
      "Red social de tipo foro intermedio para explorar la interacción de usuarios, autenticación y flujo de publicaciones en una experiencia de frontend funcional y clara.",
    features: [
      "Manejo de sesión con estado global y persistencia local para una experiencia consistente.",
      "Rutas protegidas y navegación con react-router-dom para controlar acceso en la app.",
      "Consumo de API REST para usuarios, posts, comentarios e imágenes con estructura modular.",
      "Diseño responsive con Bootstrap para mantener una interfaz accesible y ordenada.",
    ],
    tags: ["React", "TypeScript", "Bootstrap", "React Router", "Context API"],
    repo: "https://github.com/Maxiavalos/anti-social",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=338&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "UnaHur Anti-Social Net",
    subtitle: "Backend con lógica de negocio y API",
    category: "Backend",
    description:
      "Proyecto orientado a estructurar la lógica de una red social desde el backend, con autenticación, publicaciones y comentarios centrados en una API REST funcional.",
    features: [
      "Manejo de usuarios y sesiones con control de acceso en la capa de negocio.",
      "Endpoints REST para publicaciones, comentarios y validación de datos con enfoque en claridad y escalabilidad.",
      "Flujo de datos bien definido entre frontend y servidor para mantener la app consistente.",
      "Arquitectura modular que facilita mantener y extender la lógica del proyecto.",
    ],
    tags: ["API REST", "Autenticación", "Backend", "Node", "Express"],
    repo: "https://github.com/Maxiavalos/anti-social",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=338&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "UnaHur Anti-Social Net",
    subtitle: "Proyecto Full Stack integrador",
    category: "Full Stack",
    description:
      "Proyecto integrador que une experiencia de usuario, lógica de negocio y consumo de API para entregar una red social completa con flujo funcional de interacción.",
    features: [
      "Integración completa entre frontend y backend como producto único y coherente.",
      "Diseño de rutas y autenticación con una experiencia clara para el usuario final.",
      "Comunicación efectiva con la API REST y gestión de sesiones en una app realista.",
      "Solución pensada como experiencia total de red social con enfoque funcional.",
    ],
    tags: ["Full Stack", "React", "API", "Autenticación", "UX"],
    repo: "https://github.com/Maxiavalos/anti-social",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=338&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Luna & Granos Café",
    subtitle: "Aplicación web de cafetería online",
    category: "Frontend",
    description:
      "Aplicación web para una cafetería con catálogo de productos, carrito de compras y flujo de reserva, pensada para mostrar la experiencia de compra digital en un contexto real.",
    features: [
      "Componentes funcionales con hooks y React Router DOM para una navegación clara.",
      "Carrito con persistencia local y filtros de búsqueda para mejorar la experiencia de compra.",
      "Formulario controlado con validaciones y diseño responsive para mantener una interfaz usable.",
    ],
    tags: ["React", "JavaScript", "Bootstrap", "React Router", "LocalStorage"],
    repo: "https://github.com/LeonelAgustinArce/Proyecto-CIU-LosDesamparados",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=338&fit=crop&auto=format",
  },
];
