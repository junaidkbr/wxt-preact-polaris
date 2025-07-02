import { createIntegratedUi } from "#imports";
import { render } from 'preact';
import App from './App.tsx';

export default defineContentScript({
  matches: ['<all_urls>'],
  async main(ctx) {
    // Inject Shopify Polaris
    await injectScript('/libs/shopify-polaris-web-components.js', {
      keepInDom: true,
    });

    const ui = await createIntegratedUi(ctx, {
      position: "inline",
      anchor: "body",
      append: "first",
      onMount: async (container) => {
        const target = document.body;
        target.appendChild(container);

        render(<App />, container);
        return { container };
      },
      onRemove: async (elements) => {
        const resolvedElements = await elements;
        if (resolvedElements?.container) {
          render(null, resolvedElements.container);
          resolvedElements.container.remove();
        }
      },
    });

    // Explicitly mount the UI
    ui.mount();

    browser.runtime.onMessage.addListener((event) => {
      if (event.type === "MOUNT_UI") {
        // dynamic mount by user action via messaging.
        ui.mount();
      }
    });
  },
});
