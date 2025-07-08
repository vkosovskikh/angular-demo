import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, delay, Observable, of, tap } from "rxjs";
import { Hero } from "../hero";

@Injectable({ providedIn: "root" })
export class HeroesService {
  private heroesUrl = "https://65b212569bfb12f6eafcbd56.mockapi.io/api/Heros"; // URL to web api

  constructor(private http: HttpClient) {}

  fetchHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((data) => console.log("Fetched heroes:", data)),
      catchError((err) => {
        console.error("Error fetching heroes:", err);
        return of([]);
      })
    );
  }

  fetchOneHero(id: string): Observable<Hero | null> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.get<Hero>(url).pipe(
      tap((data) => console.log("Fetched hero:", data)),
      catchError((err) => {
        console.error("Error fetching hero:", err);
        return of(null);
      })
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.heroesUrl}?search=${term}`).pipe(
      tap((heroes) => console.log("Fetched heroes:", heroes)),
      catchError((err) => {
        console.error("Error fetching heroes:", err);
        return of([]);
      })
    );
  }

  addHero(name: string): Observable<Hero | null> {
    const newHero = { name };

    return this.http.post<Hero>(this.heroesUrl, newHero).pipe(
      tap((data) => console.log("Created hero:", data)),
      catchError((err) => {
        console.error("Error adding hero:", err);
        return of(null);
      })
    );
  }

  deleteHero(id: string): Observable<Hero | null> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url).pipe(
      tap((data) => console.log("Deleted hero:", data)),
      catchError((err) => {
        console.error("Error deleting hero:", err);
        return of(null);
      })
    );
  }
}
