import express from 'express'
import { getBug, getBugs, removeBug, updateBug, addBug } from './bug.controller.js'

const router = express.Router()

router.get('/', getBugs)
router.get('/:bugId', getBug)
router.post('/', addBug)
router.put('/:bugId', updateBug)
router.delete('/:bugId', removeBug)

const bugRoutes = router
export default bugRoutes