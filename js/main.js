/**
 * Auto Più S.A.S. - JavaScript Principale
 */

// ==========================================================================
// Dati Auto (Esempio)
// ==========================================================================
const autoDisponibili = [
    {
        id: 1,
        marca: "Fiat",
        modello: "Panda",
        anno: 2019,
        chilometri: 45000,
        prezzo: 8500,
        alimentazione: "Benzina",
        cambio: "Manuale",
        immagine: "https://via.placeholder.com/400x250/E0E0E0/666666?text=Fiat+Panda+2019",
        descrizione: "Ottimo stato, tagliandi regolari, unico proprietario"
    },
    {
        id: 2,
        marca: "Volkswagen",
        modello: "Golf",
        anno: 2020,
        chilometri: 38000,
        prezzo: 18500,
        alimentazione: "Diesel",
        cambio: "Automatico",
        immagine: "https://via.placeholder.com/400x250/E0E0E0/666666?text=VW+Golf+2020",
        descrizione: "Full optional, navigatore, sensori parcheggio"
    },
    {
        id: 3,
        marca: "Ford",
        modello: "Fiesta",
        anno: 2018,
        chilometri: 62000,
        prezzo: 9800,
        alimentazione: "Benzina",
        cambio: "Manuale",
        immagine: "https://via.placeholder.com/400x250/E0E0E0/666666?text=Ford+Fiesta+2018",
        descrizione: "Perfetta per neopatentati, consumi ridotti"
    },
    {
        id: 4,
        marca: "Toyota",
        modello: "Yaris Hybrid",
        anno: 2021,
        chilometri: 25000,
        prezzo: 16900,
        alimentazione: "Ibrido",
        cambio: "Automatico",
        immagine: "https://via.placeholder.com/400x250/E0E0E0/666666?text=Toyota+Yaris+2021",
        descrizione: "Garanzia ancora attiva, km certificati"
    },
    {
        id: 5,
        marca: "Renault",
        modello: "Clio",
        anno: 2017,
        chilometri: 78000,
        prezzo: 7200,
        alimentazione: "Diesel",
        cambio: "Manuale",
        immagine: "https://via.placeholder.com/400x250/E0E0E0/666666?text=Renault+Clio+2017",
        descrizione: "Motore affidabile, manutenzione sempre in Renault"
    },
    {
        id: 6,
        marca: "Jeep",
        modello: "Renegade",
        anno: 2019,
        chilometri: 55000,
        prezzo: 19500,
        alimentazione: "Diesel",
        cambio: "Automatico",
        immagine: "https://via.placeholder.com/400x250/E0E0E0/666666?text=Jeep+Renegade+2019",
        descrizione: "4x4, perfetta per ogni terreno, cerchi in lega"
    }
];

// ==========================================================================
// DOM Elements
// ==========================================================================
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const autoGrid = document.getElementById('auto-grid');

// ==========================================================================
// Inizializzazione
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    renderAutoGrid();
    setupNavigation();
    updateFooterYear();
    setupScrollAnimations();
});

// ==========================================================================
// Render Griglia Auto
// ==========================================================================
function renderAutoGrid() {
    if (!autoGrid) return;

    autoGrid.innerHTML = autoDisponibili.map(auto => `
        <article class="card animate-on-scroll">
            <img
                src="${auto.immagine}"
                alt="${auto.marca} ${auto.modello} ${auto.anno}"
                class="card__image"
                loading="lazy"
            >
            <div class="card__content">
                <h3 class="card__title">${auto.marca} ${auto.modello}</h3>
                <div class="card__details">
                    <span class="card__detail">${auto.anno}</span>
                    <span class="card__detail">${formatKm(auto.chilometri)} km</span>
                    <span class="card__detail">${auto.alimentazione}</span>
                    <span class="card__detail">${auto.cambio}</span>
                </div>
                <p class="card__price">${formatPrezzo(auto.prezzo)}</p>
                <p class="card__description">${auto.descrizione}</p>
            </div>
        </article>
    `).join('');

    // Re-initialize scroll animations for new elements
    setupScrollAnimations();
}

// ==========================================================================
// Navigazione Mobile
// ==========================================================================
function setupNavigation() {
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Chiudi menu quando si clicca su un link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Chiudi menu cliccando fuori
    document.addEventListener('click', (e) => {
        if (navMenu && navToggle &&
            !navMenu.contains(e.target) &&
            !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

// ==========================================================================
// Animazioni Scroll (Intersection Observer)
// ==========================================================================
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (animatedElements.length === 0) return;

    // Verifica supporto Intersection Observer
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    } else {
        // Fallback per browser senza supporto
        animatedElements.forEach(element => {
            element.classList.add('visible');
        });
    }
}

// ==========================================================================
// Funzioni Utilità
// ==========================================================================
function formatPrezzo(prezzo) {
    return new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(prezzo);
}

function formatKm(km) {
    return new Intl.NumberFormat('it-IT').format(km);
}

// ==========================================================================
// Aggiorna Anno Footer
// ==========================================================================
function updateFooterYear() {
    const annoElement = document.getElementById('anno-corrente');
    if (annoElement) {
        annoElement.textContent = new Date().getFullYear();
    }
}
