import { createRoot } from "react-dom/client";
import Lanyard from "./Lanyard.jsx";

class LanyardPortraitElement extends HTMLElement {
  connectedCallback() {
    if (this.reactRoot) return;

    this.reactRoot = createRoot(this);
    this.reactRoot.render(
      <Lanyard
        position={[0, 0, 13.5]}
        gravity={[0, -40, 0]}
        fov={16}
        transparent
        imageFit="cover"
        lanyardWidth={0.7}
      />,
    );
  }

  disconnectedCallback() {
    queueMicrotask(() => {
      if (this.isConnected || !this.reactRoot) return;
      this.reactRoot.unmount();
      this.reactRoot = null;
    });
  }
}

if (!customElements.get("lanyard-portrait")) {
  customElements.define("lanyard-portrait", LanyardPortraitElement);
}
