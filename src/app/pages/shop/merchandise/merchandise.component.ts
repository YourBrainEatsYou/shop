import { AbstractShopApiService } from "@/api/abstract-shop-api.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.scss']
})
export class MerchandiseComponent implements OnInit {

  constructor(
    private shopApiService: AbstractShopApiService
  ) {
  }

  ngOnInit(): void {
    this.shopApiService.getMerchandise().subscribe((payload) => console.log(payload));
  }

}
