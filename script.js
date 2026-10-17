/* ================= EDIT THIS SECTION ONLY =================
   Shop details, menu, offers. Everything else updates automatically. */
const CONFIG = {
  // Replace with the real WhatsApp number: country code + number, digits only (Czech example format: 420XXXXXXXXX)
  whatsapp: "420000000000",
  address: { en: "[Restaurant address – to be added], Prague", cs: "[Adresa restaurace – doplnit], Praha" },
  phone: "[Phone number – to be added]",
  hours: { en: "[Opening hours – to be added]", cs: "[Otevírací doba – doplnit]" },
  mapQuery: "Prague, Czech Republic", // replace with the full address once known
  currency: "Kč"
};

// img: put a file path (e.g. "images/margherita.jpg") or leave "" to show the emoji. Prices are SAMPLE prices.
const MENU = [
  { id: 1, cat: "pizza", emoji: "🍕", img: "", price: 199,
    name: { en: "Margherita Pizza", cs: "Pizza Margherita" },
    desc: { en: "Tomato sauce, mozzarella, fresh basil.", cs: "Rajčatový základ, mozzarella, čerstvá bazalka." } },
  { id: 2, cat: "pizza", emoji: "🍕", img: "", price: 249,
    name: { en: "Pepperoni Pizza", cs: "Pizza Pepperoni" },
    desc: { en: "Mozzarella and spicy pepperoni.", cs: "Mozzarella a pikantní salám pepperoni." } },
  { id: 3, cat: "pizza", emoji: "🧀", img: "", price: 269,
    name: { en: "Four Cheese Pizza", cs: "Pizza Čtyři sýry" },
    desc: { en: "Four cheeses on a crisp base.", cs: "Čtyři druhy sýra na křupavém těstě." } },
  { id: 4, cat: "pizza", emoji: "🍗", img: "", price: 259,
    name: { en: "BBQ Chicken Pizza", cs: "BBQ kuřecí pizza" },
    desc: { en: "Chicken, BBQ sauce, red onion.", cs: "Kuřecí maso, BBQ omáčka, červená cibule." } },
  { id: 5, cat: "tacos", emoji: "🌮", img: "", price: 149,
    name: { en: "Classic Beef Tacos", cs: "Klasická hovězí tacos" },
    desc: { en: "Seasoned beef, salsa, onion, coriander.", cs: "Kořeněné hovězí, salsa, cibule, koriandr." } },
  { id: 6, cat: "tacos", emoji: "🌶️", img: "", price: 139,
    name: { en: "Spicy Chicken Tacos", cs: "Pikantní kuřecí tacos" },
    desc: { en: "Chilli chicken, slaw, lime.", cs: "Kuře na chilli, zelný salát, limetka." } },
  { id: 7, cat: "tacos", emoji: "🥑", img: "", price: 119,
    name: { en: "Vegetarian Tacos", cs: "Vegetariánská tacos" },
    desc: { en: "Beans, avocado, pico de gallo.", cs: "Fazole, avokádo, pico de gallo." } },
  { id: 8, cat: "combo", emoji: "🍕🌮", img: "", price: 329,
    name: { en: "Pizza and Tacos Combo", cs: "Kombo pizza a tacos" },
    desc: { en: "One pizza of your choice plus tacos.", cs: "Pizza dle výběru a tacos." } },
  { id: 9, cat: "sides", emoji: "🍟", img: "", price: 69,
    name: { en: "French Fries", cs: "Hranolky" },
    desc: { en: "Crispy, lightly salted.", cs: "Křupavé, lehce solené." } },
  { id: 10, cat: "drinks", emoji: "🥤", img: "", price: 39,
    name: { en: "Soft Drinks", cs: "Nealkoholické nápoje" },
    desc: { en: "Ask for today's selection.", cs: "Zeptejte se na dnešní nabídku." } }
];

const OFFERS = [ // sample offers – edit or delete freely
  { title: { en: "Student deal", cs: "Studentská sleva" },
    text: { en: "10% off with a valid student card (sample offer).", cs: "10 % sleva se studentským průkazem (ukázková nabídka)." } },
  { title: { en: "Combo deal", cs: "Kombo nabídka" },
    text: { en: "Pizza + tacos combo for 329 Kč (sample price).", cs: "Kombo pizza + tacos za 329 Kč (ukázková cena)." } },
  { title: { en: "Lunch for office workers", cs: "Oběd pro kanceláře" },
    text: { en: "Add fries and a drink to any taco order – details to be confirmed.", cs: "K objednávce tacos přidejte hranolky a nápoj – detaily upřesníme." } }
];
/* ================= END OF EDITABLE SECTION ================= */

