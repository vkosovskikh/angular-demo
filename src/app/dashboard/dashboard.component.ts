import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable, of } from "rxjs";
import { Hero } from "../hero";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  @Input() searchControl: FormControl = new FormControl("");
  @Input() filteredHeroes$: Observable<Hero[]> = of([]);
  @Input() selectHero: (heroId: string) => void = () => {};

  constructor() {}

  ngOnInit(): void {}

  displayFn = (hero: Hero): string => {
    return hero ? hero.name : "";
  };
}
