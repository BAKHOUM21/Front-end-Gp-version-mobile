import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpInterceptor } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonHeader, IonBackButton, IonToolbar, IonTitle, IonCard, IonButton, IonInput, IonItem, IonLabel, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonTitle, IonBackButton, IonButton, IonToolbar, IonCard, IonInput, IonItem, IonLabel, IonContent, CommonModule, FormsModule, ReactiveFormsModule],
})

export class Tab3Page implements OnInit {

  ajoutAnnonces: FormGroup;
  constructor(public fb: FormBuilder, private http: HttpClient) {

    this.ajoutAnnonces = this.fb.group(
      {
        origine: new FormControl('', [Validators.required]),
        destination: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        kilos_disponibles: new FormControl('', [Validators.required]),
        prix_du_kilo: new FormControl('', [Validators.required]),
        date_depart: new FormControl('', [Validators.required]),
        date_arrivee: new FormControl('', [Validators.required]),
      }
    );

  }
  ajout_annonces() {
    this.http.post('http://localhost:8000/api/annonces', this.ajoutAnnonces.value).subscribe(
      response => {
        console.log('Annonce ajoutée avec succès!', response);
      },
      error => {
        console.error("Voici l'erreur!", error);
      });
  }
  ngOnInit(): void {
   }
}
