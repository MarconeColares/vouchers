import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Voucher } from './models/voucher';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  public httpOptions: object;

  constructor(public http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
  }

  getVouchers(): Observable<Voucher[]> {
    return this.http.get<Voucher[]>('http://localhost:3000/vouchers', this.httpOptions);
  }

  createVoucher(voucher: Voucher): Observable<Voucher> {
    return this.http.post<Voucher>('localhost:3000/vouchers', voucher, this.httpOptions);
  }

  updateVoucher(voucher: Voucher): Observable<Voucher> {
    return this.http.put<Voucher>(`localhost:3000/vouchers/${voucher.codigo}`, voucher, this.httpOptions);
  }

  deleteVoucher(codigo: number): Observable<Voucher> {
    return this.http.delete<Voucher>(`localhost:3000/api/voucher/${codigo}`, this.httpOptions);
  }

}
