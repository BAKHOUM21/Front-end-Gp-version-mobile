import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { IonContent, IonCard, IonCardContent, IonButton, IonItem, IonInput, IonLabel, IonBackButton, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
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
  imports: [IonContent, IonCard, IonCardContent, IonButton, IonItem, IonLabel, IonInput, IonHeader, IonBackButton, IonTitle, IonToolbar, FormsModule, ReactiveFormsModule]
})

export class ConnexionPage {
  Headers: any;

  connexionForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.connexionForm = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });


  }
  //   conn=document.getElementById('conn');
  // this.conn?.addEventListener('click',()=>{
  //   let role_gp=document.getElementById('role_gp');
  //   role_gp!.innerHTML=localStorage.getItem('role')!;

  // }
//);
  connexion() {
    const url="http://51.210.43.90/api/login";
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('tokenIns')}`
      });
    this.http.post(url, this.connexionForm.value, { headers }).subscribe((response: any) => {
        if (response.access_token!=undefined) {
          sessionStorage.setItem('token', response.access_token);
          document.location.href="./"
        }
    });
  }
  // La connexion passe avec succes!
 
}
