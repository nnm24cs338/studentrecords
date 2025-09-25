
const studentForm=document.getElementById('studentForm');
const studentList=document.getElementById('studentList');
const errorDiv=document.getElementById('error');
const students=[];

studentForm.addEventListener('submit',function(event){
    event.preventDefault();

const studentId =document.getElementById('studentId').value;
const studentName =document.getElementById('studentName').value;
const studentAge =document.getElementById('studentAge').value;

try{
    addStudent(studentId,studentName,studentAge);
    displayStudents();
    errorDiv.textContent='';
}catch(error){
    errorDiv.textContent=error.message;
}
studentForm.reset();
});
function addStudent(studentId,studentName,studentAge){
    if(!studentId||!studentName||!studentAge){
        throw new Error('All fields are required');
    }
    if(isNaN(studentAge)||studentAge<=0){
        throw new Error('Age must be positive number');
    }
    const Studentexists=students.some(student=>student.studentId===studentId)
    if(Studentexists){
        throw new Error('Student ID already exists');
    }
    const student={
        studentId,
        studentName,
        studentAge:parseInt(studentAge,10),
    };
        students.push(student);
}
    function displayStudents(){
        studentList.innerHTML='';
    students.forEach(student=>{
        const li=document.createElement('li');
        li.textContent=`Id:${student.studentId}, Name:${student.studentName}, Age:${student.studentAge}`;
        studentList.appendChild(li);
    });
    }
