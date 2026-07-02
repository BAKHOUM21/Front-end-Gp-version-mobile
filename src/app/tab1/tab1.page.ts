import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader,IonButton,IonCardTitle,IonRow,IonCol,IonIcon, IonCardContent,IonToolbar,IonLabel,IonInput, IonCard,IonItem, IonContent } from '@ionic/angular/standalone';
import {HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader,IonRow,IonCol,IonIcon,FormsModule,CommonModule, IonToolbar,IonCard ,IonCardContent,IonInput, IonContent ],
})
export class Tab1Page {
    titre_annonce: any;
    annonces:any;
  constructor(private http: HttpClient) {
        this.liste_annonces();
    localStorage.setItem('id', '0');
    let apres_session = document.getElementById('apres_session');
    if (localStorage.getItem('id') == '1') {
      
    }
    else{
    
    }
  }
 url = 'http://51.210.43.90/api/home';
  liste_annonces() {
    this.http.get(this.url).subscribe((data: any) => {
      this.titre_annonce = data.message;
      this.annonces = data.annonces;
   
    });
  }
  connecter(){
    let role= document.getElementById('gp');
    role?.addEventListener('click',()=>{
      localStorage.setItem('role', 'gp');
    });
    let role_client= document.getElementById('admin');
    role_client?.addEventListener('click',()=>{
      localStorage.setItem('role', 'admin');
    }); 
    document.location.href = '/connexion';
  }
  det_annonces(id: any) {

    localStorage.setItem('id_ann', id);
    document.location.href = '/detail_annonces';
  }
}
