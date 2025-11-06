export const games = [
  {
    id: 1,
    name: "Sobrevivencia Espacial",
    description: "Esquiva triángulos mortales que vienen desde todos lados. ¡Sobrevive y consigue el mejor puntaje!",
    available: true,
    path: "/games/game1/index.html",
    color: "from-purple-600 to-blue-600",
    image: "/images/game1.png"  // 🔴 Ruta de la carátula del juego 1
  },
  {
    id: 2,
    name: "Robot minero",
    description: "Año 2157. Controla un robot dañado en las peligrosas Cuevas de Lava de Vulcanus-7. Recolecta 21 minerales para salvar a la humanidad.",
    available: true,
    path: "/games/game2/index.html",
    color: "from-gray-600 to-gray-800",
    image: "/images/game2.png"  // 🔴 Ruta de la carátula del juego 2
  },
  {
    id: 3,
    name: "Próximamente",
    description: "Nuevo juego en desarrollo",
    available: false,
    path: null,
    color: "from-gray-600 to-gray-800",
    image: null  // Sin imagen para juegos bloqueados
  }
];