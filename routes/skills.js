import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */

// GET -- localhost:3000/skills
router.get('/', skillsCtrl.index)

// GET -- localhost:3000/todos/new
router.get('/new', skillsCtrl.new)

export {
  router
}
