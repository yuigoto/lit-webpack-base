import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('yx-button')
export class YxButton extends LitElement {
  @property({ type: String })
  name;

  @property({ type: String })
  type = "default";

  @property({ type: Boolean })
  outline: false;

  render () {
    return html`
      <link rel="stylesheet" href="/index.css"/>

      <button class="btn btn${this.outline ? "-outline" : ""}-${this.type}">
        <slot></slot>
      </button>
    `;
  }
}
