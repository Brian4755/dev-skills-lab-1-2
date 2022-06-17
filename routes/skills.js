import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */


// GET -- localhost:3000/skills
router.get('/', skillsCtrl.index)

// GET -- localhost:3000/skills/new
router.get('/new', skillsCtrl.new)

// GET -- localhost:3000/skills/id
router.get('/:id', skillsCtrl.show)

// GET -- localhost:3000/skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit)

// POST -- localhost:3000/skills
router.post('/', skillsCtrl.create)

// DELETE -- localhost:3000/skills/:id
router.delete('/:id', skillsCtrl.delete)

// PUT -- localhost:3000/skills/:id
router.put('/:id', skillsCtrl.update)


export {
  router
}
