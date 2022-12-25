const students = [
    {id: 10, name: 'Jisan'},
    {id: 15, name: 'Thoyob'},
    {id: 20, name: 'Shanto'},
    {id: 25, name: 'Motu'}
];
// const studentName = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     studentName.push(element.name);
// }
// console.log(studentName);

const studentsName = students.map(student => student.name);
const studentId = students.map(id => id.id);
const upperId = students.filter(i => i.id > 15);
const upperIdOne = students.find(i => i.id > 15);

console.log(studentId);
console.log(studentsName);
console.log(upperId);
console.log(upperIdOne);