import { Subjects } from './Teacher';
import { Subjects as SubjectClass } from './Subject';

export namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends SubjectClass.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingReact) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
