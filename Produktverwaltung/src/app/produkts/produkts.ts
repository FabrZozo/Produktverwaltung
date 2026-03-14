import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-produkts',
  standalone: false,
  templateUrl: './produkts.html',
  styleUrl: './produkts.css',
})
export class Produkts implements OnInit{
   public products:any;
   public keyword:string="";
   constructor() {
   }
   ngOnInit() {
      this.products=[
        {"id":1 , "name":"Computer", "price":4000},
        {"id":2 , "name":"kartofel", "price":5000},
        {"id":3 , "name":"karotten", "price":6000},
        {"id":4 , "name":"Reis", "price":6000},
      ];
   }

  deleteProducts(p: any) {
    let index =this.products.indexOf(p)
    this.products.splice(index,1)
  }

  search() {
    this.products = this.products.filter((p:any) =>
      p.name.includes(this.keyword)
    );
  }
}
