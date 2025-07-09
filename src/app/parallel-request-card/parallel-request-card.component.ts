import { Component, Input, OnInit } from "@angular/core";
import { Hero } from "../hero";

@Component({
  selector: "app-parallel-request-card",
  templateUrl: "./parallel-request-card.component.html",
  styleUrls: ["./parallel-request-card.component.scss"],
})
export class ParallelRequestCardComponent implements OnInit {
  @Input() hero: Hero | null = null;
  @Input() status: "waiting" | "loading" | "done" | "error" = "waiting";

  constructor() {}

  ngOnInit(): void {}
}
