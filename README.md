# Girlpower kodeoppgave 


## Opprett kontoer: 

- Lag sanity konto: https://www.sanity.io/login
- Lag konto i vercel: https://vercel.com/signup
## Installer 
- npm: https://nodejs.org/en/ 
  - husk å opne å lukke cmd etterpå for å få oppdatert path variables
  - sjekk installasjonen:
    - `node -v` 
    - `npm -v`
    

###Innstaller vercel CLI 

`npm install -g vercel`

Logg inn: `vercel login`

###Innstaller sanity CLI

`npm install -g @sanity/cli`

Stå i GIRLPOWER_kodeoppgave/girlpowersanity

kjør:
`sanity init`

- new project
- select organization: none
- public dataset
- output path - trykk enter

deploy sanity: 
`sanity deploy`


###For å innstallere dependencies (stå i root av prosjektet, altså øverste nivå)

 `npm install`


###For å starte applikasjonen (stå i root av prosjektet, altså øverste nivå)

 `npm run dev`

###Starte sanity studio (stå i girlpowersanity mappa)

 `sanity start`