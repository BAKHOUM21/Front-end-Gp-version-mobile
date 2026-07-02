import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {IonHeader,IonTitle,IonToolbar,IonContent,IonBackButton} from '@ionic/angular/standalone';
@Component({
  selector: 'app-detail-annonces',
  templateUrl: './detail-annonces.component.html',
  styleUrls: ['./detail-annonces.component.scss'],
  imports:[IonHeader,IonTitle,IonToolbar,IonContent,IonBackButton]
})
export class DetailAnnoncesComponent {
  annonce= [];
  constructor(private http: HttpClient) {
    let id_ann = localStorage.getItem('id_ann');
    let headers=new HttpHeaders({
      'Content-Type': 'application/json',
      "Autorization":`Bearer ${localStorage.getItem('token')}`
    });
    this.http.get('http://51.210.43.90/api/annonce/' + id_ann,{headers}).subscribe((data: any) => {
       this.annonce = data;
       console.log(data);
    });
   }


}
