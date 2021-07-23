import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product


  constructor(private ProductService: ProductService, private router: Router) { }

  ngOnInit(): void {
    const id = '1'
    this.ProductService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {
    // this.ProductService.delete(this.product.id).subscribe(() => {
    //   this.ProductService.showMenssage("Produto exclido com sucesso!")
    //   this.router.navigate(["/products"])
    // })
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }

}
