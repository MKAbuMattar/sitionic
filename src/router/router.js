import express from 'express'
import { get } from '../controllers/tmp.conteraller'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({
    API: 'Work',
  })
})

router.get('/api', get)

export default router
