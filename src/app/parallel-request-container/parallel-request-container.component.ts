import { Component, OnInit } from "@angular/core";
import {
  catchError,
  concatMap,
  forkJoin,
  from,
  map,
  of,
  tap,
  toArray,
} from "rxjs";
import { Hero } from "../hero";
import { HeroesService } from "../services/heroes.service";

@Component({
  selector: "app-parallel-request-container",
  templateUrl: "./parallel-request-container.component.html",
  styleUrls: ["./parallel-request-container.component.scss"],
})
export class ParallelRequestContainerComponent implements OnInit {
  loadedHeroes: (Hero | null)[] = Array(3).fill(null);
  loadedHeroesStatus: ("waiting" | "loading" | "done" | "error")[] =
    Array(3).fill("waiting");

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  getParallelHeroes(): void {
    this.loadedHeroes = Array(3).fill(null);
    this.loadedHeroesStatus = Array(3).fill("waiting");

    this.heroesService.fetchHeroes().subscribe((heroes) => {
      if (heroes.length < 3) {
        alert("add more heroes");
        return;
      }

      const ids = this.getRandomIds(heroes, 3);

      this.loadedHeroesStatus = Array(3).fill("loading");

      forkJoin([
        this.heroesService.fetchOneHero(ids[0], 2000).pipe(
          tap(() => (this.loadedHeroesStatus[0] = "done")),
          catchError(() => {
            this.loadedHeroesStatus[0] = "error";
            return of(null); // продолжаем выполнение
          })
        ),
        this.heroesService.fetchOneHero(ids[1], 2000).pipe(
          tap(() => (this.loadedHeroesStatus[1] = "done")),
          catchError(() => {
            this.loadedHeroesStatus[1] = "error";
            return of(null);
          })
        ),
        this.heroesService.fetchOneHero(ids[2], 2000).pipe(
          tap(() => (this.loadedHeroesStatus[2] = "done")),
          catchError(() => {
            this.loadedHeroesStatus[2] = "error";
            return of(null);
          })
        ),
      ]).subscribe((heroes) => {
        this.loadedHeroes = heroes;
      });
    });
  }

  getSequentialHeroes(): void {
    this.loadedHeroes = Array(3).fill(null);
    this.loadedHeroesStatus = Array(3).fill("waiting");

    this.heroesService.fetchHeroes().subscribe((heroes) => {
      if (heroes.length < 3) {
        alert("add more heroes");
        return;
      }

      const ids = this.getRandomIds(heroes, 3);

      this.loadedHeroesStatus = ["waiting", "waiting", "waiting"];

      from(ids)
        .pipe(
          map((id, index) => ({ id, index })),
          concatMap(({ id, index }) => {
            this.loadedHeroesStatus[index] = "loading";
            return this.heroesService.fetchOneHero(id, 2000).pipe(
              tap((hero) => {
                this.loadedHeroesStatus[index] = "done";
                this.loadedHeroes[index] = hero; // 💥 обновляем по месту!
              }),
              catchError(() => {
                this.loadedHeroesStatus[index] = "error";
                return of(null);
              })
            );
          })
        )
        .subscribe();
    });
  }

  private getRandomIds(heroes: Hero[], count: number): string[] {
    return [...heroes]
      .sort(() => 0.5 - Math.random())
      .slice(0, count)
      .map((h) => h.id);
  }
}
