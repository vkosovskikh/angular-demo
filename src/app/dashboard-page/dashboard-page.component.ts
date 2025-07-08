import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  of,
  startWith,
  switchMap,
  tap,
} from "rxjs";
import { Hero } from "../hero";
import { HeroesService } from "../services/heroes.service";

@Component({
  selector: "app-dashboard-page",
  templateUrl: "./dashboard-page.component.html",
  styleUrls: ["./dashboard-page.component.scss"],
})
export class DashboardPageComponent implements OnInit {
  searchControl = new FormControl("");

  filteredHeroes$: Observable<Hero[]> = of([]);

  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.filteredHeroes$ = this.searchControl.valueChanges.pipe(
      tap((query) => console.log("Query:", query)),
      startWith(""),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query) =>
        typeof query === "string" && query.trim()
          ? this.heroesService.searchHeroes(query.trim())
          : of([])
      )
    );
  }

  selectHero = (heroId: string): void => {
    this.router.navigate(["/heroes", heroId]);
  };
}
