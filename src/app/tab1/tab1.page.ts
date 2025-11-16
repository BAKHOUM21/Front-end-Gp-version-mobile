import { Component } from '@angular/core';
import { IonHeader,IonButton,IonRow,IonCol,IonIcon, IonCardContent,IonToolbar,IonLabel,IonInput, IonCard,IonItem, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader,IonButton,IonRow,IonCol,IonIcon, IonToolbar,IonCard ,IonCardContent,IonInput, IonItem,IonLabel, IonContent ],
})
export class Tab1Page {
    
  constructor() {
        
    localStorage.setItem('id', '0');
    let apres_session = document.getElementById('apres_session');
    if (localStorage.getItem('id') == '1') {
      // console.log(apres_session);
    }
    else{
      // console.log("pas du tout");
    }
  }
  connecter(){
    document.location.href = '/connexion';
  }
}
