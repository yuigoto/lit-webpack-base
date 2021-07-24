import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("site-root")
export class SiteRoot extends LitElement {
  render () {
    return html`
      <page-home></page-home>
    `;
  }
}
