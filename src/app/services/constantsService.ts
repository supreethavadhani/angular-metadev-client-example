import { Injectable } from "@angular/core";
import { CustomerForm } from "../framework-modules/formdata/gen/customerForm";
import { FormData, ServiceAgent } from "mv-core";
const   allServices = {
  "customerForm":CustomerForm
}
@Injectable()
export class ConstantsService {
  constructor(){
  }
  public static ROUTE_NON_SESSION = "non-session";
  public static ROUTE_SESSION = "session";

  public static getFormFd(formName:String,sa:ServiceAgent) {
    let form = allServices[formName].getInstance()
    let fd = new FormData(form,sa)
    return fd
  }
}