import { loggerService } from "../../services/logger.service.js";
import { makeId, readJsonFile, writeJsonFile } from "../../services/utils.js";


export const userService = {
    query,
    getById,
    remove,
    save
}

const users = readJsonFile('./data/users.json')


async function query() {

    try {
        return users
    } catch (err) {
        throw err
    }
}

async function getById(userId) {
    try {
        const user = users.find(user => user._id === userId)
        if (!user) throw new Error('Cannot find user')
        return user
    } catch (err) {
        throw err
    }
}

async function remove(userId) {
    try {

        const userIdx = users.findIndex(user => user._id === userId)
        if (userIdx < 0) throw new Error('Cannot find user')
        users.splice(userIdx, 1)
        await _saveusersToFile()
    } catch (err) {
        throw err
    }

}

async function save(userToSave) {
    try {
        if (userToSave._id) {
            const userIdx = users.findIndex(user => user._id === userToSave._id)
            if (userIdx < 0) throw new Error('Cannot find user')
            users[userIdx] = userToSave
        } else {
            userToSave._id = makeId()
            users.push(userToSave)
        }
        await _saveusersToFile()
        return userToSave
    } catch (err) {
        throw err
    }
}


function _saveusersToFile() {
    return writeJsonFile('./data/users.json', users)
}