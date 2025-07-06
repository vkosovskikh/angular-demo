import { Component } from "@angular/core";
import { HeroesService } from "./services/heroes.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Tour of Heroes";

  heroes$ = this.heroesService.heroes$;
  selectedHero$ = this.heroesService.selectedHero$;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.fetchHeroes();
  }
}