const T = {
  en: { navMenu: "Menu", navOffers: "Offers", navContact: "Contact", cart: "Cart", orderNow: "Order now", viewMenu: "View menu",
    heroTitle: "Hot pizza. Loud tacos. Fast in Prague.", heroSub: "Stone-baked pizza and street-style tacos for takeaway and delivery.",
    menuTitle: "Menu", sample: "Sample prices – to be confirmed by the restaurant.", search: "Search the menu", all: "All",
    pizza: "Pizza", tacos: "Tacos", combo: "Combo Meals", sides: "Sides", drinks: "Drinks",
    add: "Add to cart", empty: "Your cart is empty.", total: "Total", delivery: "Delivery", pickup: "Pickup",
    name: "Name", phoneField: "Phone", addrField: "Delivery address in Prague", pay: "Payment is arranged with the restaurant on delivery or pickup.",
    sendWa: "Send order via WhatsApp", offersTitle: "Special offers", contactTitle: "Contact & hours", address: "Address", phone: "Phone", hours: "Opening hours",
    openMap: "Open in Google Maps", none: "Nothing matches your search.", remove: "Remove",
    footer: "Demo website. Ordering opens a WhatsApp message; no online payment or order processing is included.",
    eName: "Please enter your name.", ePhone: "Please enter a valid phone number.", eAddr: "Please enter your delivery address.", eCart: "Add at least one item first." },
  cs: { navMenu: "Menu", navOffers: "Nabídky", navContact: "Kontakt", cart: "Košík", orderNow: "Objednat", viewMenu: "Zobrazit menu",
    heroTitle: "Horká pizza. Hlasitá tacos. Rychle v Praze.", heroSub: "Pizza z pece a tacos ve street stylu s odběrem i rozvozem.",
    menuTitle: "Menu", sample: "Ukázkové ceny – musí je potvrdit restaurace.", search: "Hledat v menu", all: "Vše",
    pizza: "Pizza", tacos: "Tacos", combo: "Kombo menu", sides: "Přílohy", drinks: "Nápoje",
    add: "Do košíku", empty: "Košík je prázdný.", total: "Celkem", delivery: "Rozvoz", pickup: "Osobní odběr",
    name: "Jméno", phoneField: "Telefon", addrField: "Adresa doručení v Praze", pay: "Platba se domlouvá s restaurací při doručení nebo odběru.",
    sendWa: "Odeslat objednávku přes WhatsApp", offersTitle: "Speciální nabídky", contactTitle: "Kontakt a otevírací doba", address: "Adresa", phone: "Telefon", hours: "Otevírací doba",
    openMap: "Otevřít v Mapách Google", none: "Nic nenalezeno.", remove: "Odebrat",
    footer: "Ukázkový web. Objednávka otevře zprávu ve WhatsAppu; online platba ani zpracování objednávek nejsou součástí.",
    eName: "Zadejte své jméno.", ePhone: "Zadejte platné telefonní číslo.", eAddr: "Zadejte adresu doručení.", eCart: "Nejdříve přidejte položku." }
};

const $ = (s, r = document) => r.querySelector(s);
let lang = localStorage.getItem("lang") || "en";
let cat = "all", q = "";
let cart = JSON.parse(localStorage.getItem("cart") || "{}");
const money = n => `${n} ${CONFIG.currency}`;
const tr = k => T[lang][k] || k;
const save = () => localStorage.setItem("cart", JSON.stringify(cart));

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(e => e.textContent = tr(e.dataset.i18n));
  document.querySelectorAll("[data-i18n-ph]").forEach(e => e.placeholder = tr(e.dataset.i18nPh));
  document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
  $("#cAddress").textContent = CONFIG.address[lang];
  $("#cPhone").textContent = CONFIG.phone;
  $("#cHours").textContent = CONFIG.hours[lang];
  $("#mapLink").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CONFIG.mapQuery);
  $("#offerList").innerHTML = OFFERS.map(o => `<div class="offer"><h3>${o.title[lang]}</h3><p>${o.text[lang]}</p></div>`).join("");
  renderChips(); renderMenu(); renderCart();
}

