import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Login, Signup, User } from "../../../store/auth/types";
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {}

    signup(user: Signup): Observable<User> {
        return this.http.post<User>(`${environment.apiUrl}/user`, user)
    }

    login(user: Login): Observable<User> {
        return this.http.post<User>(`${environment.apiUrl}/login`, user)
    } 

    logout(): Observable<boolean> {
        return of(true)
    }
}