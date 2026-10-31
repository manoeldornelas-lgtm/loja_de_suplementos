// POWER NUTRITION — catálogo e interações demonstrativas

const products = [
  {
    id: 1,
    name: "Creatina Monohidratada",
    brand: "Core Labs",
    category: "Creatina",
    weight: "300 g",
    price: 89.90,
    oldPrice: 119.90,
    popularity: 98,
    tag: "-25%",
    image: "https://images.unsplash.com/photo-1622484212850-eb596d769edc?auto=format&fit=crop&w=700&q=80",
    description: "Creatina monohidratada em pó. Produto demonstrativo; consulte sempre o rótulo e as orientações de um profissional."
  },
  {
    id: 2,
    name: "Whey Protein Concentrado",
    brand: "Strong Nutrition",
    category: "Whey Protein",
    weight: "900 g • Chocolate",
    price: 129.90,
    oldPrice: 159.90,
    popularity: 95,
    tag: "MAIS VENDIDO",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=700&q=80",
    description: "Suplemento proteico em pó, sabor chocolate. Imagem e especificações ilustrativas."
  },
  {
    id: 3,
    name: "Hipercalórico Mass",
    brand: "Power Fuel",
    category: "Hipercalóricos",
    weight: "3 kg • Baunilha",
    price: 99.90,
    oldPrice: 119.90,
    popularity: 88,
    tag: "OFERTA",
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=700&q=80",
    description: "Mistura em pó com proposta de complemento calórico. Confira ingredientes e informações nutricionais no rótulo."
  },
  {
    id: 4,
    name: "Pré-treino Nitro",
    brand: "Core Labs",
    category: "Pré-treino",
    weight: "300 g • Frutas vermelhas",
    price: 79.90,
    oldPrice: 94.90,
    popularity: 82,
    tag: "-16%",
    image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=700&q=80",
    description: "Produto ilustrativo. Pré-treinos podem conter estimulantes; verifique a composição e a indicação de uso."
  },
  {
    id: 5,
    name: "Whey Protein Isolado",
    brand: "Ultra Pro",
    category: "Whey Protein",
    weight: "900 g • Baunilha",
    price: 189.90,
    oldPrice: 219.90,
    popularity: 90,
    tag: "DESTAQUE",
    image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=700&q=80",
    description: "Suplemento proteico em pó, versão isolada. Dados fictícios para demonstração."
  },
  {
    id: 6,
    name: "Barra Protein",
    brand: "Fit Snack",
    category: "Barras de proteína",
    weight: "Unidade • 60 g",
    price: 9.90,
    oldPrice: 12.90,
    popularity: 77,
    tag: "-23%",
    image: "https://images.unsplash.com/photo-1622484212850-eb596d769edc?auto=format&fit=crop&w=700&q=80",
    description: "Barra de proteína ilustrativa. Consulte a tabela nutricional e os alergênicos antes do consumo."
  },
  {
    id: 7,
    name: "Multivitamínico",
    brand: "Vita+",
    category: "Vitaminas",
    weight: "60 cápsulas",
    price: 49.90,
    oldPrice: 59.90,
    popularity: 72,
    tag: "OFERTA",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=700&q=80",
    description: "Produto fictício para fins de demonstração. Suplementos não substituem uma alimentação equilibrada."
  },
  {
    id: 8,
    name: "Coqueteleira Pro",
    brand: "Power Gear",
    category: "Acessórios",
    weight: "600 ml • Preta",
    price: 29.90,
    oldPrice: 39.90,
    popularity: 70,
    tag: "-25%",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=80",
    description: "Coqueteleira para misturar bebidas. Acessório demonstrativo."
  },
  {
    id: 9,
    name: "Creatina Pura",
    brand: "Ultra Pro",
    category: "Creatina",
    weight: "150 g",
    price: 54.90,
    oldPrice: 64.90,
    popularity: 80,
    tag: "NOVO",
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=700&q=80",
    description: "Creatina em pó ilustrativa. Verifique procedência, composição e regularização do produto real."
  },
  {
    id: 10,
    name: "Hipercalórico Extreme",
    brand: "Strong Nutrition",
    category: "Hipercalóricos",
    weight: "1,5 kg • Morango",
    price: 69.90,
    oldPrice: 84.90,
    popularity: 75,
    tag: "-18%",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=700&q=80",
    description: "Complemento alimentar fictício para demonstração da loja."
  },
  {
    id: 11,
    name: "Vitamina C",
    brand: "Vita+",
    category: "Vitaminas",
    weight: "30 comprimidos",
    price: 24.90,
    oldPrice: 29.90,
    popularity: 68,
    tag: "OFERTA",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=700&q=80",
    description: "Produto ilustrativo. Consulte um profissional de saúde sobre a necessidade de suplementação."
  },
  {
    id: 12,
    name: "Corda de Pular",
    brand: "Power Gear",
    category: "Acessórios",
    weight: "Ajustável",
    price: 34.90,
    oldPrice: 44.90,
    popularity: 65,
    tag: "NOVO",
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=700&q=80",
    description: "Acessório fitness para atividades físicas."
  }
];

