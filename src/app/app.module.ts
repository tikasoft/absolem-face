import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { AskForFoodComponent } from './components/ask-for-food/ask-for-food.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AskForFoodComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
