const students = require('../models/student');

module.exports = userCheck = ((req, res, next) => {

    if(req.params.id > students.length){
        res.status(500).json({
            success: false,
            message: "This is not found"
        })
    }else {
        let std = students.find(student => student.id == req.params.id)
        res.status(200).json(std)
        next();
    }
});
