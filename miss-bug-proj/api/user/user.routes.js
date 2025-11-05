import express from 'express'
import { getUser, getUsers, removeUser, updateUser, addUser } from './user.controller.js'

const router = express.Router()

router.get('/', getUsers)
router.get('/:userId', getUser)
router.post('/', addUser)
router.put('/:userId', updateUser)
router.delete('/:userId', removeUser)

const userRoutes = router
export default userRoutes