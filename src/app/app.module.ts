import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HttpClientModule } from "@angular/common/http";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { CreateHeroComponent } from "./create-hero/create-hero.component";
import { MatButtonModule } from "@angular/material/button";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MatTabsModule } from "@angular/material/tabs";
import { HeroesPageComponent } from "./heroes-page/heroes-page.component";
import { HeroDetailPageComponent } from "./hero-detail-page/hero-detail-page.component";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ParallelRequestContainerComponent } from "./parallel-request-container/parallel-request-container.component";
import { ParallelRequestCardComponent } from "./parallel-request-card/parallel-request-card.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    CreateHeroComponent,
    DashboardComponent,
    HeroesPageComponent,
    HeroDetailPageComponent,
    DashboardPageComponent,
    ParallelRequestContainerComponent,
    ParallelRequestCardComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
