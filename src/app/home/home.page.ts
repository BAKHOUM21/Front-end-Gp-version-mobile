import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonBackButton, IonTitle,IonCard, IonToolbar,IonCardContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { TabsPage } from '../tabs/tabs.page';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonBackButton, IonToolbar, CommonModule, FormsModule, ExploreContainerComponent, IonCard,IonCardContent]
})
export class HomePage {
  titre_annonce: any;
  annonces=[];
  constructor(private http: HttpClient) {

    this.liste_annonces();

  }
  url = 'http://51.210.43.90/api/home';
  liste_annonces() {
    this.http.get(this.url).subscribe((data: any) => {
      this.titre_annonce = data.message;
      this.annonces = data.annonces;
    });
  }
}
