import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("template-base")
export class TemplateBase extends LitElement {
  render () {
    return html`
      <link rel="stylesheet" href="./index.css"/>
      <div class="container py-5">
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
}
