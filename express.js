const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send("Hello Welcome")
})

app.get('/about', (request, response) => {
  response.send({'name':'Sahil Missala','section':'CSE QE 2b'})
})

app.get('/time',(request, response)=> {
  response.send(new Date())
})

app.use((request, response) => {
  response.status(404).send('404 - Page Not Found')
})

app.listen(3000)
