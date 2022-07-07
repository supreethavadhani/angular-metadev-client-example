/**
 * acts as a cache from session storage. designed keeping in mind that
 * most session-scoped data is stored-once-accessed-often
 */
import {
  Injectable
} from "@angular/core";
import {
  UserContextVo
} from '../gen/userContextForm';
import {
  RouterService
} from 'src/app/services/routerService';
const USER = "_user";
const TOKEN = "_token";


@Injectable({
  providedIn: 'root'
})

export class ClientContext {
  constructor(private rs: RouterService) {}
  private values = new Map < string, any > ();
  private validPages = {};
  private validPagesArray = [];

  public setToken(token: string) {
    this.setValue(TOKEN, token);
  }

  /**
   *
   * @param data vo returned by the server on a successful login
   */
  public login(user: UserContextVo) {
    this.setValue(USER, user);
    this.validPagesArray = [];
  }
  /**
   *
   * @param data vo returned by the server on a successful login
   */
  public logout() {
    this.setValue(TOKEN, null);
    this.setValue(USER, null);
    this.rs.openNonSession();
  }
  /**
   * any data that  is to be saved as part of session.
   * This will survive page reloads, but not browser closure
   *
   * @param key
   * @param value
   */
  public setValue(key: string, value: any): void {
    this.values.set(key, value);
    if (value == null) {
      sessionStorage.removeItem(key);
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }

  /**
   * value of a field that is session scoped
   * @param key
   */
  public getValue(key: string): any {
    let value = this.values.get(key);
    if (value) {
      return value;
    }
    const s = sessionStorage.getItem(key);
    if (!s) {
      return s;
    }
    value = s;
    this.values.set(key, value);
    return value;
  }

  /**
   * details of logged-in user.
   */
  public getToken(): string {
    return this.getValue(TOKEN) as string;
  }

  /**
   * details of logged-in user.
   */
  public getUser(): UserContextVo {
    return this.getValue(USER) as UserContextVo;
  }

  /**
   * Returns the array of permitted screens for a user.
   */
  public getPermittedScreens(): Array < string > {
    return this.validPagesArray;
  }

  /**
   * is the logged in user allowed to use this page?
   * @param pageId 
   */
  public isPageValid(pageId: string): boolean {
    return this.validPages[pageId];
  }
}