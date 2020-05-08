import '../stylesheets/results.css'
import {parseCSV} from './csvParser.js'
import {createResults} from './results-ui.js'

const encodedCSV = window.sessionStorage.getItem('csv')
const csv = decodeURIComponent(atob(encodedCSV))
const areaScale = parseFloat(window.sessionStorage.getItem('areaScale'))
const powerScale = parseFloat(window.sessionStorage.getItem('powerScale'))

let simplifiedReport = true
if (document.location.pathname.endsWith('explore-results.html')) {
  simplifiedReport = false
}

// eslint-disable-next-line no-unused-vars
const [errors, rawRows, sampleCount] = parseCSV(csv)
createResults(rawRows, sampleCount, areaScale, powerScale, simplifiedReport)
