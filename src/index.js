import express from 'express'
import cors from 'cors'
import router from './router/router'
import { PORT } from './config/variables.config'
import onYourNetwork from './config/onYourNetwork.config'

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)

app.listen(PORT, () => {
  console.clear()

  console.info(`Server running at
      Local:            http://localhost:${PORT}/
      On Your Network:  http://${Object.values(onYourNetwork)[0][0]}:${PORT}/`)
})
