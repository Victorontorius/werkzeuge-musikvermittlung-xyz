# Website-Plan: "Werkzeuge der Musikvermittlung" von Leonie Hentschel

## Ausgangslage

Das Buch ist ein Praxishandbuch (1. Auflage 2026, aktuell vor Erscheinen — ISBN und Cover noch offen) für Musikvermittler:innen, Dramaturg:innen, Musiker:innen, Dirigent:innen und Entscheider:innen im Kulturbetrieb. Es gliedert sich in fünf Teile: Einleitung (Dimensionen des Handelns), Arbeitstechniken (Zielgruppen, Dramaturgie, Musikalisches Arbeiten, Moderation, Partizipation, Inklusion), Organisation & Management, Formate & Materialien (Familien-/Schulkonzerte, Kinderkonzerte, Workshops, Musiktheater, Jugendbeirat, Community-Arbeit, digitale Formate) und Transformation (Zukunftsvisionen für den Klassiksektor). Durchzogen von Interviews mit Kolleg:innen (u. a. Lea Heinrich, Tom Seligman, Christine Mellich, Caecilia Thunnissen) und "Denkanstößen" zur Selbstreflexion.

Die Website soll als informative, einladende Präsenz für das Buch dienen — kein Verkaufsshop, sondern ein Ort, der Interesse weckt, den Nutzen für die Zielgruppen klar macht und zur Vorbestellung/zum Kauf führt, sobald verfügbar.

## Ziele & Zielgruppe

- Primäres Ziel: Besucher:innen für das Buch begeistern und zum Kauf/zur Vorbestellung bewegen.
- Zielgruppen: Musikvermittler:innen und Dramaturg:innen, Orchester-/Konzerthausmanagement, Musiker:innen und Dirigent:innen, Kulturpolitik/Entscheider:innen, Studierende der Musikpädagogik.
- Tonalität: fachlich fundiert, aber warm und einladend — passend zum Buchmotto "Musik als Kommunikations- und Lebensform".

## Sitemap (Single-Page mit Ankernavigation, DE/EN-Umschalter)

1. **Hero** — Buchtitel, Untertitel, kurzer Claim, Cover-Platzhalter, CTA "Buch vorbestellen" / "Leseprobe".
2. **Über das Buch** — Kurzbeschreibung (aus dem Vorwort destilliert), für wen es ist, was es nicht sein will (kein wissenschaftliches Werk, sondern Anregung & Werkzeugkasten).
3. **Themen im Überblick** — visuelle Darstellung der 5 Buchteile als Kacheln/Zeitleiste, mit den wichtigsten Unterkapiteln als Schlagworte (Zielgruppen, Dramaturgie, Musikalisches Arbeiten, Moderation, Inklusion, Management, Formate, Transformation).
4. **Stimmen aus dem Buch** — Auszüge aus den Interviews (Zitate mit Namen/Rolle: Lea Heinrich/Symphonic Mob, Tom Seligman/Dirigent, Christine Mellich/Dramaturgin, Caecilia Thunnissen/Oorkaan, Ali Pirabi & Tilmann Löser/Transkulturelles Musikforum).
5. **Leseprobe** — 1–2 kurze Ausschnitte (z. B. aus dem Vorwort und der Einleitung "Dimensionen unseres Handelns") als Textblock, evtl. Download als PDF.
6. **Über die Autorin** — Leonie Hentschel Bio (Konzerthaus Berlin, Kammerakademie Potsdam, Soundstreams Canada, OPUS-KLASSIK-Gewinn 2024), Foto-Platzhalter.
7. **Bestellen / Kontakt** — Erscheinungstermin, Vorbestell-Link (Verlag/Buchhandel, sobald bekannt), Kontakt für Presse/Rezensionsexemplare, Newsletter-Anmeldung optional.
8. **Footer** — Impressum, Social Links, Sprachumschalter.

## Gestaltungsrichtung

- **Look & Feel:** modern, luftig, mit Anleihen an Notenlinien/Wellenformen als grafisches Motiv (dezente Linien im Hintergrund, keine Kitsch-Klassik-Optik).
- **Farbwelt:** warmer, einladender Kontrast statt steriles Konzerthaus-Schwarz-Gold — z. B. Terrakotta/Kupfer als Akzent auf Creme/Anthrazit, damit es sich von klassischer Hochkultur-Ästhetik abhebt und "Vermittlung/Verbindung" ausstrahlt.
- **Typografie:** klare Serife für Zitate/Buchtitel (Wärme, Buchcharakter), gut lesbare Grotesk für Fließtext/UI.
- **Bewegung:** dezente Scroll-Animationen (Fade-in der Kapitel-Kacheln, sanftes Parallax bei Notenlinien-Grafik), damit die Seite "visuell stimulierend" wirkt, ohne abzulenken.
- **Interaktion:** Ankernavigation mit aktivem Zustand beim Scrollen; Kachel-Hover zeigt Kapiteldetails; Zitate-Karussell bei den Interviews.

## Zweisprachigkeit (DE/EN)

- Umschalter oben rechts, Inhalte in beiden Sprachen im HTML hinterlegt (Client-seitiges Umschalten, kein Reload), Standardsprache Deutsch.
- Buchzitate/Interviewauszüge bleiben auf Deutsch mit englischer Kurzübersetzung darunter (kursiv, kleiner), statt vollständiger Doppelübersetzung — wahrt Authentizität der O-Töne.

## Offene Assets (vor dem Bau zu klären/besorgen)

- Cover-Design (aktuell laut Manuskript noch nicht final) — bis dahin: typografischer Platzhalter-Cover-Mock.
- Autorinnenfoto.
- Endgültiger Erscheinungstermin, ISBN, Verlag/Bestelllink.
- Ggf. Freigabe der Interviewpartner:innen für Zitatnutzung auf der Website.

## Technischer Ansatz

- Statische Single-Page-Site (reines HTML/CSS/JS), keine Build-Schritte, keine Server-Logik — läuft direkt auf **GitHub Pages**.
- Kein Framework, keine Node-Abhängigkeiten, keine externen APIs; Bilder/Icons liegen im Repo, Fonts per `<link>` von Google Fonts (oder alternativ auch selbst eingebettet, falls komplett offline gewünscht).
- Sprachumschaltung, Scroll-Animationen und Zitate-Karussell rein clientseitig mit Vanilla JS.
- Kontakt: da GitHub Pages kein Backend hat, ein einfacher `mailto:`-Link statt eines serverseitigen Formulars (ein echtes Formular ginge nur über einen Drittanbieter wie Formspree — nicht nötig, außer gewünscht).
- Ergebnis: Repo pushen, Pages-Branch aktivieren, fertig.

## Nächster Schritt

Nach deiner Freigabe dieses Plans baue ich die Seite als funktionierende HTML/CSS/JS-Single-Page-Website.
