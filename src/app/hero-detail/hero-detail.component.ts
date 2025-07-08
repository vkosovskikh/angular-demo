import { Component, Input, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Hero } from "../hero";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.scss"],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero | null = null;
  @Input() heroNameControl: FormControl<string> = new FormControl("", {
    nonNullable: true,
    validators: Validators.required,
  });
  @Input() updateHero: (heroName: string) => void = () => {};

  constructor() {}

  onUpdateHeroClick = (): void => {
    const heroName = this.heroNameControl.value.trim();

    if (!heroName) {
      console.log("Hero name is required", heroName);
      this.heroNameControl.setValue("");
    } else {
      this.updateHero(heroName);
    }
  };

  ngOnInit(): void {}
}