function renderChips() {
  const cats = ["all", ...new Set(MENU.map(i => i.cat))];
  $("#chips").innerHTML = cats.map(c => `<button class="chip ${c === cat ? "on" : ""}" data-cat="${c}">${tr(c)}</button>`).join("");
}

function renderMenu() {
  const items = MENU.filter(i => (cat === "all" || i.cat === cat) &&
    (i.name[lang] + " " + i.desc[lang]).toLowerCase().includes(q));
  $("#grid").innerHTML = items.length ? items.map(i => `
    <article class="card">
      <div class="thumb">${i.img ? `<img src="${i.img}" alt="${i.name[lang]}" loading="lazy">` : i.emoji}</div>
      <div class="card-body"><h3>${i.name[lang]}</h3><p>${i.desc[lang]}</p>
        <div class="row"><span class="price">${money(i.price)}</span>
        <button class="add" data-add="${i.id}">${tr("add")}</button></div></div>
    </article>`).join("") : `<p>${tr("none")}</p>`;
}

function renderCart() {
  const rows = Object.entries(cart).map(([id, n]) => ({ item: MENU.find(m => m.id == id), n })).filter(r => r.item);
  $("#cartItems").innerHTML = rows.length ? rows.map(({ item, n }) => `
    <div class="line"><span>${item.name[lang]}<br><small>${money(item.price)}</small></span>
      <div class="q"><button data-dec="${item.id}" aria-label="-">−</button><b>${n}</b><button data-inc="${item.id}" aria-label="+">+</button></div>
      <button class="rm" data-rm="${item.id}" aria-label="${tr("remove")}">✕</button></div>`).join("") : `<p>${tr("empty")}</p>`;
  const total = rows.reduce((s, r) => s + r.item.price * r.n, 0);
  $("#cartTotal").textContent = money(total);
  $("#cartCount").textContent = rows.reduce((s, r) => s + r.n, 0);
  save();
  return { rows, total };
}

function setQty(id, n) { n > 0 ? cart[id] = n : delete cart[id]; renderCart(); }
const toggleDrawer = open => { $("#drawer").classList.toggle("open", open); $("#drawer").setAttribute("aria-hidden", !open); };

document.addEventListener("click", e => {
  const t = e.target.closest("button");
  if (!t) return;
  if (t.dataset.lang) { lang = t.dataset.lang; localStorage.setItem("lang", lang); applyLang(); }
  if (t.dataset.cat) { cat = t.dataset.cat; renderChips(); renderMenu(); }
  if (t.dataset.add) { setQty(t.dataset.add, (cart[t.dataset.add] || 0) + 1); toggleDrawer(true); }
  if (t.dataset.inc) setQty(t.dataset.inc, cart[t.dataset.inc] + 1);
  if (t.dataset.dec) setQty(t.dataset.dec, cart[t.dataset.dec] - 1);
  if (t.dataset.rm) setQty(t.dataset.rm, 0);
  if (t.id === "cartBtn") toggleDrawer(true);
  if (t.id === "closeCart") toggleDrawer(false);
});
$("#search").addEventListener("input", e => { q = e.target.value.toLowerCase().trim(); renderMenu(); });
document.querySelectorAll("[name=mode]").forEach(r => r.addEventListener("change", () =>
  $("#addrRow").style.display = $("[name=mode]:checked").value === "delivery" ? "" : "none"));

$("#orderForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target, { rows, total } = renderCart();
  const mode = f.mode.value, name = f.name.value.trim(), phone = f.phone.value.trim(), addr = f.addr.value.trim();
  const err = !rows.length ? "eCart" : !name ? "eName" : !/^\+?[\d\s-]{9,15}$/.test(phone) ? "ePhone" : mode === "delivery" && !addr ? "eAddr" : "";
  $("#err").textContent = err ? tr(err) : "";
  if (err) return;
  const lines = rows.map(r => `${r.n}× ${r.item.name[lang]} – ${money(r.item.price * r.n)}`).join("\n");
  const msg = `Prague Pizza & Tacos\n${lines}\n${tr("total")}: ${money(total)}\n${tr(mode)}${mode === "delivery" ? ": " + addr : ""}\n${tr("name")}: ${name}\n${tr("phoneField")}: ${phone}`;
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
});

applyLang();
