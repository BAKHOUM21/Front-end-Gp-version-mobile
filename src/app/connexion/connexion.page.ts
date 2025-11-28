import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { IonContent, IonIcon, IonCard, IonCardContent, IonButton, IonItem, IonInput, IonLabel, IonBackButton, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable(
  {
    providedIn: 'root'
  }
)
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
  standalone: true,
  imports: [IonContent, IonCard, IonCardContent, IonButton, IonItem, IonLabel, IonInput, IonHeader, IonBackButton, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})

export class ConnexionPage {
  Headers: any;

  connexionForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.connexionForm = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });


  }
  connexion() {
    const url='http://localhost:8000/api/login';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' 
      });
    this.http.post(url, this.connexionForm.value, { headers }).subscribe((response: any) => {
        console.log(response.access_token);
        if (response.access_token!=undefined) {
          document.location.href="/home";
        }
    });
  }
}
