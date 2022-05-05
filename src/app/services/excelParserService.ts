import { Injectable } from "@angular/core";
import { Subscriber } from "rxjs";
import { Observable } from "rxjs";
import * as XLSX from 'xlsx';
@Injectable()
export class ExcelParserService {
  parseMarks(ev,sheetName:string): Observable<any> {
    var marksMap: string = "{";
    var jsonMap: {};
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.readAsBinaryString(file);
    // var obs = new Observable
    return new Observable<any>((observer: Subscriber<any>): void => {
      reader.onload = (event) => {
        const data = reader.result;
        workBook = XLSX.read(data, { type: 'binary', raw: true });
        jsonData = workBook.SheetNames.reduce((initial, name) => {
          const sheet = workBook.Sheets[name];
          initial[name] = XLSX.utils.sheet_to_json(sheet, {
            header: 1,
            range: { s: { c: 0, r: 5 }, e: { c: 3, r: 2000 } },
            blankrows: false
          });
          return initial;
        }, {});
        console.log(jsonData)
        /**
         * creating an object in the form of {'usn':marks,'usn':marks} from read data from excle
         * so creating a string then parsing to object.
         */
        jsonData[sheetName].forEach((element, index) => {
          marksMap = marksMap + '"' + element[0].toUpperCase() + '":"' + element[2]+'"';
          if (index != jsonData[sheetName].length - 1) {
            marksMap = marksMap + ",";
          }
        });
        marksMap = marksMap + "}";
        /**
         * jsonMap contains the parsed json object
         */
        console.log(marksMap);
        jsonMap = JSON.parse(marksMap);
        observer.next(jsonMap);
        observer.complete();
      }
    })
  }

  /**
   * Parses the downloaded excel book for bulk update
   * @param ev Excel file
   * @param sheetName name of the shhet to parse
   */
  parseBulkMarks(ev,sheetName:string): Observable<any> {
    var marksMap: string = "{";
    var jsonMap: {};
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.readAsBinaryString(file);
    // var obs = new Observable
    return new Observable<any>((observer: Subscriber<any>): void => {
      reader.onload = (event) => {
        const data = reader.result;
        workBook = XLSX.read(data, { type: 'binary', raw: true });
        jsonData = workBook.SheetNames.reduce((initial, name) => {
          const sheet = workBook.Sheets[name];
          initial[name] = XLSX.utils.sheet_to_json(sheet, {
            header: 1,
            range: { s: { c: 0, r: 5 }, e: { c: 10, r: 1000 } },
            blankrows: false
          });
          return initial;
        }, {});
        console.log(jsonData)
        /**
         * creating an object in the form of {'usn':marks,'usn':marks} from read data from excle
         * so creating a string then parsing to object.
         */
        jsonData[sheetName].forEach((element, index) => {
          marksMap = marksMap + '"' + element[0].toUpperCase() + '":{';
          for(var i=2;i<element.length;i++){
            marksMap+= '"c_' + (i-1) + '":"' + element[i] + '"'
            i != element.length-1 ? marksMap += "," : marksMap += "}";
          }
          if (index != jsonData[sheetName].length - 1) {
            marksMap = marksMap + ",";
          }
        });
        marksMap = marksMap + "}";
        /**
         * jsonMap contains the parsed json object
         */
        console.log(marksMap);
        jsonMap = JSON.parse(marksMap);
        observer.next(jsonMap);
        observer.complete();
      }
    })
  }


