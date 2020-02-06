import express from 'express'
import roustes from './routes'
import './database'

class App {
  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json())
  }

  routes() {
    this.server.use(roustes)
  }
}

export default new App().server
