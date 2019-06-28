import { Injectable } from '@angular/core';
import { AuthService } from '../app/auth/auth.service';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from '../model/user';
import { Teacher } from '../model/teacher';
import { Course } from '../model/course';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly endpointProtected = "https://traineeprominas-lpop-sandbox.herokuapp.com/api/v1/";

  constructor(private http: HttpClient) {}

  private getToken() {
    return localStorage.getItem('access_token');
  }

  private getHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': `Bearer ${this.getToken()}`
      })
    };
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.endpointProtected+'JSON/user', this.getHeaders())
      .pipe(
        tap(users => console.log('leu os usuários')),
        catchError(this.handleError('getUsers', []))
      );
  }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.endpointProtected+'JSON/teacher', this.getHeaders())
      .pipe(
        tap(teachers => console.log('leu os professores')),
        catchError(this.handleError('getTeachers', []))
      );
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.endpointProtected+'JSON/course', this.getHeaders())
      .pipe(
        tap(courses => console.log('leu os cursos')),
        catchError(this.handleError('getCourses', []))
      );
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.endpointProtected+'JSON/student', this.getHeaders())
      .pipe(
        tap(students => console.log('leu os estudantes')),
        catchError(this.handleError('getStudents', []))
      );
  }

  getUser(id: number): Observable<User> {
    const url = 'JSON/user/${id}';
    return this.http.get<User>(this.endpointProtected+url, this.getHeaders()).pipe(
      tap(_ => console.log('leu o usuário id=${id}')),
      catchError(this.handleError<User>('getUser id=${id}'))
    );
  }

  getTeacher(id: number): Observable<Teacher> {
    const url = 'JSON/teacher/${id}';
    return this.http.get<Teacher>(this.endpointProtected+url, this.getHeaders()).pipe(
      tap(_ => console.log('leu o professor id=${id}')),
      catchError(this.handleError<Teacher>('getTeacher id=${id}'))
    );
  }

  getCourse(id: number): Observable<Course> {
    const url = 'JSON/course/${id}';
    return this.http.get<Course>(this.endpointProtected+url, this.getHeaders()).pipe(
      tap(_ => console.log('leu o curso id=${id}')),
      catchError(this.handleError<Course>('getCourse id=${id}'))
    );
  }

  getStudent(id: number): Observable<Student> {
    const url = 'JSON/student/${id}';
    return this.http.get<Student>(this.endpointProtected+url, this.getHeaders()).pipe(
      tap(_ => console.log('leu o estudante id=${id}')),
      catchError(this.handleError<Student>('getStudent id=${id}'))
    );
  }

  postUser(user): Observable<User> {
    return this.http.post<User>(this.endpointProtected+'user', user, this.getHeaders()).pipe(
      tap((user: User) => console.log('adicionou o usuário com w/ id=${user.id}')),
      catchError(this.handleError<User>('postUser'))
    );
  }

  postTeacher(teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.endpointProtected+'teacher', teacher, this.getHeaders()).pipe(
      tap((teacher: Teacher) => console.log('adicionou o professor com w/ id=${teacher.id}')),
      catchError(this.handleError<Teacher>('postTeacher'))
    );
  }

  postCourse(course): Observable<Course> {
    return this.http.post<Course>(this.endpointProtected+'course', course, this.getHeaders()).pipe(
      tap((course: Course) => console.log('adicionou o curso com w/ id=${course.id}')),
      catchError(this.handleError<Course>('postCourse'))
    );
  }

  postStudent(student): Observable<Student> {
    return this.http.post<Student>(this.endpointProtected+'student', student, this.getHeaders()).pipe(
      tap((student: Student) => console.log('adicionou o estudante com w/ id=${student.id}')),
      catchError(this.handleError<Student>('postStudent'))
    );
  }

  putUser(id, user): Observable<any> {
    const url = 'user/${id}';
    return this.http.put(this.endpointProtected+url, user, this.getHeaders()).pipe(
      tap(_ => console.log('atualiza o usuário com id=${id}')),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  putTeacher(id, teacher): Observable<any> {
    const url = 'teacher/${id}';
    return this.http.put(this.endpointProtected+url, teacher, this.getHeaders()).pipe(
      tap(_ => console.log('atualiza o professor com id=${id}')),
      catchError(this.handleError<any>('updateTeacher'))
    );
  }

  putCourse(id, course): Observable<any> {
    const url = 'course/${id}';
    return this.http.put(this.endpointProtected+url, course, this.getHeaders()).pipe(
      tap(_ => console.log('atualiza o curso com id=${id}')),
      catchError(this.handleError<any>('updateCourse'))
    );
  }

  putStudent(id, student): Observable<any> {
    const url = 'student/${id}';
    return this.http.put(this.endpointProtected+url, student, this.getHeaders()).pipe(
      tap(_ => console.log('atualiza o estudante com id=${id}')),
      catchError(this.handleError<any>('updateStudent'))
    );
  }

  deleteUser(id): Observable<User> {
    const url = 'user/${id}';
    return this.http.delete<User>(this.endpointProtected+url, this.getHeaders()).pipe(
      tap(_ => console.log('remove o usuário com id=${id}')),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  deleteTeacher(id): Observable<Teacher> {
    const url = 'teacher/${id}';
    return this.http.delete<Teacher>(this.endpointProtected+url, this.getHeaders()).pipe(
      tap(_ => console.log('remove o professor com id=${id}')),
      catchError(this.handleError<Teacher>('deleteTeacher'))
    );
  }

  deleteCourse(id): Observable<Course> {
    const url = 'course/${id}';
    return this.http.delete<Course>(this.endpointProtected+url, this.getHeaders()).pipe(
      tap(_ => console.log('remove o curso com id=${id}')),
      catchError(this.handleError<Course>('deleteCourse'))
    );
  }

  deleteStudent(id): Observable<Student> {
    const url = 'student/${id}';
    return this.http.delete<Student>(this.endpointProtected+url, this.getHeaders()).pipe(
      tap(_ => console.log('remove o estudante com id=${id}')),
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
