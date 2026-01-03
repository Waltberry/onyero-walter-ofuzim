import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const isGhPages = process.env.GITHUB_PAGES === "true";
// If your repo *is* <username>.github.io, keep base: "/"
const ghBase = "/onyero-walter-ofuzim/";

export default defineConfig({
  plugins: [react()],
  base: isGhPages ? ghBase : "/",
});
