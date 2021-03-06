import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { NgrxFormsModule } from 'ngrx-forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent, PersonComponent, ConfigComponent } from './components';
import { rootReducer, initialState, InvalidFieldsSelector } from './store';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgrxFormsModule,
    StoreModule.forRoot(rootReducer, { initialState }),
    StoreDevtoolsModule.instrument(),
  ],
  declarations: [RootComponent, PersonComponent, ConfigComponent],
  providers: [InvalidFieldsSelector],
  bootstrap: [RootComponent],
})
export class AppModule {}