// FORMATAÇÃO DE PREÇOS

const money = value =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

// DADOS SALVOS NO NAVEGADOR

let cart = JSON.parse(localStorage.getItem("pn-cart") || "[]");

let favorites = JSON.parse(
  localStorage.getItem("pn-favorites") || "[]"
);

let couponApplied = false;
let favoriteMode = false;

// ELEMENTOS HTML

const $ = id => document.getElementById(id);

const productGrid = $("productGrid");
const overlay = $("overlay");
const cartPanel = $("cartPanel");
const productModal = $("productModal");
const checkoutModal = $("checkoutModal");

// SALVAR INFORMAÇÕES

function saveState() {
  localStorage.setItem("pn-cart", JSON.stringify(cart));

  localStorage.setItem(
    "pn-favorites",
    JSON.stringify(favorites)
  );
}

// NOTIFICAÇÕES

function toast(message) {
  const el = $("toast");

  el.textContent = message;
  el.classList.add("show");

  clearTimeout(toast.timer);

  toast.timer = setTimeout(() => {
    el.classList.remove("show");
  }, 2300);
}

// FILTRAR PRODUTOS

function filteredProducts() {
  let list = [...products];

  const category = $("categoryFilter").value;
  const max = $("priceFilter").value;
  const sort = $("sortFilter").value;

  const term = $("searchInput").value.trim().toLowerCase();

  if (category !== "Todos") {
    list = list.filter(p => p.category === category);
  }

  if (max !== "all") {
    list = list.filter(p => p.price <= Number(max));
  }

  if (term) {
    list = list.filter(p =>
      (p.name + " " + p.brand + " " + p.category)
        .toLowerCase()
        .includes(term)
    );
  }

  if (favoriteMode) {
    list = list.filter(p => favorites.includes(p.id));
  }

  if (sort === "low") {
    list.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    list.sort((a, b) => b.price - a.price);
  }

  if (sort === "popular") {
    list.sort((a, b) => b.popularity - a.popularity);
  }

  return list;
}

// MOSTRAR PRODUTOS NA TELA

function renderProducts() {
  const list = filteredProducts();

  $("resultCount").textContent =
    `${list.length} produto${list.length === 1 ? "" : "s"} encontrado${list.length === 1 ? "" : "s"}`;

  $("emptyState").hidden = list.length > 0;

  productGrid.innerHTML = list.map(p => `
    <article class="product-card">

      <div class="product-image" data-detail="${p.id}">

        <img
          src="${p.image}"
          alt="${p.name}"
          loading="lazy"
          onerror="this.src='https://placehold.co/500x500/f1f1f1/222?text=Power+Nutrition'"
        >

        <span class="tag">${p.tag}</span>

        <button
          class="favorite-btn ${favorites.includes(p.id) ? "active" : ""}"
          data-favorite="${p.id}"
          aria-label="Favoritar ${p.name}"
        >
          ${favorites.includes(p.id) ? "♥" : "♡"}
        </button>

      </div>

      <div class="product-info">

        <span class="product-brand">${p.brand}</span>

        <h3>${p.name}</h3>

        <span class="product-weight">${p.weight}</span>

        <div class="price-line">
          <span class="old-price">${money(p.oldPrice)}</span>
          <strong class="price">${money(p.price)}</strong>
        </div>

        <small class="installment">
          ou 3x de ${money(p.price / 3)} sem juros (simulação)
        </small>

        <button class="add-btn" data-add="${p.id}">
          ADICIONAR AO CARRINHO
        </button>

      </div>
    </article>
  `).join("");
}

// ADICIONAR AO CARRINHO

