class TitleDynamic extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: "open" });
  
      //base do component <h1>Luis Felipe</h1>
      const componentRoot = document.createElement("h1");
      componentRoot.textContent = this.getAttribute("title");
  
      //estilizar o component
      const style = document.createElement("style");
      style.textContent = `
        h1{
          color: red;
        }
      `;
  
      //enviar para a shadow
      shadow.appendChild(componentRoot);
      shadow.appendChild(style);
    }
  }
  
  customElements.define("title-dynamic", TitleDynamic);