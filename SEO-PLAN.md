# Plan za poboljsanje organskih poseta - Dragana Korhner Photography

## Deo 1: Implementirano

### 1.1 Tehnicke SEO ispravke [DONE]

- **Pogresan domen u structured data** -- `index.astro` i `portfolio.astro` koristili `draganakorhner.com` umesto `draganakorhner.photography`
- **Pogresan telefon u structured data** -- `index.astro` i `contact.astro` imali pogresan broj
- **Pogresan sitemap link** -- `BaseLayout.astro` referencirao `/sitemap-index.xml`, treba `/sitemap.xml`
- **OG image nije apsolutni URL** -- `BaseLayout.astro` koristio relativni path
- **Portfolio thumbnailUrl** -- `portfolio.astro` koristio pogresan domen

### 1.2 FAQPage schema [DONE]

Dodata `FAQPage` JSON-LD structured data na kontakt stranicu sa svih 6 FAQ pitanja — omogucava Google FAQ rich results.

### 1.3 Blog infrastruktura [DONE]

- `src/content/config.ts` — Astro content collection definicija
- `src/pages/blog/index.astro` — listing stranica
- `src/pages/blog/[slug].astro` — post template sa Article schema
- 6 blog postova u `src/content/blog/`
- "Blog" dodat u navigaciju

### 1.4 Servisne landing stranice [DONE]

3 nove stranice sa jedinstvenim sadrzajem, cenama, procesom rada, i Service schema markup:

- `src/pages/usluge/deciji-rodjendani.astro`
- `src/pages/usluge/porodicno-fotografisanje.astro`
- `src/pages/usluge/fotografije-za-drustvene-mreze.astro`

"Usluge" dropdown dodat u navigaciju.

### 1.5 Sitemap i navigacija [DONE]

- Sitemap azuriran sa svih 13 URL-ova
- Header i Footer azurirani sa novim linkovima
- Dodat `@tailwindcss/typography` za blog stilove

---

## Deo 2: Blog teme

Teme optimizovane za long-tail pretrage na srpskom:

1. **"Kako organizovati deciji rodjendan u Beogradu -- kompletni vodic"**
   - target: "organizacija decijeg rodjendana beograd"
2. **"5 saveta za pripremu porodicnog fotografisanja"**
   - target: "priprema za fotografisanje porodica"
3. **"Najbolje lokacije za fotografisanje u Beogradu"**
   - target: "lokacije za fotografisanje beograd"
4. **"Sta obuci za profesionalno fotografisanje -- vodic za celu porodicu"**
   - target: "sta obuci za fotografisanje"
5. **"Zasto su profesionalne fotografije sa rodjendana vredne investicije"**
   - target: "fotograf za rodjendan cena"
6. **"LinkedIn i poslovni portret -- kako se pripremiti i zasto je bitan"**
   - target: "linkedin fotografija beograd"

---

## Deo 3: Rucni zadaci (ne moze AI)

### Direktorijumi za registraciju (lokalni SEO)

Svaki od ovih direktorijuma salje signal Google-u da je biznis legitiman i poboljsava lokalno rangiranje:

1. **011info.com** -- najveci beogradski direktorijum, ima sekciju za fotografe (011info.com/fotografske-radnje). Besplatna registracija.
2. **Privredni imenik Srbije** (pfrr.rs) -- najstariji B2B portal, besplatna registracija, dnevno azuriranje baze.
3. **Privatnik sam** (privatniksam.rs) -- portal za mala i srednja preduzeca, besplatan nalog.
4. **Infobel.rs** (local.infobel.rs) -- medjunarodni direktorijum sa srpskom sekcijom, 430+ foto biznisa u BG.
5. **re.rs** -- direktorijum sajtova, besplatan upis.
6. **Google Business Profile** -- vec imas, samo optimizuj: dodaj fotografije radova, azuriraj usluge, postavljaj postove redovno.
7. **Apple Maps** -- registracija preko Apple Business Connect (besplatno).

### Prikupljanje recenzija

- Posle svakog fotografisanja, posalji klijentu link ka Google recenziji
- Cilj: 2-3 nove recenzije mesecno

### Blog sadrzaj

- Pregledaj/prilagodi draft blog postove
- Objavljuj 2 posta mesecno za konstantan rast

---

## Struktura novih fajlova

```
src/
├── content/
│   ├── config.ts
│   └── blog/
│       ├── organizacija-rodjendana.md
│       ├── priprema-fotografisanje.md
│       ├── lokacije-beograd.md
│       ├── sta-obuci.md
│       ├── profesionalne-fotografije.md
│       └── linkedin-portret.md
└── pages/
    ├── blog/
    │   ├── index.astro
    │   └── [slug].astro
    └── usluge/
        ├── deciji-rodjendani.astro
        ├── porodicno-fotografisanje.astro
        └── fotografije-za-drustvene-mreze.astro
```
