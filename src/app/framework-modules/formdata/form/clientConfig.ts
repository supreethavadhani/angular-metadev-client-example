import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export class ClientConfig {
    // url = 'https://java-prod-bmsc-us.herokuapp.com/a';
    // url = 'https://java-staging.herokuapp.com/a';
    url = 'http://localhost:8080/a';
}