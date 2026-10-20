import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eduardo Vásquez - Portfolio",
    short_name: "EV Portfolio",
    description:
      "Portfolio of Eduardo Vásquez - Full Stack & Mobile Software Engineer",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#007acc",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/perfil.JPG",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
