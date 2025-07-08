import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";

import { HeroDetailPageComponent } from "./hero-detail-page/hero-detail-page.component";
import { HeroesPageComponent } from "./heroes-page/heroes-page.component";

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardPageComponent },
  { path: "heroes", component: HeroesPageComponent },
  { path: "heroes/:id", component: HeroDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
