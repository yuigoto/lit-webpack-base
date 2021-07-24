import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("site-header")
export class SiteHeader extends LitElement {
  render () {
    return html`
      <link rel="stylesheet" href="./index.css"/>
      <header>
        <slot></slot>
      </header>
    `;
  }
}
