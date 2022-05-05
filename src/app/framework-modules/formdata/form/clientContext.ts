/**
 * acts as a cache from session storage. designed keeping in mind that
 * most session-scoped data is stored-once-accessed-often
 */
import { Injectable } from "@angular/core";
import { Vo } from "./types";
import { UserContextVo } from '../gen/userContextForm';
import { RouterService } from 'src/app/services/routerService';
const USER = "_user";
const TOKEN = "_token";
const INST = "_instId";
const SEASON = "_currentSeasonId";

const ALL_PAGES = [
  { name: "D01", value: "D01" },
  { name: "D02", value: "D02" },
  { name: "D03", value: "D03" },
  { name: "D04", value: "D04" },
  { name: "D05", value: "D05" },
  { name: "D06", value: "D06" },
  { name: "D07", value: "D07" },
  { name: "D08", value: "D08" },
  { name: "D09", value: "D09" },
  { name: "D10", value: "D10" },
  { name: "D11", value: "D11" },
  { name: "D12", value: "D12" },
  { name: "D13", value: "D13" },
  { name: "D14", value: "D14" },
  { name: "D15", value: "D15" },
  { name: "D16", value: "D16" },
  { name: "D17", value: "D17" },
  { name: "D18", value: "D18" },
  { name: "D19", value: "D19" },
  { name: "D20", value: "D20" },
  { name: "D21", value: "D21" },
  { name: "D22", value: "D22" },
  { name: "D23", value: "D23" },
  { name: "D24", value: "D24" },
  { name: "D25", value: "D25" },
  { name: "D26", value: "D26" },
  { name: "D27", value: "D27" },
  { name: "D28", value: "D28" },
  { name: "D29", value: "D29" },
  { name: "D30", value: "D30" },
  { name: "D31", value: "D31" },
  { name: "D32", value: "D32" },
  { name: "D33", value: "D33" },
  { name: "D34", value: "D34" },
  { name: "D35", value: "D35" },
  { name: "D36", value: "D36" },
  { name: "D37", value: "D37" },
  { name: "D38", value: "D38" },
  { name: "D39", value: "D39" },
  { name: "D40", value: "D40" },
  { name: "D41", value: "D41" },
  { name: "D42", value: "D42" },
  { name: "D43", value: "D43" },
  { name: "D44", value: "D44" },
  { name: "D45", value: "D45" },
  { name: "D46", value: "D46" },
  { name: "D47", value: "D47" },
  { name: "D48", value: "D48" },
  { name: "D49", value: "D49" },
  { name: "D50", value: "D50" },
  { name: "D51", value: "D51" },
  { name: "D52", value: "D52" },
  { name: "D53", value: "D53" },
  { name: "D54", value: "D54" },
  { name: "D55", value: "D55" },
  { name: "D56", value: "D56" },
  { name: "D57", value: "D57" },
  { name: "D58", value: "D58" },
  { name: "D59", value: "D59" },
  { name: "D60", value: "D60" },
  { name: "D61", value: "D61" },
  { name: "D62", value: "D62" },
  { name: "D63", value: "D63" },
  { name: "D64", value: "D64" },
  { name: "D65", value: "D65" },
  { name: "D66", value: "D66" },
  { name: "D67", value: "D67" },
  { name: "D68", value: "D68" },
  { name: "D69", value: "D69" },
  { name: "D70", value: "D70" },
  { name: "D71", value: "D71" },
  { name: "D72", value: "D72" },
  { name: "D73", value: "D73" },
  { name: "D74", value: "D74" },
  { name: "D75", value: "D75" },
  { name: "D76", value: "D76" },
  { name: "D77", value: "D77" },
  { name: "D78", value: "D78" },
  { name: "D79", value: "D79" },
  { name: "D80", value: "D80" },
  { name: "D101", value: "D101" },
  { name: "D102", value: "D102" },
  { name: "D103", value: "D103" },
  { name: "D104", value: "D104" },
  { name: "D105", value: "D105" },
  { name: "D106", value: "D106" },
  { name: "D107", value: "D107" },
  { name: "D108", value: "D108" },
  { name: "D109", value: "D109" },
  { name: "D110", value: "D110" },
  { name: "D35", value: "D35" },
  { name: "D35", value: "D35" },
  { name: "D35", value: "D35" },
  { name: "D35", value: "D35" },
  { name: "D35", value: "D35" },
  { name: "D35", value: "D35" },
  { name: "D35", value: "D35" },
  { name: "D35", value: "D35" },
  { name: "D35", value: "D35" },
  { name: "D35", value: "D35" },
  { name: "D80", value: "D80" },
  { name: "D81", value: "D81" },
  { name: "D82", value: "D82" },
  { name: "D83", value: "D83" },
  { name: "D84", value: "D84" },
  { name: "D85", value: "D85" },
  { name: "D86", value: "D86" },
  { name: "D87", value: "D87" },
  { name: "D88", value: "D88" },
  { name: "D89", value: "D89" },
  { name: "D111", value: "D111" },
  { name: "D112", value: "D112" },
  { name: "D120", value: "D120" },
  { name: "D112", value: "D112" },
  { name: "D113", value: "D113" },
  { name: "D121", value: "D121" },
  { name: "D122", value: "D122" },
  { name: "D130", value: "D130" },
  { name: "D131", value: "D131" },
  { name: "D132", value: "D132" },
  { name: "D133", value: "D133" },
  { name: "D134", value: "D134" },
  { name: "D135", value: "D135" },
  { name: "D136", value: "D136" },
  { name: "D137", value: "D137" },
  { name: "D138", value: "D138" },
  { name: "D139", value: "D139" },
  { name: "D140", value: "D140" },
  { name: "D141", value: "D141" },
  { name: "D142", value: "D142" },
  { name: "D143", value: "D143" },
  { name: "D144", value: "D144" },
  { name: "D145", value: "D145" },
  { name: "D146", value: "D146" },
  { name: "D147", value: "D147" },
  { name: "D148", value: "D148" },
  { name: "D149", value: "D149" },
  { name: "D150", value: "D150" },
  { name: "D151", value: "D151" },
  { name: "D152", value: "D152" },
  { name: "D153", value: "D153" },
  { name: "D154", value: "D154" },
  { name: "D155", value: "D155" },
  { name: "D156", value: "D156" },
  { name: "D157", value: "D157" },
  { name: "D158", value: "D158" },
  { name: "D159", value: "D159" },
  { name: "D160", value: "D160" },
  { name: "D161", value: "D161" },
  { name: "D162", value: "D162" },
  { name: "D163", value: "D163" },
  { name: "D164", value: "D164" },
  { name: "D165", value: "D165" },
  { name: "D166", value: "D166" },
  { name: "D167", value: "D167" },
  { name: "D168", value: "D168" },
  { name: "D169", value: "D169" },
  { name: "D170", value: "D170" },
  { name: "D171", value: "D171" },
  { name: "D172", value: "D172" },
  { name: "D173", value: "D173" },
  { name: "D174", value: "D174" },
  { name: "D175", value: "D175" },
  { name: "D176", value: "D176" },
]

