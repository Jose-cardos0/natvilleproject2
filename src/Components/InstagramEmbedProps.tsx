// src/components/InstagramEmbed.tsx
import React, { useEffect } from "react";

type InstagramEmbedProps = {
  /** URL completa do post, ex: https://www.instagram.com/p/DI67UWoyq5B/ */
  url: string;
  /** Largura máxima do embed em pixels */
  maxWidth?: number;
  /** Oculta ou não a legenda */
  hideCaption?: boolean;
};

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

export const InstagramEmbed: React.FC<InstagramEmbedProps> = ({
  url,
  maxWidth = 540,
  hideCaption = false,
}) => {
  useEffect(() => {
    // Se o script já foi carregado, só reprocessa
    if (window.instgrm?.Embeds) {
      window.instgrm.Embeds.process();
    } else {
      // Senão, injeta o script oficial
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      data-instgrm-hidecaption={hideCaption ? "true" : "false"}
      style={{
        backgroundColor: "#FFF",
        border: "0",
        borderRadius: "3px",
        boxShadow: "0 0 1px rgba(0,0,0,0.5), 0 1px 10px rgba(0,0,0,0.15)",
        margin: "1px auto",
        maxWidth: `${maxWidth}px`,
        padding: "0",
        width: "100%",
      }}
    ></blockquote>
  );
};
