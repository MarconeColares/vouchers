import { Component, OnInit } from '@angular/core';

import { VoucherService } from './shared/voucher.service';

import { Voucher } from './shared/models/voucher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public voucher: Voucher;
  public vouchers: Voucher[];

  constructor(public _data: VoucherService) {
    this.voucher = new Voucher();
    this.vouchers = [];
  }

  ngOnInit() {
    this._data.getVouchers().subscribe(data => {
      this.vouchers = data;
      console.log(this.vouchers);
    });
  }

  editar(): void { }

  excluir(): void { }
}
