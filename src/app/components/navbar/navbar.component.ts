import { Component, OnInit } from '@angular/core';
import { NavBarModel } from 'src/app/models/navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  listNavbar = new Array<NavBarModel>();

  ngOnInit(): void {
    this.listNavbar = [
      { name: 'Home', idRef: 'home' },
      { name: 'Sobre', idRef: 'about' },
      { name: 'Habilidades', idRef: 'skills' },
      { name: 'Projetos', idRef: 'projects' },
      { name: 'Contato', idRef: 'contact' },
    ];
  }
}
