import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardContent, IonButton, IonItem, IonInput, IonLabel, IonBackButton, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
  standalone: true,
  imports: [IonContent, IonCard, IonCardContent, IonButton, IonItem, IonLabel, IonInput, IonHeader, IonBackButton, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class InscriptionPage {
  InscriptionForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.InscriptionForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      role: "gp"
    });
  }
  inscrire() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = 'http://localhost:8000/api/register';
    this.http.post(url, this.InscriptionForm.value).subscribe((response: any) => {
      console.log(response.token);
      sessionStorage.setItem('tokenIns', response.token);
    }
    )
  }

}
