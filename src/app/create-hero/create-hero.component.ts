import { Component, Input, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { HeroesService } from "../services/heroes.service";

@Component({
  selector: "app-create-hero",
  templateUrl: "./create-hero.component.html",
  styleUrls: ["./create-hero.component.scss"],
})
export class CreateHeroComponent implements OnInit {
  @Input() createHero: (name: string) => void = () => {};

  heroNameControl = new FormControl("", {
    nonNullable: true,
    validators: Validators.required,
  });

  onCreateHeroClick = (): void => {
    const heroName = this.heroNameControl.value.trim();

    if (!heroName) {
      console.log("Hero name is required", heroName);
      this.heroNameControl.setValue("");
    } else {
      this.createHero(heroName);
      this.heroNameControl.reset();
    }
  };

  ngOnInit(): void {}
}
