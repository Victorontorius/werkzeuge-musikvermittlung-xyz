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
- **Rechtssicheres Impressum ergänzt:** neue Seite `impressum.html`, verlinkt im Footer jeder Seite (Angaben gemäß § 5 DDG und § 18 Abs. 2 MStV, inkl. Kleinunternehmer-Hinweis, EU-Streitschlichtung, Haftungs- und Urheberrechtshinweisen).
- **Keine Google-Fonts mehr:** Die Website lud zuvor "Fraunces"/"Inter" von `fonts.googleapis.com` — das gilt in Deutschland als unzulässige Übertragung von Besucher-IP-Adressen an Google ohne Einwilligung (bekanntes Abmahnrisiko seit dem LG-München-Urteil 2022). Ersetzt durch reine System-Font-Stacks (`ui-serif` / `-apple-system, Segoe UI, Roboto, ...`) — keine externen Schriftanfragen mehr, auch keine an andere Drittanbieter.
