import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { WishService } from '../../../services/wish-list/wish.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishcontent',
  templateUrl: './wishcontent.component.html',
  styleUrls: ['./wishcontent.component.css']
})
export class WishcontentComponent implements OnInit {

  wishProd: Product[] = [];
  wishNoStock: Product[] = [];

  constructor( private wishServ: WishService, private router: Router ) { }

  ngOnInit( ): void {

    this.getWish();

  }

  getWish () {

    this.wishServ.getProductsWish()
      .subscribe(data => {
        if( data.withStock === undefined ){
            console.log("Sin datos");

        } else {

          data.withStock.forEach( (e:any) => {
            this.wishProd.push(e.idprod);
          });
        }
        if( data.withoutStock.length > 0 ) {

          data.withoutStock.forEach( (e:any) => {
            this.wishNoStock.push(e.idprod);
          });
          console.log(this.wishNoStock);

          this.wishNoStock.forEach(e => {
              Swal.fire({
                title: `El producto ${ e.name }, ya no se encuentra en stock`,
                toast: true,
                timer: 5000,
                background: '#00D8E3',
                showConfirmButton: false,
                color: 'white',
                position: 'top-end'
              });


          });



        }


      });
  }


  delProd( idprod: any ) {

    Swal.fire({
      title: '¿Estás seguro de esta acción?',
      text: "El producto ya no aparecerá en tu lista de deseos.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.wishServ.deleteProducts( idprod )
        .subscribe( data => {
          Swal.fire({
            icon: 'success',
            title: '¡Eliminado!',
            text: 'Puedes volverlo a añadir cuando lo desees.',
            confirmButtonText: '¡Vale!'
          }).then((result2) => {
            if(result2.isConfirmed){
              console.log("entróaqui");
              this.getWish()
            }
          });

      }, error => {
        console.log(error);
      } )

      }else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    });




  }


}