const permittedScreensForStudents = ["D34","D35","D87","D89","D123","D138"]

const permittedScreens = ["D02", "D03", "D04", "D05", "D06", "D07", "D08", "D09", "D10",
  "D11", "D12", "D13", "D14",
  "D15", "D16", "D17", "D18", "D17", "D18", "D19", "D20", "D21", "D22", "D23",
  "D24", "D25", "D26", "D27", "D28", "D29", "D30", "D31",
  "D32", "D33", "D34", "D35", "D36", "D37", "D38", "D39", "D40", "D41", "D42", "D43", "D44",
  "D45", "D46", "D47", "D48", "D49", "D50", "D51", "D52", "D53", "D54", "D55", "D56", "D57", "D58",
  "D59", "D60", "D61", "D62", "D63", "D64", "D65", "D66", "D67", "D68", "D69", "D70", "D71", "D72", 
  "D73", "D74", "D75", "D76", "D77", "D78", "D79", "D80","D83","D84","D85","D86","D87","D88","D89",
  /* added for bhandi's sake */
  
  "D101", "D102", "D103", "D104", "D105", "D106", "D107", "D108", "D109", "D110", "D80", "D81", "D82", "D111","D112","D120","D113",
  "D122","D123",
  "D130","D131",
  "D132",
  "D133","D134",
  "D135","D136",
  "D137",
  "D138","D139","D140",
  "D141",
  "D142",
  "D143",
  "D144",
  "D145",
  "D146",
  "D147",
  "D148",
  "D149",
  "D150",
  "D151",
  "D152",
  "D153",
  "D154",
  "D155",
  "D156",
  "D157",
];

@Injectable({ providedIn: 'root' })

export class ClientContext {
  constructor(private rs: RouterService) {
  }
  private values = new Map<String, any>();
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
    this.setValue(INST, user.instituteId as number);
    this.setValue(SEASON, user.currentSeasonId as number);
    this.validPagesArray = [];
    if(user.userType == "Student"){
      this.validPagesArray = permittedScreensForStudents
    }
    else{
      const p = user.allowedPages;
      if (p) {
        this.validPagesArray = p.split(',');
      } else {
        ALL_PAGES.forEach(pair => { this.validPagesArray.push(pair.name); });
      }
    }
    /**
     * get allowed pages into an object
     */
    this.validPagesArray.forEach(pid => {
      this.validPages[pid.trim()] = true;
    });
  }
  /**
   *
   * @param data vo returned by the server on a successful login
   */
  public logout() {
    this.setValue(TOKEN, null);
    this.setValue(INST, null);
    this.setValue(USER, null);
    this.validPagesArray = [];
    this.validPages = [];
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
    // console.log('Session value of ' + key, s);
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
  * Gets the InstituteID for context
  */
  public getInstituteId(): number {
    return this.getValue(INST) as number;
  }

  /**
  * Gets the SeasonId for context
  */
   public setcurrentSeasonId(seasonId: number) {
    this.setValue(SEASON, seasonId);
  }

  /**
  * Gets the SeasonId for context
  */
   public getcurrentSeasonId(): number {
    return this.getValue(SEASON) as number;
  }

  /**
   *
   * @param inst instutututeId to which to switch the context to
   */
  public switchInstitute(inst: number): void {
    if (inst) {
      this.setValue(INST, inst);
    }
    // console.log("Can not switch to institute 0");
  }

  /**
   * Returns the array of permitted screens for a user.
   */
  public getPermittedScreens(): Array<string> {
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
