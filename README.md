# BizzFit landing page

Deze landing page is gemaakt met: [`SvelteKit`](https://kit.svelte.dev/);
Dit is een web framework, kijk even rond in de docs en tutorials. Het is vrij simpel, vooral alleen maar HTML, en JavaScript. 
Styling doen we met [`TailwindCSS`](https://tailwindcss.com).
We hebben dus niet echt een aparte css bestand, dit wordt automatsich gegenereerd door Tailwind. Kijk daar ook even door de docs om te snappen wat het is en waarom dus alle html tags in dit project zoveel css classes hebben.

## Local Developing
Je hebt iig [`NodeJS`](https://nodejs.org/en/) nodig op je pc, en een browser, versie 16.* is prima voor nu.



Pull dan de laatste commit van deze repo en open in vscode.
Run dan de volgende commando in een terminal (in vscode). 
```bash
# installeer alle benodigde packages van npm
npm install
```
Volg dan de volgende instructies om de website te testen (en dus een live preview te zien van wat je aan het veranderen bent).

Once you've created a project and installed dependencies with `npm install`, start a development server (dit is dus local):

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
(Je kan dit ook allemaal niet doen, maar dan kun je niet je veranderingen bekijken voordat je je commit pushed naar github)

## Deploying

Als je klaar bent, push je je commit naar de 'main' branch, deze triggered automatisch een build op onze hosting (Netlify). Even minuutje wachten en dan staat de website online op https://bizzfit.app .
