
const User = require('../server/userSchema');
const express = require('express');
const router = express.Router();


let counter = 0;
let coutnerApi = (req, res, next) => {
    console.log(counter);
    if(++counter == 10){
        let msg = {
            bit: 0, 
            message: "You reached maximum hits for today"
        }
        res.send(msg);
    }
    
    next();
    
}

router.get('/', coutnerApi, async (req, res) => {
    let users = await User.find();
    res.send(users);
});

router.get("/find-user/:_id", (req, res) => {
    User.find(req.params).then( user => {
        console.log(req.params);
        res.send(user);
    } );
})

router.post('/add-user', async (req, res) => {
    
    const addUser = new User(req.body);
    await addUser.save();
    let message = {
        bit: 1,
        msg: "Record inserted"
    };
    res.send(addUser);
})

router.put('/update-user/:_id', (req, res) => {
    User.updateOne(
        req.params,
        {
            $set: {
                first_name: req.body.first_name
            }
        }
    )
    .then( user => {
        let message = {
            bit: 1,
            msg: "Record updated"
        };
        res.send(message);
    } );
})

router.delete("/delete-user/:_id", (req, res) => {
    User.deleteOne( req.params ).then( user => {
            let message = {
                bit: 1,
                msg: "Record deleted",
                user: user
            }
            res.send(message);
        }
    ).catch(err => {
        let message = {
            bit: 0,
            msg: "Something went wrong",
            user: err
        }
        res.send(message);
    })
});

module.exports = router;