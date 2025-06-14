import { sync } from "glob";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    root: "./src",
    build: {
        outDir: path.resolve(__dirname, "dist"),
        emptyOutDir: true,
        rollupOptions: {
            input: [
                ...sync("./src/**/*.html".replace(/\\/g, "/")),
                ...sync("./src/**/*.js".replace(/\\/g, "/")),
            ],
        },
    },
    preview: {
        host: true,
        port: 4173,
        allowedHosts: ["menoss.incognity.dev"],
    },
});
