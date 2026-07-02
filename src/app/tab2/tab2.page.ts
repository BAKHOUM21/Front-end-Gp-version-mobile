import { Component } from '@angular/core';
import { IonHeader,IonBackButton, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {IonCard,IonCardContent,IonCardTitle,IonCardHeader} from '@ionic/angular/standalone';
import {CommonModule} from '@angular/common';
import {IonImg} from '@ionic/angular/standalone';
import {IonRow,IonCol} from '@ionic/angular/standalone';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader,IonRow,IonCol, IonToolbar,IonBackButton, IonTitle, IonContent,IonCard,IonCardContent,IonCardHeader,CommonModule,IonImg]
})
export class Tab2Page {
 items = [
  { message: 'Bonjour Message 1',url: '../../assets/icon/favicon.png'},
  { message: 'Bonjour Message 2',url: '../../assets/shapes.svg'},
  { message: 'Bonjour Message 3',url: '../../assets/icon/favicon.png'},
];
  constructor() {}

}
