import { Injectable } from '@angular/core';
import { TabsPage } from '../../pages/tabs/tabs';
import { LoginPage } from '../../pages/login/login';

let config_key_name = "betterNFL"

@Injectable()
export class ConfigProvider {
  static SignOut(): any {
    throw new Error("Method not implemented.");
  }
  private config = {
    logado: false,
    name: "",
    username: "",
    password: ""
  }
  
  constructor() {
  }

  //Recupera dados do localstorage
  getConfigData(): any{
    return localStorage.getItem(config_key_name);
  }

  //Grava dados do localstorage, "?" são variaveis opcionais
  setConfigData(logado?: boolean, name?:string, username?:string, password?:string){
    let config = {
      logado: false,
      name: "",
      username: "",
      password: "",
    }

    if (logado){
      config.logado = logado;
    }

    if (name){
      config.name = name;
    }
    if (username){
      config.username = username;
    }

    if (password){
      config.password = password;
    }

    localStorage.setItem(config_key_name, JSON.stringify(config));
  }

  signIn(username:string, password:string){
    if (username == "abc" && password == "123")
      this.setConfigData(true, username, username, password)
    else 
    this.setConfigData(false, "", "", "")
  }

  public SignOut(){
    localStorage.clear;
  }
}
