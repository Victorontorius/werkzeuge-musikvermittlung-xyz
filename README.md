# Werkzeuge der Musikvermittlung — Website (v3)

Statische Single-Page-Website (reines HTML/CSS/JS, kein Build-Schritt), jetzt mit dem echten Buchcover und den offiziellen Verlagstexten.

## Was ist neu gegenüber v2

- **Echtes Cover eingebunden:** Titelbild (`assets/img/front-cover.jpg`) im Hero-Bereich statt eines typografischen Platzhalters.
- **Echtes Autorinnenfoto:** aus der Buchrückseite freigestellt (`assets/img/author-photo.jpg`, Foto © Victor Thom).
- **Freigestelltes Grafikmotiv:** die Löwenzahn-mit-Notenschlüssel-Illustration vom Cover wurde vom Coral-Hintergrund freigestellt (`assets/img/motif-dandelion.png`, transparent) und wird als wiederkehrendes Deko-Element und Favicon genutzt.
- **Farbpalette direkt vom Cover abgeleitet:** Coral `#E73D3D` und Marineblau `#39457F` (aus dem tatsächlichen Cover ausgemessen) ersetzen die frühere Terrakotta/Creme-Näherung. Fließtext läuft in einem tiefen Marineblau (`#232B52`) für hohen Kontrast.
- **Echte Verlagstexte:** Der Klappentext von der Buchrückseite ersetzt den zuvor selbst formulierten Beschreibungstext; die Autorinnen-Biografie folgt jetzt dem offiziellen Rückseitentext (ergänzt um zwei Sätze zur Ausbildung aus dem Manuskript).
- **Verlag &amp; ISBN ergänzt:** Georg Olms Verlag, ISBN 978-3-487-17237-8, mit Link zu olms.de im Bestell-Bereich (noch keine Produktseite live, da das Buch erst 2026 erscheint).
- Interviewzahl von „9" auf „11 Perspektiven" korrigiert (gemäß offiziellem Klappentext).

## Lokal ansehen

```bash
python3 -m http.server 8000
```

und dann `http://localhost:8000` öffnen.

## Auf GitHub Pages veröffentlichen

1. Repo-Inhalt pushen (`index.html`, `css/`, `js/`, `assets/` im Root oder `/docs`).
2. **Settings → Pages** → Branch/Ordner auswählen.
3. Seite ist unter `https://<username>.github.io/<repo>/` erreichbar. Keine weiteren Schritte nötig — keine Server-Abhängigkeiten, keine Build-Tools.

## Struktur

- `index.html` — gesamter Seiteninhalt (DE/EN nebeneinander im Markup, per CSS umgeschaltet)
- `css/style.css` — Design (Farben vom Cover, Typografie, Layout, Animationen)
- `js/script.js` — Sprachumschalter, mobiles Menü, Scroll-Reveal, Zitate-Karussell
- `assets/img/front-cover.jpg` — Titelbild
- `assets/img/author-photo.jpg` — Autorinnenfoto (freigestellt aus der Buchrückseite)
- `assets/img/motif-dandelion.png` — freigestelltes Grafikmotiv (transparent, Marineblau)

## Noch offen

- Bestelllink/Produktseite bei Georg Olms Verlag, sobald verfügbar
- Genaues Erscheinungsdatum 2026
