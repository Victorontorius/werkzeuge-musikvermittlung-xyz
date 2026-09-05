# Werkzeuge der Musikvermittlung — Website

Statische Website (reines HTML/CSS/JS, kein Build-Schritt) zum Praxishandbuch von Leonie Hentschel, erscheint 2026 im Georg Olms Verlag.

## Überblick

- Startseite mit Buchcover, Themenübersicht, Interview-Zitaten und Autorinnen-Info
- Downloads-Seite mit Arbeitsmaterialien und einer Linkliste aus dem Buch
- Rechtssicheres Impressum
- Deutsch/Englisch umschaltbar
- Keine externen Abhängigkeiten (keine Google Fonts, kein Tracking, kein Backend)

## Lokal ansehen

```bash
python3 -m http.server 8000
```

und dann `http://localhost:8000` öffnen.

## Auf GitHub Pages veröffentlichen

1. Repo-Inhalt pushen (`index.html`, `css/`, `js/`, `assets/` im Root).
2. **Settings → Pages** → Branch/Ordner auswählen.
3. Seite ist unter der konfigurierten Domain erreichbar. Keine weiteren Schritte nötig — keine Server-Abhängigkeiten, keine Build-Tools.

## Struktur

- `index.html` — Startseite
- `downloads.html` — Materialien &amp; Links
- `impressum.html` — Impressum
- `css/style.css` — Design
- `js/script.js` — Sprachumschalter, Navigation, Animationen
- `assets/` — Bilder und Download-Dateien

Eine ausführliche, chronologische Liste aller Änderungen steht in `CHANGELOG.md`.
