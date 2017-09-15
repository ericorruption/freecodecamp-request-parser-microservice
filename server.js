const express = require('express')

const app = express()

app.get('/', (req, res) => {
  const { ip, headers } = req
  const UA = headers['user-agent']
  const languages = headers['accept-language']

  res.send({
    ipaddress: ip,
    language: languages.split(',')[0],
    software: UA.match(/\(([^)]+)\)/)[1]
  })
})

const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
