import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

const API_BASE_URL = 'http://localhost:51475/api/';
@Injectable()
export class BetterNflService {
  
    constructor(private http: Http) {

    }

    async Jogos(ano: number, tipo: string, semana: number): Promise<any> {
        let response = 
            await this.http.get(API_BASE_URL + 'jogos/resultados/' + ano + '/' + tipo + '/' + semana).toPromise();
        return response.json();
    }
}
