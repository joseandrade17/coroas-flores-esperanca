// ─── ICONS ─────────────────────────────────────────────────────
const SVG = {
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/></svg>`,
  wapp: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  map: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  quote: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>`,
  copy: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`,
  chevdown: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevright: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  ribbon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3l14 9-14 9V3z"/></svg>`,
  nav: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
};

// ─── STARS ─────────────────────────────────────────────────────
function renderStars(n) {
  let h = '';
  for (let i = 0; i < Math.floor(n); i++) h += `<svg class="star" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  if (n % 1) h += `<svg class="star star--half" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  return h;
}

// ─── WREATH SVG ────────────────────────────────────────────────
function wreathSVG(scale, active) {
  const c = 50, y = 54, r = 26 * scale, lr = 8 * scale, fr = 6 * scale;
  const col = active ? '#16a34a' : '#d1d5db';
  const col2 = active ? '#4ade80' : '#e5e7eb';
  let leafs = '';
  [0,90,180,270].forEach(a => {
    const rad = (a * Math.PI) / 180;
    const lx = c + (r + lr * 0.5) * Math.cos(rad - Math.PI/2);
    const ly = y + (r + lr * 0.5) * Math.sin(rad - Math.PI/2);
    leafs += `<ellipse cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" rx="${(lr*.6).toFixed(1)}" ry="${lr.toFixed(1)}" fill="${col}" transform="rotate(${a},${lx.toFixed(1)},${ly.toFixed(1)})" opacity=".85"/>`;
  });
  [45,135,225,315].forEach(a => {
    const rad = (a * Math.PI) / 180;
    const lx = c + (r + lr * 0.4) * Math.cos(rad - Math.PI/2);
    const ly = y + (r + lr * 0.4) * Math.sin(rad - Math.PI/2);
    leafs += `<ellipse cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" rx="${(lr*.5).toFixed(1)}" ry="${(lr*.85).toFixed(1)}" fill="${col2}" transform="rotate(${a+45},${lx.toFixed(1)},${ly.toFixed(1)})" opacity=".75"/>`;
  });
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="${c}" cy="${(y+r+4).toFixed(1)}" rx="${(r*.7).toFixed(1)}" ry="4" fill="rgba(0,0,0,0.08)"/>
    <circle cx="${c}" cy="${y}" r="${r.toFixed(1)}" stroke="${col}" stroke-width="${(3*scale).toFixed(1)}" fill="none"/>
    ${leafs}
    <circle cx="${c}" cy="${y}" r="${fr.toFixed(1)}" fill="${col}"/>
    <circle cx="${c}" cy="${y}" r="${(fr*.5).toFixed(1)}" fill="white"/>
  </svg>`;
}

// ─── NAVIGATE (base-aware) ──────────────────────────────────────
function getBase() {
  const b = document.querySelector('base');
  return b ? b.href.replace(/\/$/, '') : '';
}
function nav(path) { window.location.href = getBase() + path; }

// ─── HEADER ────────────────────────────────────────────────────
function renderHeader() {
  const base = getBase();
  const loc = window.location.pathname;

  // Build phrases preview (4 cols, 3 each)
  const cats = ["Religiosas","Para a Família","Amigos","Profissional"];
  const megaCols = cats.map(cat => {
    const items = PHRASES.filter(p => p.cat === cat).slice(0, 3).map(p =>
      `<div class="frases-mega__item" onclick="nav('pedido.html?faixa=${encodeURIComponent(p.text)}')">"${p.text.slice(0,80)}${p.text.length>80?'…':''}"</div>`
    ).join('');
    return `<div class="frases-mega__col"><p class="frases-mega__cat">${cat}</p>${items}</div>`;
  }).join('');

  const links = [
    { href: 'index.html', label: 'INÍCIO' },
    { href: 'index.html#catalogo', label: 'CATÁLOGO' },
    { href: 'pedido.html', label: 'FAZER PEDIDO' },
  ];

  const isActive = href => {
    const path = href.split('#')[0].replace('/index.html', '/');
    return loc.endsWith(path) || loc.endsWith(href);
  };

  const navLinks = links.map(l =>
    `<a href="${base}${l.href}" class="nav-link${isActive(l.href)?' active':''}">${l.label}</a>`
  ).join('');

  const frasesActive = loc.includes('frases') ? ' active' : '';

  const html = `
  <div class="topbar">
    <div class="topbar__inner">
      <span>Atendimento 24h para toda a região de São Paulo</span>
      <div class="topbar__links">
        <a href="tel:+55${WHATSAPP}">${SVG.phone} ${PHONE}</a>
        <a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noreferrer">${SVG.wapp} WhatsApp</a>
      </div>
    </div>
  </div>
  <header class="site-header">
    <div class="header__inner">
      <a href="${base}/index.html" class="brand">
        <img src="${base}imagens/Logo.png"alt="Logo" width="42" height="42"/>
        <div class="brand__text">
          <div class="brand__name">FlorEsperança</div>
          <div class="brand__tagline">Coroa de Flores <span class="gold">24h</span></div>
        </div>
      </a>
      <nav class="nav-desktop">
        ${navLinks}
        <div class="nav-dropdown">
          <button class="nav-dropdown__trigger${frasesActive}">FRASES ${SVG.chevdown}</button>
          <div class="frases-mega">
            <div class="frases-mega__header">
              <strong>${SVG.quote} Frases para Faixa</strong>
              <a href="${base}frases.html">Ver todas as frases</a>
            </div>
            <div class="frases-mega__grid">${megaCols}</div>
            <div class="frases-mega__footer"><a href="${base}frases.html">Ver todas as 32 frases disponíveis →</a></div>
          </div>
        </div>
        <a href="${base}cemiterios.html" class="nav-link${loc.includes('cemiterio')?' active':''}">CEMITÉRIOS</a>
        <a href="${base}quem-somos.html" class="nav-link${loc.includes('quem-somos')?' active':''}">QUEM SOMOS</a>
        <a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noreferrer" class="nav-link nav-link--btn">${SVG.wapp} Contato 24h</a>
      </nav>
      <button class="burger" id="burger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <nav class="nav-mobile" id="navMobile">
      <a href="${base}index.html">INÍCIO</a>
      <a href="${base}index.html#catalogo">CATÁLOGO</a>
      <a href="${base}pedido.html">FAZER PEDIDO</a>
      <a href="${base}frases.html">FRASES PARA FAIXA</a>
      <a href="${base}cemiterios.html">CEMITÉRIOS</a>
      <a href="${base}quem-somos.html">QUEM SOMOS</a>
      <a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noreferrer" class="wapp-btn">${SVG.wapp} Contato 24h pelo WhatsApp</a>
    </nav>
  </header>`;

  const wrap = document.getElementById('header-placeholder');
  if (wrap) wrap.innerHTML = html;

  // Burger toggle
  const burger = document.getElementById('burger');
  const mobile = document.getElementById('navMobile');
  if (burger && mobile) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobile.classList.toggle('open');
    });
  }
}

// ─── FOOTER ────────────────────────────────────────────────────
function renderFooter() {
  const base = getBase();
  const html = `
  <footer class="site-footer">
    <div class="footer__grid">
      <div>
        <div class="footer__brand">
          
          <div style="display: flex; flex-direction: column;">
            <span style="font-weight: bold; font-size: 1.1rem; color: #fff;">FlorEsperança</span>
            <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; color: #a7f3d0;
            margin-top: 2px;">Coroa de Flores <span style="color: #d4af37; font-weight: 700;">24h</span>
          </div>
        </div>
        <p style="margin-top: 12px; font-size: 0.78rem; color: #ffffff; font-weight: 500;">
          CNPJ: <strong>33.111.761/0001-70</strong>
        </p>
      </div>
      
      <div><h4>Produtos</h4><ul>
        <li><a href="${base}index.html">Catálogo</a></li>
        <li><a href="${base}pedido.html">Fazer Pedido</a></li>
        <li><a href="${base}frases.html">Frases para Faixa</a></li>
      </ul></div>
      <div><h4>Informações</h4><ul>
        <li><a href="${base}quem-somos.html">Quem Somos</a></li>
        <li><a href="${base}cemiterios.html">Cemitérios</a></li>
        <li><a href="${base}politica-de-devolucao.html">Política de troca e devolução</a></li>
      </ul></div>
      <div><h4>Contato</h4><ul>
        <li><a href="tel:+55${WHATSAPP}">${SVG.phone} ${PHONE}</a></li>
        
        <li> <a href="https://wa.me/${WHATSAPP}?text=Olá%20vim%20do%20site%20Coroas%20FlorEsperança%2024h%20e%20gostaria%20de%20mais%20informações" 
        target="_blank">
        ${SVG.wapp} WhatsApp 24h</a></li>
      </ul></div>
    </div>
    <div class="footer__bottom">© ${new Date().getFullYear()} Coroas Flores Esperança. Todos os direitos reservados.</div>
  </footer>`;
  const wrap = document.getElementById('footer-placeholder');
  if (wrap) wrap.innerHTML = html;
}

// ─── AUTO-INIT ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
});
