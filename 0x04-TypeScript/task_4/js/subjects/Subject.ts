namespace Subjects {
    export class Subject {
      teacher: Teacher | null;
  
      constructor(teacher: Teacher | null = null) {
        this.teacher = teacher;
      }
  
      setTeacher(teacher: Teacher) {
        this.teacher = teacher;
      }
    }
  }
  