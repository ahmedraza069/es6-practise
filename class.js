class students{
    constructor(sId, sName){
      this.Id = sId;
      this.Name = sName;
      this.Institute = 'Creative It Institue';
    }
}
const studentOne = new students(1, 'Rakib');
const studentTwo = new students(2, 'Hasan');
console.log(studentOne, studentTwo);