import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../services/heroes.service";

@Component({
  selector: "app-create-hero",
  templateUrl: "./create-hero.component.html",
  styleUrls: ["./create-hero.component.scss"],
})
export class CreateHeroComponent implements OnInit {
  heroName = "";

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  createHero(): void {
    const name = this.heroName.trim();

    if (!name) return;

    this.heroesService.addHero(name);
    this.heroName = "";
  }
}
