# Auto Pi S.A.S. - Sito Web Rivenditore Auto Usate

## Descrizione Progetto
Sito web single-page per **Auto Pi S.A.S.**, rivenditore di auto usate. Il sito presenta l'azienda, mostra le auto disponibili e permette ai clienti di prenotare appuntamenti online.

---

## Struttura del Sito (Single Page - Layout Verticale)

### 1. Header / Navigazione
- Logo aziendale "Auto Pi S.A.S."
- Menu di navigazione ancorato alle sezioni:
  - Chi Siamo
  - Le Nostre Auto
  - Prenota Appuntamento
  - Contatti

### 2. Hero Section (Presentazione)
- Titolo principale: "Trova la tua prossima auto da Auto Pi S.A.S."
- Sottotitolo: "Qualità, affidabilità e prezzi competitivi dal 1995"
- Call-to-action: "Scopri le nostre auto" / "Prenota una visita"
- Immagine di sfondo o banner accattivante

### 3. Chi Siamo (Presentazione Azienda)
- Breve storia dell'azienda
- Valori: trasparenza, qualità, assistenza post-vendita
- Perché scegliere Auto Pi S.A.S.
- Eventuali certificazioni o garanzie offerte

### 4. Le Nostre Auto (Esposizione Veicoli)
- Griglia di card per ogni veicolo con:
  - Foto dell'auto
  - Marca e modello
  - Anno di immatricolazione
  - Chilometraggio
  - Prezzo
  - Pulsante "Dettagli" / "Prenota visione"
- Filtri opzionali: marca, fascia di prezzo, anno
- Placeholder per almeno 6-8 auto di esempio

### 5. Prenota Appuntamento (Sistema Prenotazioni)
- Form di prenotazione con campi:
  - Nome e Cognome (obbligatorio)
  - Email (obbligatorio)
  - Telefono (obbligatorio)
  - Data preferita per l'appuntamento
  - Ora preferita (slot disponibili)
  - Auto di interesse (dropdown o checkbox multipli)
  - Messaggio/Note aggiuntive
- Pulsante "Invia Prenotazione"
- Messaggio di conferma dopo l'invio

### 6. Contatti
- Indirizzo completo della sede
- Numero di telefono
- Email
- Orari di apertura (Lun-Sab)
- Mappa integrata (Google Maps embed)
- Link ai social media (Facebook, Instagram)

### 7. Footer
- Copyright e anno
- Link rapidi alle sezioni
- Informazioni legali (P.IVA, Privacy Policy)

---

## Palette Colori

| Elemento | Colore | Codice HEX |
|----------|--------|------------|
| Sfondo principale | Bianco | `#FFFFFF` |
| Sfondo secondario | Bianco sporco | `#F9F9F9` |
| Colore primario (accent) | Giallo | `#FFD700` |
| Giallo scuro (hover) | Giallo senape | `#E6C200` |
| Testo principale | Grigio scuro | `#333333` |
| Testo secondario | Grigio | `#666666` |
| Bordi/Linee | Grigio chiaro | `#E0E0E0` |

### Utilizzo Colori
- **Bianco**: sfondo pagina, card, sezioni alternate
- **Giallo**: pulsanti CTA, evidenziazioni, icone, bordi accent, hover states
- **Grigio scuro**: testi principali, titoli
- **Grigio chiaro**: divisori, bordi card

---

## Stile e Design

### Principi Generali
- **Layout verticale single-page** con scroll fluido
- Design **pulito e minimale**
- Ampio uso di spazi bianchi
- Tipografia leggibile e moderna
- Mobile-first / Responsive

### Tipografia
- Font titoli: `Montserrat` o `Poppins` (bold)
- Font corpo: `Open Sans` o `Roboto` (regular)
- Dimensioni:
  - H1: 2.5rem
  - H2: 2rem
  - H3: 1.5rem
  - Corpo: 1rem

### Componenti UI
- **Pulsanti**: sfondo giallo, testo scuro, bordi arrotondati (8px)
- **Card auto**: ombra leggera, bordo sottile, angoli arrotondati
- **Form**: campi con bordo grigio, focus con bordo giallo
- **Navigazione**: sticky header con sfondo bianco e ombra sottile

### Animazioni
- Scroll smooth tra sezioni
- Hover su pulsanti e card (transizione colore)
- Fade-in elementi al scroll (opzionale)

---

## Tecnologie Suggerite

- **HTML5** semantico
- **CSS3** (Flexbox/Grid per layout)
- **JavaScript** vanilla per interattività
- **Google Fonts** per tipografia
- **Google Maps Embed** per mappa contatti
- Form handling: può essere integrato con servizi come Formspree, Netlify Forms o backend custom

---

## Struttura File

```
auto-pi-s.a.s./
├── index.html          # Pagina principale
├── css/
│   └── style.css       # Stili del sito
├── js/
│   └── main.js         # Script interattività
├── images/
│   ├── logo.png        # Logo aziendale
│   ├── hero-bg.jpg     # Immagine hero
│   └── cars/           # Foto auto in vendita
└── claude.md           # Questo file
```

---

## Note Implementative

1. **SEO**: includere meta tags appropriati, title descrittivo, alt text per immagini
2. **Accessibilità**: contrasto colori adeguato, label per form, navigazione da tastiera
3. **Performance**: ottimizzare immagini, lazy loading per foto auto
4. **Responsive**: breakpoints per mobile (< 768px), tablet, desktop
5. **Form prenotazioni**: validazione lato client, messaggio di successo/errore

---

## Contenuti Placeholder

### Testo Chi Siamo
> Da oltre 25 anni, Auto Pi S.A.S. è il punto di riferimento per chi cerca auto usate di qualità. Ogni veicolo viene accuratamente selezionato e controllato per garantirti sicurezza e affidabilità. Il nostro team è sempre a disposizione per aiutarti a trovare l'auto perfetta per le tue esigenze.

### Auto di Esempio
1. Fiat Panda 1.2 - 2019 - 45.000 km - €8.500
2. Volkswagen Golf 1.6 TDI - 2018 - 78.000 km - €14.900
3. Ford Fiesta 1.0 EcoBoost - 2020 - 32.000 km - €11.200
4. Renault Clio 1.5 dCi - 2017 - 95.000 km - €9.800
5. Toyota Yaris Hybrid - 2021 - 25.000 km - €16.500
6. Audi A3 1.6 TDI - 2019 - 62.000 km - €19.900

### Contatti Placeholder
- Indirizzo: Via Roma 123, 00100 Roma (RM)
- Telefono: +39 06 1234567
- Email: info@autopisas.it
- Orari: Lun-Ven 9:00-19:00, Sab 9:00-13:00
