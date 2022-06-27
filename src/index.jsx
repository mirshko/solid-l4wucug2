import { createSignal } from "solid-js";
import { customElement } from "solid-element";

const style = /*css*/ `
  .lightbox {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4)
  }
`;

customElement("my-counter", { open: false }, ({ open }) => {  
  const [opened, setOpened] = createSignal(typeof open === "boolean" ? open : false);

  return (
    <div>
      {opened() ? (
        <div class="lightbox">
          <style>{style}</style>
          <button onClick={() => setOpened(false)}>Close</button>
        </div>
      ) : (
        null
      )}
    </div>
  );
});
