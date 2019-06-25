import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from '../model/user';
import { Teacher } from '../model/teacher';
import { Course } from '../model/course';
import { Student } from '../model/student';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://traineeprominas-lpop-sandbox.herokuapp.com/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrl}JSON/user`)
      .pipe(
        tap(users => console.log('leu os usuários')),
        catchError(this.handleError('getUsers', []))
      );
  }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${apiUrl}JSON/teacher`)
      .pipe(
        tap(teachers => console.log('leu os professores')),
        catchError(this.handleError('getTeachers', []))
      );
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${apiUrl}JSON/course`)
      .pipe(
        tap(courses => console.log('leu os cursos')),
        catchError(this.handleError('getCourses', []))
      );
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${apiUrl}JSON/student`)
      .pipe(
        tap(students => console.log('leu os estudantes')),
        catchError(this.handleError('getStudents', []))
      );
  }

  getUser(id: number): Observable<User> {
    const url = `${apiUrl}JSON/user/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`leu o usuário id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  getTeacher(id: number): Observable<Teacher> {
    const url = `${apiUrl}JSON/teacher/${id}`;
    return this.http.get<Teacher>(url).pipe(
      tap(_ => console.log(`leu o professor id=${id}`)),
      catchError(this.handleError<Teacher>(`getTeacher id=${id}`))
    );
  }

  getCourse(id: number): Observable<Course> {
    const url = `${apiUrl}JSON/course/${id}`;
    return this.http.get<Course>(url).pipe(
      tap(_ => console.log(`leu o curso id=${id}`)),
      catchError(this.handleError<Course>(`getCourse id=${id}`))
    );
  }

  getStudent(id: number): Observable<Student> {
    const url = `${apiUrl}JSON/student/${id}`;
    return this.http.get<Student>(url).pipe(
      tap(_ => console.log(`leu o estudante id=${id}`)),
      catchError(this.handleError<Student>(`getStudent id=${id}`))
    );
  }

  postUser(user): Observable<User> {
    return this.http.post<User>(`${apiUrl}user`, user, httpOptions).pipe(
      tap((user: User) => console.log(`adicionou o usuário com w/ id=${user.id}`)),
      catchError(this.handleError<User>('postUser'))
    );
  }

  postTeacher(teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${apiUrl}teacher`, teacher, httpOptions).pipe(
      tap((teacher: Teacher) => console.log(`adicionou o professor com w/ id=${teacher.id}`)),
      catchError(this.handleError<Teacher>('postTeacher'))
    );
  }

  postCourse(course): Observable<Course> {
    return this.http.post<Course>(`${apiUrl}course`, course, httpOptions).pipe(
      tap((course: Course) => console.log(`adicionou o curso com w/ id=${course.id}`)),
      catchError(this.handleError<Course>('postCourse'))
    );
  }

  postStudent(student): Observable<Student> {
    return this.http.post<Student>(`${apiUrl}student`, student, httpOptions).pipe(
      tap((student: Student) => console.log(`adicionou o estudante com w/ id=${student.id}`)),
      catchError(this.handleError<Student>('postStudent'))
    );
  }

  putUser(id, user): Observable<any> {
    const url = `${apiUrl}user/${id}`;
    return this.http.put(url, user, httpOptions).pipe(
      tap(_ => console.log(`atualiza o usuário com id=${id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  putTeacher(id, teacher): Observable<any> {
    const url = `${apiUrl}teacher/${id}`;
    return this.http.put(url, teacher, httpOptions).pipe(
      tap(_ => console.log(`atualiza o professor com id=${id}`)),
      catchError(this.handleError<any>('updateTeacher'))
    );
  }

  putCourse(id, course): Observable<any> {
    const url = `${apiUrl}course/${id}`;
    return this.http.put(url, course, httpOptions).pipe(
      tap(_ => console.log(`atualiza o curso com id=${id}`)),
      catchError(this.handleError<any>('updateCourse'))
    );
  }

  putStudent(id, student): Observable<any> {
    const url = `${apiUrl}student/${id}`;
    return this.http.put(url, student, httpOptions).pipe(
      tap(_ => console.log(`atualiza o estudante com id=${id}`)),
      catchError(this.handleError<any>('updateStudent'))
    );
  }

  deleteUser(id): Observable<User> {
    const url = `${apiUrl}user/${id}`;
    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o usuário com id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  deleteTeacher(id): Observable<Teacher> {
    const url = `${apiUrl}teacher/${id}`;
    return this.http.delete<Teacher>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o professor com id=${id}`)),
      catchError(this.handleError<Teacher>('deleteTeacher'))
    );
  }

  deleteCourse(id): Observable<Course> {
    const url = `${apiUrl}course/${id}`;
    return this.http.delete<Course>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o curso com id=${id}`)),
      catchError(this.handleError<Course>('deleteCourse'))
    );
  }

  deleteStudent(id): Observable<Student> {
    const url = `${apiUrl}student/${id}`;
    return this.http.delete<Student>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o estudante com id=${id}`)),
      catchError(this.handleError<Student>('deleteStudent'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
