import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  professions: string[] = ['Desenvolvedor FrontEnd', 'Desing Ux', 'Programador'];
  currentProfession = -1;
  professionInterval: any;

  ngOnInit() {
    this.setProfession();
  }

  setProfession() {
    this.professionInterval = setInterval(() => {
      this.currentProfession = (this.currentProfession + 1) % this.professions.length;
    }, 3000);
  }

  resetProfession() {
    clearInterval(this.professionInterval);
    this.currentProfession = -1;
    this.setProfession();
  }
}
