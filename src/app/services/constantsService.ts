import { Injectable } from "@angular/core";
import { CustomerForm } from "../framework-modules/formdata/gen/customerForm";
import { FormData, ServiceAgent } from "mv-core";
@Injectable()
export class ConstantsService {
  constructor(){
  }
  public static ROUTE_NON_SESSION = "non-session";
  public static ROUTE_SESSION = "session";
}