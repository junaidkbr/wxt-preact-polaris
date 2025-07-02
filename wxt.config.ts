import { defineConfig } from "wxt";
import preact from "@preact/preset-vite";

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    web_accessible_resources: [
      {
        resources: ["libs/shopify-polaris-web-components.js"],
        matches: ["<all_urls>"],
      },
    ],
  },
  vite: () => ({
    plugins: [preact()],
  }),
  webExt: {
    chromiumArgs: ["--disable-infobars", "https://example.com/"],
  },
});
