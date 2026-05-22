import { Subjects } from './Teacher';
import { Subjects as SubjectClass } from './Subject';

export namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends SubjectClass.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingJava) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
