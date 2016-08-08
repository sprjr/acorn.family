const express = require('express')
const app = express()
const pkg = require('./package.json')
const PORT = 2936

app.use(express.static('build'))
app.set('views', './build')

app.get('*', (req, res) => {
  res.sendFile(`${process.cwd()}/build/index.html`)
})

app.listen(PORT, function () {
  console.log(`${pkg.name} running on ${PORT}`)
})
