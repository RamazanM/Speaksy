import { createContext, type CSSProperties } from "react";

type Theme = {
  container: CSSProperties;
  textField: CSSProperties;
};
export const Themes: Record<string, Theme> = {
  Bubblegum: {
    container: {
      background: "#FFE6F0",
      color: "#333333",
      fontFamily: "'Comic Neue', 'Baloo 2', sans-serif",
    },
    textField: {
      background: "#FFFFFF",
      border: "2px solid #FF7EB9",
      borderRadius: "12px",
      color: "#333333",
      padding: "12px",
    },
  },

  Chalkboard: {
    container: {
      background: "#2E3A23",
      color: "#FFFFFF",
      fontFamily: "'Gloria Hallelujah', cursive",
    },
    textField: {
      background: "#3C4A2C",
      border: "2px solid #FFD54F",
      borderRadius: "8px",
      color: "#FFFFFF",
      padding: "12px",
    },
  },

  Rainbow: {
    container: {
      background: "linear-gradient(135deg, #A1C4FD 0%, #C2E9FB 100%)",
      color: "#2E2E2E",
      fontFamily: "'Poppins', sans-serif",
    },
    textField: {
      background: "#FFFFFFCC",
      border: "2px solid #FF9CEE",
      borderRadius: "10px",
      color: "#2E2E2E",
      padding: "12px",
    },
  },

  Bee: {
    container: {
      background: "#FFF8E1",
      color: "#333333",
      fontFamily: "'Nunito', sans-serif",
    },
    textField: {
      background: "#FFFFFF",
      border: "2px solid #FFC107",
      borderRadius: "8px",
      color: "#333333",
      padding: "12px",
    },
  },

  Robot: {
    container: {
      background: "#E3F2FD",
      color: "#212121",
      fontFamily: "'VT323', monospace",
    },
    textField: {
      background: "#FFFFFF",
      border: "2px solid #00BCD4",
      borderRadius: "8px",
      color: "#212121",
      padding: "12px",
    },
  },
};

export default createContext<Theme>(Themes.Bee);

