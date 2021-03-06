import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { AskForFoodComponent } from './components/ask-for-food/ask-for-food.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderService } from './services/order.service';

declare var Hammer: any;

export class MyHammerConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
      touchAction: "pan-y"
    });
    return mc;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AskForFoodComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'absolem'),
    AngularFirestoreModule,
    AppRoutingModule
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    OrderService,
    {
      // hammer instantion with custom config
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
