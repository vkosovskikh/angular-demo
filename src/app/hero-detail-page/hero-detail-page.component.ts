import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Hero } from "../hero";
import { HeroesService } from "../services/heroes.service";

@Component({
  selector: "app-hero-detail-page",
  templateUrl: "./hero-detail-page.component.html",
  styleUrls: ["./hero-detail-page.component.scss"],
})
export class HeroDetailPageComponent implements OnInit {
  hero: Hero | null = null;
  heroNameControl = new FormControl("", {
    nonNullable: true,
    validators: Validators.required,
  });

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.fetchHero();
  }

  fetchHero = (): void => {
    const id = this.route.snapshot.paramMap.get("id");

    if (!id) {
      return;
    }

    this.heroesService.fetchOneHero(id).subscribe((hero) => {
      if (hero) {
        this.hero = hero;
        this.heroNameControl.setValue(hero.name);
      }
    });
  };

  updateHero = (heroName: string): void => {
    this.heroesService
      .updateHero({ ...this.hero!, name: heroName })
      .subscribe((hero) => {
        if (hero) {
          this.hero = hero;
        }

        this.heroNameControl.setValue(heroName);
      });
  };

  goBack = (): void => {
    this.location.back();
  };
}
