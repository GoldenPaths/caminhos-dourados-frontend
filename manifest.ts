import { VitePWAOptions } from "vite-plugin-pwa";

export const vitePWAManifest: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  devOptions: {
    enabled: true,
  },
  includeAssets: ["favicon.ico", "apple-touch-icon.png"],
  manifest: {
    name: "Caminhos Dourados",
    short_name: "Caminhos Dourados",
    description:
      "Plataforma que visa criar um ambiente de participação cidadã e colaboração ativa entre os moradores de comunidades e o governo municipal.",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    theme_color: "#D9961E",
    background_color: "#121214",
    display: "standalone",
    scope: "/",
    start_url: "/",
  },
};
