import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

type NetlifyIdentityUser = {
  email?: string;
};

type NetlifyIdentity = {
  on: (event: "init" | "login", callback: (user?: NetlifyIdentityUser | null) => void) => void;
};

declare global {
  interface Window {
    netlifyIdentity?: NetlifyIdentity;
  }
}

const initializeNetlifyIdentity = () => {
  const identity = window.netlifyIdentity;

  if (!identity) {
    return;
  }

  identity.on("init", (user) => {
    if (user) {
      return;
    }

    identity.on("login", () => {
      window.location.href = "/admin/";
    });
  });
};

if (typeof window !== "undefined") {
  window.addEventListener("load", initializeNetlifyIdentity, { once: true });
}

createRoot(document.getElementById("root")!).render(
    <App />
);
