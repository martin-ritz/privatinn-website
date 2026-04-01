import './header.css';

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <div class="wrapper">
          <a href="/" class="site-header__logo">
            <div class="site-header__logo--text">PRIVAT<span class="forward__slash"> / </span>INN</div>
          </a>

          <nav class="site-header__nav">
            <ul class="site-header__nav-list">
              <li><a href="/pokoje">Pokoje</a></li>
              <li><a href="/galerie">Galerie</a></li>
              <li><a href="/tipy">Tipy</a></li>
              <li><a href="/cenik">Ceník</a></li>
              <li><a href="/rezervace">Rezervace</a></li>
              <li><a href="/kontakt">Kontakt</a></li>
            </ul>
          </nav>

          <button class="site-header__hamburger" aria-label="Otevřít menu" aria-expanded="false">
            <span class="hamburger__bar"></span>
            <span class="hamburger__bar"></span>
            <span class="hamburger__bar"></span>
          </button>
        </div>
      </header>
    `;

    this._bindHamburger();
  }

  _bindHamburger() {
    const btn = this.querySelector('.site-header__hamburger');
    const nav = this.querySelector('.site-header__nav');

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      btn.classList.toggle('is-open', !isOpen);
      nav.classList.toggle('is-open', !isOpen);
    });
  }
}

customElements.define('site-header', SiteHeader);