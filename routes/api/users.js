const router = require("express").Router();
const userController = require("../../controllers/userController");
const User = require('../../models/user')
const passport = require('../../passport')

// Matches with "/api/books"
// router.route("/")
//   .get(userController.findAll)
//   .post(userController.create);


router.route("/test").get((req,res)=>{
    console.log("/api/users/test hit")
    res.send("hello from USERS")
})



// router.use("/login",passport.authenticate('local'));

  router.route("/").post((req, res) => {
    console.log('user signup');
console.log(req.body)
    const { firstName, lastName, username, password } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the email: ${username}`
            })
        }
        else {
            const newUser = new User({
                firstName: firstName,
                lastName : lastName,
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})
.get((req, res)=> {
    console.log("req.user:", req.user)
    res.json(req.user)})

// router.route("/login")
//   .post((req,res)=> {
//     console.log("/test route hit")
//     res.send("hello")})


router.route("/login")
.post((req, res) => {
    console.log('logged in', req.user);

    res.json(req.user);
   
})

// Matches with "/api/books/:id"
router.route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);



module.exports = router;