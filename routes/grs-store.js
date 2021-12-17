var express = require('express');
var router = express.Router();

grsArticle = require('./models/grs-store-sch')


//create with post req
router.post('/create', function (req, res, next) {
    const mQuery = req.body
    console.log("mquery: ",req.body)
    grsArticle.create(mQuery, function (err, mresp) {   
        res.send({ "Message": "Created successfully" })
        console.log("Store Created successfully")
    })
})




//query with post request
router.post('/query', function (req, res, next) {
    const mQuery = req.body
    grsArticle.find(mQuery, function (err, mresp) {
        res("created")
    })
})

//update with post req
router.post('/update', function (req, res, next) {
    const mId = req.query._id;
    const mQuery = req.body
    const mUpdate = req.body.update;
    const mOptions = '';
    grsArticle.findByIdAndUpdate(mId, mQuery, mOptions, function (err, mresp) {
       res.send({ "Message": "Updated successfully" })
       console.log(mQuery,mId)
       if (err) {
        console.log("MONOERR",err)   
    }
    })   
})



//delete with post req
router.post('/delete', function (req, res, next) {
    const mId = req.query._id;
    console.log(mId)
    grsArticle.findByIdAndRemove(mId, function (err, mresp) {
        res.send({ "Message": "Removed HELLO successfully" })
    })
})







// query by size
router.get('/param', function (req, res, next) {

    grsArticle.find({}, function (err, mered) {
        //console.log(mered)
        res.json(mered)
    })

})

// array read
router.get('/read/', function (req, res, next) {


    grsArticle.find({}, function (err, mered) {

        res.json(mered)

    })


})



module.exports = router;