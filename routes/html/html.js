const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/profile', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    // if (req.user) {
         res.sendFile(path.join(__dirname, "../../client/src/pages/profile.html"))
    // } else {
    //     res.json({ user: null })
    // }

})


router.get('/', (req, res, next) => {
    
         res.sendFile(path.join(__dirname, "../../client/public/homepage.html"))
    

})

router.get("/signup1", (req, res)  =>
{
res.sendFile(path.join(__dirname, "../../client/src/pages/login.html"))
});

module.exports = router