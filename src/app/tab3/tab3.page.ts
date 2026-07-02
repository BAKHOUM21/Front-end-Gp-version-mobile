import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IonHeader,IonBackButton, IonToolbar,IonTitle, IonCard,IonButton,IonInput,IonItem,IonLabel , IonContent } from '@ionic/angular/standalone';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone:true,
  imports: [IonHeader, IonTitle,IonBackButton, IonButton, IonToolbar, IonCard ,IonInput, IonItem,IonLabel, IonContent,ReactiveFormsModule ],
})
export class Tab3Page {
  ajoutAnnonce!: FormGroup;

  constructor(private formBuilder: FormBuilder,public http: HttpClient) {
    this.ajoutAnnonce = this.formBuilder.group({
      kilos_disponibles: new FormControl('', [Validators.required]),
      date_depart: new FormControl('', [Validators.required]),
      date_arrivee: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      prix_du_kilo: new FormControl('', [Validators.required]),
      prix_par_piece: new FormControl('', [Validators.required]),
      origin: new FormControl('', [Validators.required]),
      destination: new FormControl('', [Validators.required]),
      
    });
  }

  onSubmit() {
    if (this.ajoutAnnonce.valid) {
     const headers= new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      });
      this.http.post('http://51.210.43.90/api/annonces', this.ajoutAnnonce.value, { headers }).subscribe(
        response => {
          document.location.href="./";
        },
        error => {
          document.write('Erreur lors de l\'ajout de l\'annonce. Veuillez réessayer.'); 
        }
      );
    }
  } 
  
}
