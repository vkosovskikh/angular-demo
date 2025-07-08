import { Component, Input, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroesService } from "../services/heroes.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})
export class HeroesComponent implements OnInit {
  @Input() heroes: Hero[] = [];
  @Input() deleteHero: (id: string, event: MouseEvent) => void = (
    _id,
    event
  ) => {
    event.stopPropagation();
  };

  constructor() {}

  ngOnInit(): void {}

  onDeleteHeroClick = (id: string, event: MouseEvent): void => {
    this.deleteHero(id, event);
  };
}
