import express  from "express";
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const diary = diaryServices.findById(parseInt(id))
    res.send(diary)
})

router.post('/', (_req, res) => {
    res.send('Saving a diary')
})

export default router