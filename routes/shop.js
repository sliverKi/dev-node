const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => { 
    res.send('<h2>Second middleware</h2>')
})

module.exports = router