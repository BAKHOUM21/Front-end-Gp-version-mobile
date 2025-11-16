import { Component } from '@angular/core';
import { IonHeader,IonBackButton, IonToolbar,IonTitle, IonCard,IonButton,IonInput,IonItem,IonLabel , IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonTitle,IonBackButton, IonButton, IonToolbar, IonCard ,IonInput, IonItem,IonLabel, IonContent ],
})
export class Tab3Page {
  constructor() {}
}
