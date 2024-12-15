// task 1
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// task 2
export interface Directors extends Teacher {
    numberOfReports: number;
  }

  export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

  
  // task 3
  export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`;
  };


  // task 4
  export interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
  }
  
  export interface StudentClassInterface {
    displayName(): string;
    workOnHomework(): string;
  }
  
 export class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) {}
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  