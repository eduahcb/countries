const path = require('node:path')
const fs = require('node:fs')

const countriesJson = require('../../src/fake-api/fixtures/countries.json')

const formattedCountries = []

for (let i = 0; i < countriesJson.length; i++) {
  formattedCountries.push({
    name: countriesJson[i].name.common,
    population: countriesJson[i].population,
    region: countriesJson[i].region,
    capital: countriesJson[i].capital,
    flag: countriesJson[i].flags.svg
  })
}

const countriesPath = path.join(__dirname, '..', '..', 'src', 'fixtures', 'countries.json')

fs.writeFile(countriesPath, JSON.stringify(formattedCountries, null, ' '), (error) => {
  if (error) console.log(error)
})
