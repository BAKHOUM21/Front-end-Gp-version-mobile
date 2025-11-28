import { Component } from '@angular/core';
import { IonHeader,IonButton,IonRow,IonCol,IonIcon, IonCardContent,IonToolbar,IonLabel,IonInput, IonCard,IonItem, IonContent } from '@ionic/angular/standalone';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader,IonRow,IonCol,IonIcon, IonToolbar,IonCard ,IonCardContent,IonInput, IonContent ],
})
export class Tab1Page {
    
  constructor(private http: HttpClient) {
        this.liste_annonces();
    localStorage.setItem('id', '0');
    let apres_session = document.getElementById('apres_session');
    if (localStorage.getItem('id') == '1') {
      // console.log(apres_session);
    }
    else{
      // console.log("pas du tout");
    }
  }
  liste_annonces(){
    this.http.get('http://localhost:8000/api/home').subscribe((data:any) => {
      console.log(data);
    });
  }
  connecter(){
    document.location.href = '/connexion';
  }
}
