import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentTypeFilterPipe } from './content-type-filter.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { ConetntCardComponent } from './conetnt-card/conetnt-card.component';
import { MessageComponent } from './message/message.component';
import { ModifyContentComponent } from './modify-content/modify-content-component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';



@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
      BrowserModule,
      CommonModule,
      HoverAffectDirective,
      FormsModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
      ConetntCardComponent,
      ContentListComponent,
      MessageComponent
  ]
})
 
export class AppModule { }
