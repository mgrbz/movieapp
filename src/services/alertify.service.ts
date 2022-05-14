import { Injectable } from "@angular/core";


declare let alertify: any;

@Injectable()
export class AlertifyService{
  constructor(){}

  success(value: string){
    alertify.success(value);
  }

  error(value: string){
    alertify.error(value);
  }

  warning(value: string){
    alertify.warning(value)
  }
}



