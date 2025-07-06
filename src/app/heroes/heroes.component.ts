import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroesService } from "../services/heroes.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})
export class HeroesComponent implements OnInit {
  heroes$ = this.heroesService.heroes$;
  selectedHero$ = this.heroesService.selectedHero$;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.fetchHeroes();
  }

  onHeroClick(id: string): void {
    this.heroesService.selectHero(id);
  }

  onDeleteHeroClick(id: string, event: MouseEvent): void {
    event.stopPropagation();
    this.heroesService.deleteHero(id);
  }
}
