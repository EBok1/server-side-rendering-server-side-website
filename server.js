// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates innpm 
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({ extended: true }))


// TODO: routes voor deze pizza applicatie..

app.get('/', function (request, response) {
    response.render('home')
})

app.get('/vraag-aanbod', function (request, response) {
    response.render('vraag-aanbod')
})

app.get('/detail', function (request, response) {
    response.render('detail')
})

// app.get('/vraag-aanbod', function (request, response) {

//     fetchJson('https://fdnd-agency.directus.app/admin/content/dh_services').then((vraagAanbodDataUitDeAPI) => {
//         response.render('vraag-aanbod', { vraagaanbod: vraagAanbodDataUitDeAPI.data })
//     });

// })

// app.get('/vraag-aanbod/:detail', function (request, response) {
//     fetchJson('https://fdnd-agency.directus.app/admin/content/dh_services/1' + request.params.detail + '}').then((pizzaDetail) => {
//         response.render('detail', { detail: detailVraagaanbod.data[0] })
//     })
// })


// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
    // Toon een bericht in de console en geef het poortnummer door
    console.log(`Application started on http://localhost:${app.get('port')}`)
})