import express from 'express'
import * as HomeController from './controllers/home'
import * as AboutController from './controllers/about'

const router = express.Router()

router.get('/', HomeController.get)
router.get('/about', AboutController.get)

export default router
