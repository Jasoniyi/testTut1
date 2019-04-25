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
                message: "A single student record",
            });
        }
    }
}