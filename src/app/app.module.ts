import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SaplingsComponent } from './saplings/saplings.component';
import { GrowingtipsComponent } from './growingtips/growingtips.component';
import { FertilizersComponent } from './fertilizers/fertilizers.component';
import { CompostingComponent } from './composting/composting.component';
import { SeedsComponent } from './seeds/seeds.component';
import { GardenaccessoriesComponent } from './gardenaccessories/gardenaccessories.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ComponentComponent } from './component/component.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SaplingsComponent,
    GrowingtipsComponent,
    FertilizersComponent,
    CompostingComponent,
    SeedsComponent,
    GardenaccessoriesComponent,
    AboutusComponent,
    ComponentComponent,
    ContactusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
