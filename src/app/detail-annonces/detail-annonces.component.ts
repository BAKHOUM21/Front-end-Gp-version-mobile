import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {IonHeader,IonTitle,IonToolbar,IonContent,IonBackButton,IonCardContent,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCard} from '@ionic/angular/standalone';
@Component({
  selector: 'app-detail-annonces',
  templateUrl: './detail-annonces.component.html',
  styleUrls: ['./detail-annonces.component.scss'],
  imports:[IonHeader,IonTitle,IonToolbar,IonContent,IonBackButton,IonCardContent,IonCardHeader,IonCard]
})
export class DetailAnnoncesComponent {
  annonce!: any;
  constructor(private http: HttpClient) {
    let id_ann = localStorage.getItem('id_ann');
   const headers= new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      });
    this.http.get('http://51.210.43.90/api/annonce/' + id_ann, { headers }).subscribe((data: any) => {
       this.annonce=data.annonce ;
       console.log(this.annonce);
    });
   }


}
