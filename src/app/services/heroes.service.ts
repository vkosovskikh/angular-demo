import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, delay, Observable, of, tap } from "rxjs";
import { Hero } from "../hero";

@Injectable({ providedIn: "root" })
export class HeroesService {
  private heroesUrl = "https://65b212569bfb12f6eafcbd56.mockapi.io/api/Heros"; // URL to web api

  private heroesSubject = new BehaviorSubject<Hero[]>([]);
  heroes$ = this.heroesSubject.asObservable();

  private selectedHeroSubject = new BehaviorSubject<Hero | null>(null);
  selectedHero$ = this.selectedHeroSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchHeroes(): void {
    this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(
        tap((data) => console.log("Fetched heroes:", data)),
        catchError((err) => {
          console.error("Error fetching heroes:", err);
          return of([]);
        })
      )
      .subscribe((heroes) => this.heroesSubject.next(heroes));
  }

  selectHero(id: string): void {
    const heroes = this.heroesSubject.getValue();
    const hero = heroes.find((h) => h.id === id) || null;
    this.selectedHeroSubject.next(hero);
  }

  deleteHero(id: string): void {
    const url = `${this.heroesUrl}/${id}`;

    this.http
      .delete<Hero>(url)
      .pipe(
        tap(() => {
          const currentHeroes = this.heroesSubject.getValue();
          const updated = currentHeroes.filter((h) => h.id !== id);
          this.heroesSubject.next(updated);

          const selected = this.selectedHeroSubject.getValue();
          if (selected && selected.id === id) {
            this.selectedHeroSubject.next(null);
          }
        }),
        catchError((err) => {
          console.error("Error deleting hero:", err);
          return of(null);
        })
      )
      .subscribe();
  }

  addHero(name: string): void {
    const newHero = { name };

    this.http
      .post<Hero>(this.heroesUrl, newHero)
      .pipe(
        tap((createdHero) => {
          const updated = [...this.heroesSubject.getValue(), createdHero];
          this.heroesSubject.next(updated);
        }),
        catchError((err) => {
          console.error("Error adding hero:", err);
          return of(null);
        })
      )
      .subscribe();
  }
}
