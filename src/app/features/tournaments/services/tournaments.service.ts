import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TournamentList } from "../../../store/tournaments/types";

@Injectable({
    providedIn: "root"
})
export class TournamentService {

    constructor(private http: HttpClient) {}

    tournaments(): Observable<TournamentList> {
        return this.http.get<TournamentList>('/gui/tournament/tournamentList');
    }
}