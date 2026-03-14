import { Component, signal } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  public current:any;
  protected readonly title = signal('Produktverwaltung');
  constructor(private router: Router) {
  }

  gotoHome() {
    this.current="home"
    this.router.navigateByUrl("/home")

  }

  gotoprodukts() {
    this.current="produkts"
    this.router.navigateByUrl("/produkts")
  }
}
