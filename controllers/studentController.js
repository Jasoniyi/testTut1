import students from '../dummy/students';

class StudentController {
    // Get all students
    static getAllStudents(req, res) {
        return res.status(200).json({
            students,
            message: "All the students",
        });
    }
    // Get single student
    static getSingleStudent(req,res) {
        const findStudent = students.find(student => student.id === parseInt(req.params.id , 10));
        if (findStudent) {
            return res.status(200).json({
                student: findStudent,
                message: ` ${findStudent.name}'s record `,
            });
        }
    }
    
    //Post Student
    static createStudent(req, res) { 
        const {
            id,
            name,
            age,
        } = req.body
        //const maxId = Math.max([...students.map(a => a.id)]);
        const studentSchema = {
            id: students.length + 1,
            name,
            age
        };
        
        const createStudent = students.push(studentSchema);
        if(createStudent) {
            return res.status(201).json({
                studentSchema,
                message: `${studentSchema.name}'s record`,
            });  
        }
    }
    // Delete student
    static deleteStudent(req, res){
        const findStudent = students.find(student => student.id === parseInt(req.params.id));
        if (!findStudent) res.status(404).send('student not found');
        const index = students.indexOf(findStudent);
        students.splice(index, 1);
        res.json({
            "status": 200,
            "message": "Student succesfully deleted"
        });
    }
    

}

export default StudentController;