import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

const API_BASE_URL = 'http://192.168.0.19:8080/api/'; //Kaique
// const API_BASE_URL = 'http://192.168.30.105:8080/api/'; //Gabriel
//const API_BASE_URL = 'http://172.20.10.2:8080/api/';
@Injectable()
export class BetterNflService {

    constructor(private http: Http) {

    }

    async Jogos(ano: number, semana: number) {
        let response = await this.http.get(API_BASE_URL + 'jogos/resultados/' + ano + '/' + semana).toPromise();

        return response.json();
    }

    TimePorId(id_time: number) {
        return new Promise((resolve, reject) => {
            this.http.get(API_BASE_URL + 'times/' + id_time)
                .subscribe(
                    (result: any) => {
                        resolve(result.json());
                    },
                    (error) => {
                        reject(error);
                    });
        });
    }

    async Times() {
        let response = await this.http.get(API_BASE_URL + 'times').toPromise();

        return response.json();
    }

    login(username: string, password: string) {
        return new Promise((resolve, reject) => {
            var data = {
                username: username,
                password: password
            };
            this.http.post(API_BASE_URL + 'login', data)
                .subscribe(
                    (result: any) => {
                        resolve(result.json());
                    },
                    (error) => {
                        reject(error);
                    });
        });
    }

    async cadastraUsuario(usuario: any) {
        let response = await this.http.post(API_BASE_URL + 'usuarios/SalvarOuAtualizar', usuario).toPromise();

        return response;
    }

    BuscaUsuario(username: string) {
        return new Promise((resolve, reject) => {
            this.http.get(API_BASE_URL + 'usuarios/' + username)
                .subscribe(
                    (result: any) => {
                        resolve(result.json());
                    },
                    (error) => {
                        reject(error);
                    });
        });
    }

    async BuscaTime(id_time: number) {
        let response = await this.http.get(API_BASE_URL + 'times/' + id_time).toPromise();

        return response.json();
    }

    async Historico(idTime1: number, idTime2: number) {
        let response = await this.http.get(API_BASE_URL + 'jogos/historico/' + idTime1 + '/' + idTime2).toPromise();

        return response.json();
    }

    async Ranking(ano: number, idTime: number) {
        let response = await this.http.get(API_BASE_URL + 'times/ranking/' + ano + '/' + idTime).toPromise();

        return response.json();
    }
}
