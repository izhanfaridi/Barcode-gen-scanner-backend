const router = require("express").Router()
const Student = require("../models/Student");

//ADD STUDENT
router.post("/" , async(req,res)=>{
    const newStudent = new Student ({
        name: req.body.name,
        fatherName: req.body.fatherName,
        seatNo: req.body.seatNo,
        enroll:req.body.enroll,
        group:req.body.group,
    });

    try{
        const savedStudent = await newStudent.save()
        res.status(200).json(savedStudent)
    }catch(err){
        res.status(500).json(err)
    }
});


//GET ALL STUDENTS
router.get("/findall", async (req, res) => {
    const query = req.query.new
    try {
      const students = query ? await Student.find().sort({_id:-1}).limit(5) : await Student.find();
      res.status(200).json(students);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET Student
router.get("/find/:eb", async (req, res) => {
    try {
        const query = {seatNo:req.params.eb}
        const student = await Student.find(query);
        res.status(200).json(student);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router