function addToCart(id) {
  const item = cart.find(x => x.id === id);

  if (item) {
    item.qty++;
  } else {
    cart.push({
      id,
      qty: 1
    });
  }

  saveState();
  renderCart();

  toast("Produto adicionado ao carrinho!");
}

// CALCULAR VALORES

function cartTotals() {
  const subtotal = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);

    return sum + product.price * item.qty;
  }, 0);

  const discount = couponApplied ? subtotal * 0.10 : 0;

  return {
    subtotal,
    discount,
    total: subtotal - discount
  };
}

// MOSTRAR CARRINHO

function renderCart() {
  $("cartCount").textContent = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  $("cartItems").innerHTML = cart.length
    ? cart.map(item => {

        const p = products.find(x => x.id === item.id);

        return `
          <div class="cart-item">

            <img src="${p.image}" alt="">

            <div>

              <h4>${p.name}</h4>

              <small>${money(p.price)} cada</small>

              <div class="quantity">

                <button
                  data-qty="${p.id}"
                  data-change="-1"
                >−</button>

                <span>${item.qty}</span>

                <button
                  data-qty="${p.id}"
                  data-change="1"
                >+</button>

              </div>

            </div>

            <div>

              <strong>${money(p.price * item.qty)}</strong>

              <br>

              <button
                class="remove-item"
                data-remove="${p.id}"
              >
                Remover
              </button>

            </div>

          </div>
        `;

      }).join("")

    : `
      <p class="empty-state">
        Seu carrinho está vazio.<br>
        Adicione produtos para começar!
      </p>
    `;

  const t = cartTotals();

  $("subtotal").textContent = money(t.subtotal);

  $("discount").textContent = "- " + money(t.discount);

  $("total").textContent = money(t.total);

  $("checkoutButton").disabled = cart.length === 0;

  $("checkoutButton").style.opacity =
    cart.length ? 1 : 0.45;
}

// ABRIR CARRINHO

function openPanel() {
  overlay.classList.add("open");

  cartPanel.classList.add("open");

  cartPanel.setAttribute("aria-hidden", "false");
}

// FECHAR JANELAS

function closeAll() {
  overlay.classList.remove("open");

  cartPanel.classList.remove("open");

  [productModal, checkoutModal].forEach(m => {
    m.classList.remove("open");

    m.setAttribute("aria-hidden", "true");
  });

  cartPanel.setAttribute("aria-hidden", "true");
}

// DETALHES DO PRODUTO

function openProduct(id) {
  const p = products.find(x => x.id === id);

  $("productDetail").innerHTML = `
    <div class="detail-layout">

      <img src="${p.image}" alt="${p.name}">

      <div>

        <span class="product-brand">
          ${p.brand} • ${p.category}
        </span>

        <h2>${p.name}</h2>

        <p>${p.description}</p>

        <span class="product-weight">${p.weight}</span>

        <div class="detail-price">
          ${money(p.price)}
        </div>

        <button
          class="btn btn-primary full-btn"
          data-add="${p.id}"
        >
          ADICIONAR AO CARRINHO
        </button>

      </div>

    </div>
  `;

  productModal.classList.add("open");

  productModal.setAttribute("aria-hidden", "false");

  overlay.classList.add("open");
}

// FINALIZAÇÃO DA COMPRA

function openCheckout() {
  if (!cart.length) return;

  closeAll();

  $("checkoutTotal").textContent =
    money(cartTotals().total);

  $("orderSuccess").hidden = true;

  $("checkoutForm").hidden = false;

  checkoutModal.classList.add("open");

  checkoutModal.setAttribute("aria-hidden", "false");

  overlay.classList.add("open");
}

// CLIQUES NOS PRODUTOS

productGrid.addEventListener("click", e => {

  const add = e.target.closest("[data-add]");

  const fav = e.target.closest("[data-favorite]");

  const detail = e.target.closest("[data-detail]");

  if (add) {
    addToCart(Number(add.dataset.add));
    return;
  }

  if (fav) {

    const id = Number(fav.dataset.favorite);

    favorites = favorites.includes(id)
      ? favorites.filter(x => x !== id)
      : [...favorites, id];

    saveState();

    renderProducts();

    return;
  }

  if (detail) {
    openProduct(Number(detail.dataset.detail));
  }

});

// ALTERAR QUANTIDADES E REMOVER PRODUTOS

