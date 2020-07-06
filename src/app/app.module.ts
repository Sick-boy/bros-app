import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './routes/homepage/homepage.component';
import { SocialComponent } from './routes/social/social.component';
import { ComingSoonComponent } from './routes/coming-soon/coming-soon.component';
import { AboutComponent } from './routes/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SocialComponent,
    ComingSoonComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
