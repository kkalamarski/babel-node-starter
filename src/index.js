import express from 'express'
import routes from './routes'

const app = express()

app.set('view engine', 'pug')
app.set('views', './src/templates')

app.use('/', routes)

app.listen(3000, (port) => {
  console.info('Server Listnening at port 3000')
})
