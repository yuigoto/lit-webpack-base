import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("site-footer")
export class SiteFooter extends LitElement {
  render () {
    return html`
      <link rel="stylesheet" href="./index.css"/>
      <footer>
        <hr/>
        <slot></slot>
      </footer>
    `;
  }
}
