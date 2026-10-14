/*
  GAD · Invitación interactiva
  Antes de publicar:
  1) Completá EVENT_DATE y EVENT_TIME cuando se confirmen.
  2) Completá WHATSAPP_PHONE con el número del organizador, incluyendo país y área,
     solo números, sin +, espacios ni guiones. Ejemplo argentino: 5493764000000.
*/
const CONFIG = {
  EVENT_DATE: "",       // Ejemplo: "Sábado 14 de noviembre de 2026"
  EVENT_TIME: "",       // Ejemplo: "20:30 h"
  WHATSAPP_PHONE: ""    // Número del organizador. Dejar vacío para que se solicite al tocar.
};

const introScreen = document.getElementById("introScreen");
const invitation = document.getElementById("invitation");
const enterButton = document.getElementById("enterButton");
const restartButton = document.getElementById("restartButton");
const whatsappButton = document.getElementById("whatsappButton");
const toast = document.getElementById("toast");
let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 4200);
}

function applyEventDetails() {
  document.getElementById("eventDate").textContent = CONFIG.EVENT_DATE.trim() || "A confirmar";
  document.getElementById("eventTime").textContent = CONFIG.EVENT_TIME.trim() || "A confirmar";
}

function enterExperience() {
  enterButton.disabled = true;
  introScreen.classList.add("glitch");
  window.setTimeout(() => {
    introScreen.classList.add("hidden");
    invitation.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "instant" });
    observeRevealElements();
  }, 550);
}

function restartExperience() {
  invitation.classList.add("hidden");
  introScreen.classList.remove("hidden", "glitch");
  window.scrollTo({ top: 0, behavior: "smooth" });
  enterButton.disabled = false;
}

function observeRevealElements() {
  const elements = invitation.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach(el => observer.observe(el));
}

function normalizePhone(phone) {
  return phone.replace(/\D/g, "");
}

function confirmByWhatsApp() {
  let phone = CONFIG.WHATSAPP_PHONE;
  if (!phone) {
    phone = window.prompt(
      "Ingresá el WhatsApp de GAD con código de país y área, solo números. Ejemplo de formato argentino: 5493764000000"
    );
    if (phone === null) return;
  }

  phone = normalizePhone(phone);
  if (phone.length < 10) {
    showToast("El número parece incompleto. Revisá el código de país y de área.");
    return;
  }

  const date = CONFIG.EVENT_DATE.trim() || "fecha a confirmar";
  const time = CONFIG.EVENT_TIME.trim() || "horario a confirmar";
  const message = `¡Hola, GAD! Quiero confirmar mi asistencia a la Gala de Gimnasia Aeróbica. ¡Tengo muchas ganas de vivir esta noche épica!%0A%0AFecha: ${date}%0AHorario: ${time}%0ALugar: Complejo Polideportivo de San Javier.%0A%0A¡Muchas gracias!`;
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

enterButton.addEventListener("click", enterExperience);
restartButton.addEventListener("click", restartExperience);
whatsappButton.addEventListener("click", confirmByWhatsApp);

applyEventDetails();
