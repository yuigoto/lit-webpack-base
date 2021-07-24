import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import imageFile from "assets/img/import.jpg";
import { html as markdownHtml, attributes } from "assets/data/test.md";

@customElement("page-home")
export class PageHome extends LitElement {
  render () {
    return html`
      <link rel="stylesheet" href="./index.css"/>
      <template-base>
        <site-header slot="header">
          <h1 class="text-center text-muted font-weight-100">Hello, World!</h1>
          <p class="text-center">Olá! Esta é uma aplicação usando Lit e web components, inspirada em partes no <code>create-react-app</code>, e feita apenas com Webpack!</p>
        </site-header>
        
        <div slot="body">
          <p class="text-center">Você pode usar conteúdo de public normalmente, como se fosse a raíz:</p>

          <p class="text-center">
            <img src="/img/hello.jpg" alt=""/>
          </p>

          <p class="text-center">Ou importar via código, para que seja hasheada:</p>

          <p class="text-center">
            <img src="${imageFile}" alt=""/>
          </p>

          <p class="text-center">
            Como bônus, adicionei Bootstrap e, também, FontAwesome! <i class="fa fa-truck"></i>
            <br/>
            <small class="text-muted">
              <em>(mas, como são Web Components, lembre-se de checar o escopo de uso e importar CSS devidamente!)</em>
            </small>
          </p>

          <p class="text-center">Também tem hot reload, resolução de caminhos pra JS/SCSS, imports de arquivos com resolução e outras mágicas.</p>

          <p class="text-center">Este projeto foi feito com o intuito de ensinar as pessoas a usarem Webpack, e explicar como bundlers e templates de projeto funcionam. Fazendo parte de um projeto no qual monto o MESMO boilerplate usando metodologias e frameworks diferentes, mas seguindo o mesmo modelo básico.</p>

          <hr/>

          <h4>Quer mais? Então aqui:</h4>
          <p>A gente também suporta Markdown com frontmatter!</p>
          
          <h5>Aqui um markdownzinho:</h5>

          <div class="shadow p-2 mb-2">
            ${unsafeHTML(markdownHtml)}
          </div>

          <h5>E o frontmatter dele:</h5>

          <div class="shadow p-2 mb-2">
            <pre>${JSON.stringify(attributes, null, 2)}</pre>
          </div>
        </div>

        <site-footer slot="footer">
          <p>
            <em>&copy;2021 Fabio Y. Goto</em>
          </p>
        </site-footer>
      </template-base>
    `;
  }
}
