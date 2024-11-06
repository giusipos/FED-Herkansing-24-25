# Procesverslag

Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door _open_ toe te voegen aan een _details_ element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.

## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:

Giulietta Sipos

#### Je startniveau:

Blauw

#### Je focus:

Surface plane

</details>

## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:

[Billie Eilish Shop](https://store.billieeilish.com/?srsltid=AfmBOorSzzkawHN1gOdABLZgk0mE4bb3E88AUou-03HkgCPbakYf1R-m)

#### Screenshot(s) van de eerste pagina (small screen):

Home pagina  
 <img src="readme-images/homepagina.png" width="375px" alt="screenshot van de homepagina">

#### Screenshot(s) van de tweede pagina (small screen):

Tour pagina  
 <img src="readme-images/tourpagina.png" width="375px" alt="screenshot van de tour pagina">

</details>

## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

### Bevindingen

Lijst met je bevindingen die in de test naar voren kwamen:

- De screenreader sloeg sommige stukken over en snapte ik de volgorde niet helemaal van de screenreader.
- Wel had de website de optie gegeven om de nav over te slaan.

</details>

## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

### de hele pagina:

  <img src="readme-images/screenshotwebsite.png" width="375px" alt="breakdown van de hele pagina">

### dynamisch deel (bijv menu):

  <img src="readme-images/menu.png" width="375px" alt="breakdown van menu">

</details>

## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

### Stand van zaken

Wat goed ging:

- De opmaak van de html gng redelijk goed. Ik kon me nog goed herinneren wat de volgorde was van de opmaak en heb ik netjes alles op een rijtje gezet.
-

Wat niet goed ging:
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

### Agenda voor meeting

| Diya                                                    | Thi                                                    | Giulietta                                                                | Keysha                                                                  |
| ------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| - Hoe maak je de rating?                                | - Zou ik alles moeten maken van de gekozen pagina's?   | - Hoe laat je bubbels komen uit de cursor?                               | - Hoe maak je verschillende tabs die je kunt openen op dezelfde pagina? |
| - Verschillende tabs openen op dezelfde pagina, filter? | - Hoe zou ik de h2 titels met een streep moeten maken? | - Kun je nu nog veranderen van focus? van responsive naar surface plane? | - Hoe voeg je een tabel samen in carroussel?                            |

### Verslag van meeting

- Creëer verschillende onderdelen op de pagina, en laat herhalende elementen weg. Gebruik `h2::before{}` en `h2::after{}` om strepen toe te voegen aan de titels/kopjes.
- Voeg hover-effecten, transities, opacity, en animaties toe.
- Zoek online naar bubbels-animaties om toe te voegen aan de cursor.
- Je kunt de focus nog veranderen, maar geef dit graag door.
- Let op dat hover-effecten alleen werken met een cursor en niet op een telefoon.
- Maak een grid voor de lijst, of gebruik een grid in de lijst.
- Voor de carrousel kan je de genoemde website gebruiken (student-assistente heeft dit goedgekeurd).

We hebben bij Sanne nagevraagd of we een andere JavaScript-bibliotheek voor de carrousel mochten gebruiken. Dit werd echter niet goedgekeurd, dus we kunnen die carrousel niet toepassen.

</details>

## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

### Stand van zaken

hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

### Agenda voor meeting

Hier is de bijgewerkte versie in tabelvorm:

| Diya                                                     | Thi                                                            | Giulietta                                       | Keysha                                                                 |
| -------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------- |
| - Hoe maak je de carroussel?                             | - Hoe zet ik de navigatie buttons op de juiste plek?           | - Hoe krijg ik de video goed in de achtergrond? | - Hoe verander je de kleur van een svg?                                |
| - Ik heb wat problemen met nth-of-child, hoe fix ik dit? | - Hoe zet ik het kruisje helemaal naar rechts?                 | - Ik heb geen classes en id's, mag dat?         | - Hoe krijg ik de tweede nav balk?                                     |
|                                                          | - Mijn img nav icons willen niet goed op size, hoe fix ik dit? | - Hoe maak je de nav sticky?                    | - Waarom is er aan de bovenkant van mijn site een kleine pijl te zien? |

### Verslag van meeting

- Bepaal goed welke elementen op de site links of knoppen moeten zijn.
- Maak twee navigatiemenu’s: één voor het hamburger-menu en één voor de zoekknop, inloggen, winkelmandje, etc.
- Gebruik `justify-self: end;` om het kruisicoon aan de rechterkant te plaatsen (zie oefening 2 over grid).
- Gebruik `filter: invert(1);` om iconen wit of zwart te maken.
- Gebruik `nth-of-type` in plaats van `nth-child` voor betere volgorde in de opmaak.
- Controleer in inspect mode met de pijltool of er ongewenste ruimtes door padding of marges zijn en verwijder deze indien nodig.
- Verwijder zoveel mogelijk classes en ID's en gebruik liever pseudoklassen.

</details>

## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

### Bevindingen

Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>

## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

### Stand van zaken

hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

### Agenda voor meeting

| Diya                                      | Thi                                                                                                                                      | Giulietta                                                  | Keysha          |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | --------------- |
| - Tweede menu toevoegen en button stijlen | - Text bij plaatjes, mag dat? Of alles zelf maken?                                                                                       | - Hoe maak ik producten netjes met prijs, button en tekst? | Was er niet bij |
| - Achtergrond weghalen en svg erin        | - Hoe maak ik filter tabs in hamburgernav en op pagina's?                                                                                | - Hoe laat ik tekst springen naar beneden?                 |                 |
|                                           | - De images in collage bewegen mee wanneer je responsive bent                                                                            |                                                            |                 |
|                                           | - Surface plane, website heeft al veel animaties. Tellen die mee voor surface plane als ik die namaak, of moet ik weer nieuwe toevoegen? |                                                            |                 |

### Verslag van meeting

- Plaats geen tekst op de afbeeldingen; je moet ze per afbeelding maken. Het is handig als je goed bent in Photoshop om de tekst te verwijderen.
- Sybren stuurt een CodePen-link voor de filterfunctie.
- De animaties die je kopieert van de originele site tellen mee voor de Surface Plane, maar je kunt altijd extra animaties toevoegen om alle vijf punten van de Surface Plane af te vinken.
- Gebruik `display: flex` en `flex-wrap`.
- Zet een grijze filter over een afbeelding met `::before` (zoek even een video voor uitleg)
- Voeg het tweede menu toe en style de knop: verwijder de achtergrond en voeg een SVG in.

</details>

## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

### Je uitkomst - karakteristiek screenshots:

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">

### Dit ging goed/Heb ik geleerd:

Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">

### Dit was lastig/Is niet gelukt:

Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>

## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).
Nb. ChatGpT en andere AI horen er ook bij.
Nb. Vermeld de bronnen ook in je code.

1. bron 1
2. bron 2
3. ...

</details>
