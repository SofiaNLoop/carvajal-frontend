import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';

import { CatalogueService } from 'src/app/services/catalogue/catalogue.service';
import { WishService } from '../../../services/wish-list/wish.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public totalProducts: number = 0;
  public listProducts: Product[] = [];
  public desde: number = 0;

  constructor( private catalogueServ : CatalogueService,
    private wishServ: WishService ) { }

  ngOnInit(): void {

    this.getAllProd();

  }

  getAllProd() {
    this.catalogueServ.getAllProducts( this.desde )
    .subscribe( ({ total, products }) => {
      this.totalProducts = total;
      this.listProducts = products;
      console.log(this.listProducts);
    })
  }


  changePage( value: number ) {

    this.desde += value;

    if( this.desde < 0 ) {
      this.desde = 0;
    } else if( this.desde >= this.totalProducts ) {
      this.desde -= value;
    }

    this.getAllProd();

  }

  addWish ( idprod: any ) {
    localStorage.setItem("id_prod", idprod);
    const idproduc = localStorage.getItem("id_prod");

    this.wishServ.postProducts( idproduc )
    .subscribe( data => {
      Swal.fire({
        icon: 'success',
        title: '¡Se ha añadido a tu lista de deseos!',
      })
      console.log(data);
    }, error => {

      Swal.fire({
        icon: 'error',
        title: `${ error.error.msg }`,
      })
      console.log(error);
    } );


  }

}
