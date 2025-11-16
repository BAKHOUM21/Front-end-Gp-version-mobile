import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonCard, IonCardContent, IonButton, IonItem, IonInput, IonLabel, IonBackButton, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, IonCard, IonCardContent, IonButton, IonItem, IonLabel, IonInput, IonHeader, IonBackButton, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class InscriptionPage {
  InscriptionForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.InscriptionForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      role: "admin"
    });
  }
   inscrire() {
    const headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
      'accept': 'application/json'
    });

    this.http.post('http://localhost:8000/api/register', this.InscriptionForm.value, { headers }).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error)
    });
  }

}
