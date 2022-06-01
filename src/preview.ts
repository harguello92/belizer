import { Serialize, Unserialize } from "./main";

const serializeInitialize = (function () {
  const serializeInput = document.querySelector(
    'input[name="serialize"]'
  ) as HTMLInputElement;
  const serializePreview = document.querySelector(
    ".js-serialize-preview"
  ) as HTMLElement;

  return {
    init: () => {
      serializeInput?.addEventListener("change", () => {
        if (!serializePreview) return;

        serializePreview.innerHTML = Serialize(
          Object.assign({}, serializeInput.value.split(","))
        );
      });
    },
  };
})();

const unserializeInitialize = (function () {
  const unserializeInput = document.querySelector(
    'input[name="unserialize"]'
  ) as HTMLInputElement;
  const unserializePreview = document.querySelector(
    ".unserializePreview"
  ) as HTMLElement;

  return {
    init: () => {
      unserializeInput?.addEventListener("change", (event) => {
        if (!unserializePreview) return;

        unserializePreview.innerHTML = Unserialize(unserializeInput.value);
      });
    },
  };
})();

window.onload = function () {
  unserializeInitialize.init();
  serializeInitialize.init();
};
