import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Hero } from "../hero";
import { HeroesService } from "../services/heroes.service";

@Component({
  selector: "app-heroes-page",
  templateUrl: "./heroes-page.component.html",
  styleUrls: ["./heroes-page.component.scss"],
})
export class HeroesPageComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.fetchHeroes();
  }

  fetchHeroes = (): void => {
    this.heroesService.fetchHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  };

  createHero = (heroName: string): void => {
    this.heroesService.addHero(heroName).subscribe((hero) => {
      if (hero) {
        this.heroes.push(hero);
      }
    });
  };

  deleteHero = (id: string, event: MouseEvent): void => {
    event.stopPropagation();
    this.heroesService.deleteHero(id).subscribe((hero) => {
      // TODO: блочить интерфейс
      if (hero) {
        this.heroes = this.heroes.filter((hero) => hero.id !== id);
      }
    });
  };
}
