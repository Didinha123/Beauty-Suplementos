// Menu mobile
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

// Filtro de suplementos por objetivo
const filterButtons = document.querySelectorAll(".filter-btn");
const supplementCards = document.querySelectorAll("#grid-suplementos .card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((b) => b.classList.toggle("active", b === button));

    supplementCards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.hidden = !show;
    });
  });
});

// Formulário de contato: envia a mensagem pelo WhatsApp
// Troque o número abaixo pelo número real da loja (DDI + DDD + número, só dígitos)
const WHATSAPP_NUMBER = "5500000000000";

document.getElementById("form-contato").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const texto = `Olá! Meu nome é ${data.get("nome")}.\nWhatsApp: ${data.get("telefone")}\n${data.get("mensagem")}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
});

// Ano automático no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();
