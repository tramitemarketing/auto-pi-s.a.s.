/**
 * Auto Pi S.A.S. - JavaScript Principale
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
const autoSelect = document.getElementById('auto-select');
const formPrenotazione = document.getElementById('form-prenotazione');
const formConferma = document.getElementById('form-conferma');
const dataInput = document.getElementById('data');

// ==========================================================================
// Inizializzazione
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    renderAutoGrid();
    populateAutoSelect();
    setupNavigation();
    setupForm();
    setMinDate();
});

// ==========================================================================
// Render Griglia Auto
// ==========================================================================
function renderAutoGrid() {
    if (!autoGrid) return;

    autoGrid.innerHTML = autoDisponibili.map(auto => `
        <article class="card">
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
                <button
                    class="btn btn--primary btn--full"
                    onclick="prenotaAuto(${auto.id})"
                >
                    Prenota Visione
                </button>
            </div>
        </article>
    `).join('');
}

// ==========================================================================
// Popola Select Auto nel Form
// ==========================================================================
function populateAutoSelect() {
    if (!autoSelect) return;

    const options = autoDisponibili.map(auto =>
        `<option value="${auto.id}">${auto.marca} ${auto.modello} (${auto.anno}) - ${formatPrezzo(auto.prezzo)}</option>`
    ).join('');

    autoSelect.innerHTML = '<option value="">Seleziona un\'auto</option>' + options;
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
// Form Prenotazione
// ==========================================================================
function setupForm() {
    if (!formPrenotazione) return;

    formPrenotazione.addEventListener('submit', handleFormSubmit);

    // Validazione telefono in tempo reale
    const telefonoInput = document.getElementById('telefono');
    if (telefonoInput) {
        telefonoInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
    }
}

function handleFormSubmit(e) {
    e.preventDefault();

    // Raccogli dati form
    const formData = new FormData(formPrenotazione);
    const dati = Object.fromEntries(formData.entries());

    // Validazione aggiuntiva
    if (!validateForm(dati)) {
        return;
    }

    // Simula invio (qui si può integrare con backend/servizio email)
    console.log('Prenotazione inviata:', dati);

    // Mostra conferma
    formPrenotazione.hidden = true;
    formConferma.hidden = false;

    // Scroll alla conferma
    formConferma.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Reset form dopo 5 secondi
    setTimeout(() => {
        formPrenotazione.reset();
        formPrenotazione.hidden = false;
        formConferma.hidden = true;
    }, 5000);
}

function validateForm(dati) {
    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(dati.email)) {
        alert('Inserisci un indirizzo email valido.');
        return false;
    }

    // Validazione telefono
    if (dati.telefono.length < 9) {
        alert('Il numero di telefono deve contenere almeno 9 cifre.');
        return false;
    }

    // Validazione data (non nel passato)
    const dataSelezionata = new Date(dati.data);
    const oggi = new Date();
    oggi.setHours(0, 0, 0, 0);

    if (dataSelezionata < oggi) {
        alert('Seleziona una data futura.');
        return false;
    }

    return true;
}

// ==========================================================================
// Imposta Data Minima
// ==========================================================================
function setMinDate() {
    if (!dataInput) return;

    const oggi = new Date();
    const anno = oggi.getFullYear();
    const mese = String(oggi.getMonth() + 1).padStart(2, '0');
    const giorno = String(oggi.getDate()).padStart(2, '0');

    dataInput.min = `${anno}-${mese}-${giorno}`;
}

// ==========================================================================
// Prenota Auto (da griglia)
// ==========================================================================
function prenotaAuto(autoId) {
    // Seleziona l'auto nel dropdown
    if (autoSelect) {
        autoSelect.value = autoId;
    }

    // Scroll alla sezione prenotazione
    const sezionePrenotazione = document.getElementById('prenota');
    if (sezionePrenotazione) {
        sezionePrenotazione.scrollIntoView({ behavior: 'smooth' });

        // Focus sul primo campo dopo lo scroll
        setTimeout(() => {
            const nomeInput = document.getElementById('nome');
            if (nomeInput) {
                nomeInput.focus();
            }
        }, 500);
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
