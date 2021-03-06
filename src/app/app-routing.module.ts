import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './routes/homepage/homepage.component';
import { SocialComponent } from './routes/social/social.component';
import { ComingSoonComponent} from './routes/coming-soon/coming-soon.component';
import {AboutComponent} from './routes/about/about.component';


const routes: Routes = [
  { path: 'social', component: SocialComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
