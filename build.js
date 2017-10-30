const fs = require('fs')
const fetch = require('node-fetch')

fetch('https://raw.githubusercontent.com/dieulot/instantclick/master/src/instantclick.js')
.then(res => res.text())
.then(text => {
    text += `\nexport default InstantClick`
    fs.writeFileSync('./src/index.js', text, 'utf8')
})