const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
const path = require('path')
var cors = require('cors')
const mongoose = require('mongoose');

app.use(cors(["localhost:5000", "localhost:3000"]))
app.use(express.json())

app.use('/', express.static(path.join(__dirname, 'web-frontend/build')))


mongoose.connect("mongodb+srv://ahsan:form123@users.rpo2j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

const User = mongoose.model('User', {

    name: String,
    email: String,
    password: String,
    phone: Number

});




app.get('/api/v1/signup', (req, res) => {
    res.send(users)
})


app.post('/api/v1/signup', (req, res) => {



    if (!req.body.email ||
        !req.body.password ||
        !req.body.name
    ) {
        console.log("required field missing");
        res.status(403).send("required field missing");
        return;
    } else {



    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    });



    newUser.save(() => {
        console.log("Data Saved in MondoDB")
        res.send('Data Saved in MondoDB')
    }
    )

}

})

app.put('/api/v1/profile', (req, res) => {
    res.send('profile updated')
})
app.delete('/api/v1/profile', (req, res) => {
    res.send('profile deleted')
})




app.post('/api/v1/login', (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        if (!req.body.email ||
            !req.body.password
        ) {
            console.log("required field missing");
            res.status(403).send("required field missing");
            return;
        }

        console.log(req.body)


        User.findOne({ email: email })
            .then(userData => {
                console.log(userData)
                if (userData.password === password) {
                    res.json(
                        userData
                    )
                }
                else {
                    res.send("Invalid email")
                    res.status(401).json('Password Incorrect')
                }
            })
            .catch(err => 
                {
                res.send("Invalid email")
                res.status(400).json('Error: ' + err)
            });
    })



app.get("/**", (req, res, next) => {
     res.sendFile(path.join(__dirname, "./web-frontend/build/index.html"))
    // res.redirect("/")
})


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})