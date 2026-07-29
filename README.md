# Werkzeuge der Musikvermittlung — Website

Statische Single-Page-Website (reines HTML/CSS/JS, kein Build-Schritt).

## Lokal ansehen

Einfach `index.html` im Browser öffnen, oder mit einem lokalen Server:

```bash
python3 -m http.server 8000
```

und dann `http://localhost:8000` öffnen.

## Auf GitHub Pages veröffentlichen

1. Diesen Ordnerinhalt in ein GitHub-Repository pushen (z. B. `index.html`, `css/`, `js/` liegen im Root oder in `/docs`).
2. Im Repo unter **Settings → Pages** die Quelle auf den entsprechenden Branch (z. B. `main`) und Ordner (`/` oder `/docs`) stellen.
3. Nach ein bis zwei Minuten ist die Seite unter `https://<username>.github.io/<repo>/` erreichbar.

Es sind keine weiteren Schritte nötig — die Seite hat keine Server-Abhängigkeiten.

## Struktur

- `index.html` — gesamter Seiteninhalt (DE/EN nebeneinander im Markup, per CSS umgeschaltet)
- `css/style.css` — Design (Farben, Typografie, Layout, Animationen)
- `js/script.js` — Sprachumschalter, mobiles Menü, Scroll-Reveal, Zitate-Karussell

## Vor dem Launch noch anzupassen

- Cover-Design und Autorinnenfoto (aktuell typografische Platzhalter aus CSS/SVG)
- Erscheinungstermin, Verlag, ISBN, Bestelllink im Abschnitt "Bestellen & Kontakt"
- Kontakt-E-Mail-Adresse im `mailto:`-Link (`index.html`, Abschnitt `#kontakt`)
