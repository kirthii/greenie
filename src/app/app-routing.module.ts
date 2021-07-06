import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CompostingComponent } from './composting/composting.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FertilizersComponent } from './fertilizers/fertilizers.component';
import { FooterComponent } from './footer/footer.component';
import { GardenaccessoriesComponent } from './gardenaccessories/gardenaccessories.component';
import { GrowingtipsComponent } from './growingtips/growingtips.component';
import { HomeComponent } from './home/home.component';
import { SaplingsComponent } from './saplings/saplings.component';
import { SeedsComponent } from './seeds/seeds.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'saplings',component:SaplingsComponent},
  {path:'growingtips',component:GrowingtipsComponent},
  {path:'fertilizers',component:FertilizersComponent},
  {path:'composting',component:CompostingComponent},
  {path:'seeds',component:SeedsComponent},
  {path:'gardenaccessories',component:GardenaccessoriesComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'footer',component:FooterComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
