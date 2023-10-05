import { VitePWAOptions } from "vite-plugin-pwa";

export const vitePWAManifest: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  includeAssets: ["favicon.ico", "apple-touch-icon.png"],
  devOptions: { enabled: true },
  manifest: {
    name: "Caminhos Dourados",
    short_name: "Caminhos Dourados",
    description:
      "A Plataforma visa ser um facilitador inovador de parceria com a Passos Mágicos para criar um ambiente de participação cidadã e colaboração ativa entre os moradores de comunidades e apoiar pequenas empresas locais",
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
