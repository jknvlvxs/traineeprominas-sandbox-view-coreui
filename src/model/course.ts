import {Teacher} from './teacher';

export class Course {
    id: number;
    name: string;
    period: number;
    city: string;
    teacher: Teacher[] = [];
}