  /**
   * Parses the downloaded excel book for bulk update
   * @param ev Excel file
   * @param sheetName name of the shhet to parse
   */
  parseBulkPDC(ev,sheetName:string): Observable<any> {
    var marksMap: string = "{";
    var jsonMap: {};
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.readAsBinaryString(file);
    // var obs = new Observable
    return new Observable<any>((observer: Subscriber<any>): void => {
      reader.onload = (event) => {
        const data = reader.result;
        workBook = XLSX.read(data, { type: 'binary', raw: true });
        console.log(workBook.SheetNames);
        var sheet = workBook.Sheets[workBook.SheetNames[0]];
        var range = XLSX.utils.decode_range(sheet['!ref']);
        var C, R = range.s.r;
        console.log(C,R);


        jsonData = workBook.SheetNames.reduce((initial, name) => {
          const sheet = workBook.Sheets[name];
          initial[name] = XLSX.utils.sheet_to_json(sheet, {
            header: 1,
            range: { s: { c: 0, r: 1 }, e: { c: 6, r: 2000 } },
            blankrows: false
          });
          return initial;
        }, {});
        console.log(jsonData)
       
        observer.next(jsonData);
        observer.complete();
      }
    })
  }
  /**
   * Parses the downloaded excel book for attendance update
   * @param ev excelfile
   * @param sheetName Name of the sheet to parse
   */
  parseAttendance(ev,sheetName:string): Observable<any> {
    var marksMap: string = "{";
    var jsonMap: {};
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.readAsBinaryString(file);
    // var obs = new Observable
    return new Observable<any>((observer: Subscriber<any>): void => {
      reader.onload = (event) => {
        const data = reader.result;
        workBook = XLSX.read(data, { type: 'binary', raw: true });
        jsonData = workBook.SheetNames.reduce((initial, name) => {
          const sheet = workBook.Sheets[name];
          initial[name] = XLSX.utils.sheet_to_json(sheet, {
            header: 1,
            range: { s: { c: 0, r: 5 }, e: { c: 4, r: 600 } },
            blankrows: false
          });
          return initial;
        }, {});
        console.log(jsonData)
        /**
         * creating an object in the form of {'usn':marks,'usn':marks} from read data from excle
         * so creating a string then parsing to object.
         */
        jsonData[sheetName].forEach((element, index) => {
          marksMap = marksMap + '"' + element[0].toUpperCase() + '":{"total":"' + element[2]+'","attended":"' + element[3]+'"}';
          if (index != jsonData[sheetName].length - 1) {
            marksMap = marksMap + ",";
          }
        });
        marksMap = marksMap + "}";
        /**
         * jsonMap contains the parsed json object
         */
        console.log(marksMap);
        jsonMap = JSON.parse(marksMap);
        observer.next(jsonMap);
        observer.complete();
      }
    })
  }

  /**
   * Parses the downloaded excel book for attendance update
   * @param ev excelfile
   * @param sheetName Name of the sheet to parse
   */
   parseUSN(ev,sheetName:string): Observable<any> {
    var usnMap: string = "{";
    var jsonMap: {};
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.readAsBinaryString(file);
    // var obs = new Observable
    return new Observable<any>((observer: Subscriber<any>): void => {
      reader.onload = (event) => {
        const data = reader.result;
        workBook = XLSX.read(data, { type: 'binary', raw: true });
        jsonData = workBook.SheetNames.reduce((initial, name) => {
          const sheet = workBook.Sheets[name];
          initial[name] = XLSX.utils.sheet_to_json(sheet, {
            header: 1,
            range: { s: { c: 0, r: 5 }, e: { c: 4, r: 600 } },
            blankrows: false
          });
          return initial;
        }, {});
        console.log(jsonData)
        /**
         * creating an object in the form of {'usn':marks,'usn':marks} from read data from excle
         * so creating a string then parsing to object.
         */
        jsonData[sheetName].forEach((element, index) => {
          usnMap = usnMap + '"' + element[0].toUpperCase() + '":true';
          if (index != jsonData[sheetName].length - 1) {
            usnMap = usnMap + ",";
          }
        });
        usnMap = usnMap + "}";
        /**
         * jsonMap contains the parsed json object
         */
        console.log(usnMap);
        jsonMap = JSON.parse(usnMap);
        observer.next(jsonMap);
        observer.complete();
      }
    })
  }
}