$("cartItems").addEventListener("click", e => {

  const qty = e.target.closest("[data-qty]");

  const remove = e.target.closest("[data-remove]");

  if (qty) {

    const id = Number(qty.dataset.qty);

    const item = cart.find(x => x.id === id);

    item.qty += Number(qty.dataset.change);

    if (item.qty <= 0) {
      cart = cart.filter(x => x.id !== id);
    }
  }

  if (remove) {
    cart = cart.filter(
      x => x.id !== Number(remove.dataset.remove)
    );
  }

  saveState();

  renderCart();

});

// PESQUISA

$("searchForm").addEventListener("submit", e => {

  e.preventDefault();

  favoriteMode = false;

  renderProducts();

  $("catalogo").scrollIntoView({
    behavior: "smooth"
  });

});

$("searchInput").addEventListener("input", () => {

  favoriteMode = false;

  renderProducts();

});

// FILTROS

["categoryFilter", "priceFilter", "sortFilter"].forEach(id => {

  $(id).addEventListener("change", () => {

    favoriteMode = false;

    renderProducts();

  });

});

// LIMPAR FILTROS

$("clearFilters").addEventListener("click", () => {

  $("categoryFilter").value = "Todos";

  $("priceFilter").value = "all";

  $("sortFilter").value = "featured";

  $("searchInput").value = "";

  favoriteMode = false;

  renderProducts();

});

// MENU DE CATEGORIAS

document.querySelectorAll("[data-category]").forEach(el => {

  el.addEventListener("click", () => {

    $("categoryFilter").value = el.dataset.category;

    favoriteMode = false;

    renderProducts();

    $("catalogo").scrollIntoView({
      behavior: "smooth"
    });

  });

});

// FAVORITOS

$("favoritesToggle").addEventListener("click", () => {

  favoriteMode = !favoriteMode;

  $("favoritesToggle").style.color =
    favoriteMode ? "var(--red)" : "";

  renderProducts();

  $("catalogo").scrollIntoView({
    behavior: "smooth"
  });

  toast(
    favoriteMode
      ? "Exibindo seus favoritos"
      : "Exibindo todos os produtos"
  );

});

// ABRIR CARRINHO E FINALIZAR

$("cartToggle").addEventListener("click", openPanel);

$("checkoutButton").addEventListener("click", openCheckout);

// FECHAR JANELAS

overlay.addEventListener("click", closeAll);

document.querySelectorAll("[data-close]").forEach(el => {

  el.addEventListener("click", closeAll);

});

// APLICAR CUPOM

$("applyCoupon").addEventListener("click", () => {

  const code = $("couponInput").value.trim().toUpperCase();

  if (code === "POWER10") {

    couponApplied = true;

    $("couponMessage").textContent =
      "Cupom aplicado: 10% de desconto.";

    $("couponMessage").style.color = "green";

  } else {

    $("couponMessage").textContent =
      "Cupom inválido. Tente POWER10.";

    $("couponMessage").style.color = "var(--red)";

  }

  renderCart();

});

// COPIAR CUPOM

$("copyCoupon").addEventListener("click", async () => {

  try {

    await navigator.clipboard.writeText("POWER10");

    toast("Cupom POWER10 copiado!");

  } catch {

    toast("Use o cupom POWER10 no carrinho.");

  }

});

// CONFIRMAR PEDIDO

$("checkoutForm").addEventListener("submit", e => {

  e.preventDefault();

  if (!cart.length) return;

  const form = new FormData(e.currentTarget);

  const name = form.get("name");

  const orderNumber =
    "PN" + Math.floor(100000 + Math.random() * 900000);

  $("checkoutForm").hidden = true;

  $("orderSuccess").hidden = false;

  $("orderSuccess").innerHTML = `
    <strong>
      Pedido ${orderNumber} registrado na demonstração!
    </strong>

    <br>

    Obrigado, ${String(name).replace(/[<>&"]/g, "")}.

    Este é apenas um teste: nenhum pagamento foi realizado
    e nenhum dado foi enviado.

    <br><br>

    <button class="btn btn-primary" id="finishOrder">
      VOLTAR À LOJA
    </button>
  `;

  cart = [];

  couponApplied = false;

  saveState();

  renderCart();

  $("finishOrder").addEventListener("click", () => {

    closeAll();

    renderProducts();

  });

});

// INICIALIZAR SITE

renderProducts();

renderCart();