import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonCard,IonCardContent,IonCardTitle,IonCardHeader} from '@ionic/angular/standalone';
import { IonContent,IonBackButton, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonBackButton, CommonModule, FormsModule, IonCard, IonCardContent, IonCardTitle, IonCardHeader]
})
export class Tab5Page implements OnInit {
profile = {
  nom: 'Samba Fall',
  role: 'Gp',
  adresse: 'Dakar, Senegal',
  nationalite: 'Senegalais',
  telephone: '+221 77 123 4567',
};
  constructor() { }

  ngOnInit() {
  }

}
