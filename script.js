
/*
  GAD · Invitación interactiva

  Antes de publicar:
  1) Completá EVENT_DATE y EVENT_TIME cuando se confirmen.
  2) El WhatsApp de GAD ya está configurado.
*/

// ==========================================
// CONFIGURACIÓN DE LA GALA
// ==========================================

const CONFIG = {
  EVENT_DATE: "20 DE DICIEMBRE ",       // Ejemplo: "Sábado 14 de noviembre de 2026"
  EVENT_TIME: "19 HS ",       // Ejemplo: "20:30 h"
  WHATSAPP_PHONE: "5493755636803"
};

// ==========================================
// ELEMENTOS DE LA PÁGINA
// ==========================================

const introScreen = document.getElementById("introScreen");
const invitation = document.getElementById("invitation");
const enterButton = document.getElementById("enterButton");
const restartButton = document.getElementById("restartButton");
const whatsappButton = document.getElementById("whatsappButton");
const toast = document.getElementById("toast");

let toastTimeout;

// ==========================================
// MENSAJES Y NOTIFICACIONES
// ==========================================

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 4200);
}

// ==========================================
// DATOS DEL EVENTO
// ==========================================

function applyEventDetails() {
  const eventDate = document.getElementById("eventDate");
  const eventTime = document.getElementById("eventTime");

  if (eventDate) {
    eventDate.textContent = CONFIG.EVENT_DATE.trim() || "A confirmar";
  }

  if (eventTime) {
    eventTime.textContent = CONFIG.EVENT_TIME.trim() || "A confirmar";
  }
}

// ==========================================
// ENTRADA A LA INVITACIÓN
// ==========================================

function enterExperience() {
  if (!enterButton || !introScreen || !invitation) return;

  enterButton.disabled = true;
  introScreen.classList.add("glitch");

  window.setTimeout(() => {
    introScreen.classList.add("hidden");
    invitation.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

    observeRevealElements();
  }, 550);
}

// ==========================================
// REINICIAR LA EXPERIENCIA
// ==========================================

function restartExperience() {
  if (!invitation || !introScreen || !enterButton) return;

  invitation.classList.add("hidden");
  introScreen.classList.remove("hidden", "glitch");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  enterButton.disabled = false;
}

// ==========================================
// ANIMACIONES DE APARICIÓN
// ==========================================

function observeRevealElements() {
  if (!invitation) return;

  const elements = invitation.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach(element => {
      element.classList.add("visible");
    });

    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  elements.forEach(element => {
    observer.observe(element);
  });
}

// ==========================================
// WHATSAPP
// ==========================================

function normalizePhone(phone) {
  return phone.replace(/\D/g, "");
}

function confirmByWhatsApp() {
  const telefono = normalizePhone(CONFIG.WHATSAPP_PHONE);

  const mensaje =
    "¡Hola! Quiero ser parte de la gala de GAD. 🎭✨";

  if (!telefono || telefono.length < 10) {
    showToast("El número de WhatsApp no es válido. Revisá la configuración.");
    return;
  }

  const url =
    `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

// ==========================================
// MÚSICA DE FONDO
// ==========================================

const musicaFondo = document.getElementById("musica-fondo");

function iniciarMusica() {
  if (!musicaFondo || !musicaFondo.paused) return;

  musicaFondo.volume = 0.35;

  musicaFondo.play().catch(() => {
    // El navegador puede bloquear la reproducción automática.
    // Se volverá a intentar con una interacción del usuario.
  });
}

// Intentar reproducir al cargar la página.
if (musicaFondo) {
  musicaFondo.volume = 0.35;

  window.addEventListener("load", () => {
    iniciarMusica();
  });
}

const introLogo = document.getElementById("intro-logo");

if (introLogo) {
  setTimeout(() => {
    introLogo.remove();
  }, 4000);
}


// Iniciar la música si el navegador bloqueó el autoplay.
document.addEventListener("click", iniciarMusica, {
  once: true
});

document.addEventListener("touchstart", iniciarMusica, {
  once: true,
  passive: true
});

// ==========================================
// EVENTOS DE LOS BOTONES
// ==========================================

// Abrir la invitación.
if (enterButton) {
  enterButton.addEventListener("click", enterExperience);
}

// Reiniciar la invitación.
if (restartButton) {
  restartButton.addEventListener("click", restartExperience);
}

// Enviar al usuario a WhatsApp.
if (whatsappButton) {
  whatsappButton.addEventListener("click", confirmByWhatsApp);
}


// ==========================================
// INICIALIZACIÓN
// ==========================================

applyEventDetails();
