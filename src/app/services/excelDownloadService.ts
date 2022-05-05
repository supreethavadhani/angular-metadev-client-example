import * as XLSX from 'xlsx';
import { Injectable } from '@angular/core';
declare var require: any
let jsPDF = require('jspdf');
require('jspdf-autotable');
require('jquery');
import 'jspdf-autotable';
import * as $ from 'jquery';
import * as _ from "lodash";
import { Vo } from '../framework-modules/formdata/form/types';
import * as Excel from "exceljs/dist/exceljs.min.js";
import * as ExcelProper from "exceljs";
import * as FileSaver from 'file-saver';
import * as PDF from 'jspdf';
import * as JsBarcode from 'jsbarcode';
import * as moment from 'moment';
import { TouchSequence } from 'selenium-webdriver';
import { headersToString } from 'selenium-webdriver/http';
import { JsPDFFontService } from './jsPdfFontService';
import { Roboto } from 'src/assets/fonts/Roboto/robotoBoldItallic.js';

let fs = require('fs');
const NONINTEGRATED_SUBJECT = {
  TABLE_HEADER_NAMES: ["", "SL No.", "USN", "Student Name", "Department", "First Test", "Second Test", "Third Test", "CIE Total", "Classes Held", "Classes Attended", "Attendance %", "Eligibility Status", "Is Condoned"],
  TABLE_ROWS: [
    { key: '', width: 10 },
    { key: 'sl', width: 15 },
    { key: 'usn', width: 30 },
    { key: 'name', width: 30 },
    { key: 'department', width: 25 },
    { key: 'test1', width: 20 },
    { key: 'test2', width: 20 },
    { key: 'test3', width: 20 },
    { key: 'test4', width: 20 },
    { key: 'test5', width: 20 },
    { key: 'cieMarks', width: 20 },
    { key: 'classesHeld', width: 25 },
    { key: 'classesAttended', width: 25 },
    { key: 'overallAttendance', width: 25 },
    { key: 'eligibility', width: 25 },
    { key: 'isCondoned', width: 17 },
  ],
  HEADER: [
    { loc: "C2", value: "B. M. S. COLLEGE OF ENGINEERING, BANGALORE-560 019\n(Autonomous Institute affiliated to VTU, Belagavi)", align: 'center', fontSize: 16, fontName: "Cambria" },
    { loc: "C5", value: "COURSEWISE CONSOLIDATED ATTENDANCE & CIE MARKS", align: "center", fontSize: 16, fontName: "Cambria" },
    { loc: "D7", value: "Course Code", align: "left", fontSize: 11, fontName: "Cambria" },
    { loc: "H7", value: "Course Title", align: "left", fontSize: 11, fontName: "Cambria" },
    { loc: "D9", value: "Semester", align: "left", fontSize: 11, fontName: "Cambria" },
    { loc: "G9", value: "Section", align: "left", fontSize: 11, fontName: "Cambria" }
  ],
  MERGES: [
    'C2:J4', 'C5:J5', "E7:F7", "I7,J7"
  ],
  HEADER_DATA: {
    "E7": "code",
    "I7": "name",
    "E9": "level",
    "H9": "section"
  },
  FOOTER: [
    { row: 0, value: ['', 'Staff In charge', '', '', '', '', '', '', 'Signature of HOD'], data: [{ col: 3, value: "staffName" }] },
    { row: 1, value: ['', 'Date', '', '', '', '', '', '', 'Date'] },
  ],
  FOOTER_MERGES: [
    { rowStart: 0, colStart: 3, rowEnd: 0, colEnd: 4 },
    { rowStart: 0, colStart: 10, rowEnd: 0, colEnd: 11 },
  ],
  EXPLICIT_DATA: [
  ]
}

const INTEGRATED_SUBJECT = {
  TABLE_HEADER_NAMES: ["", "SL No.", "USN", "Student Name", "Department", "Theory CIE ", "Theory Attendance ", "Lab CIE", "Lab Attendance", "Total Marks", "Eligibility Status", "Is Condoned"],
  TABLE_ROWS: [
    { key: '', width: 10 },
    { key: 'sl', width: 15 },
    { key: 'usn', width: 30 },
    { key: 'name', width: 30 },
    { key: 'department', width: 25 },
    { key: 'theoryCie', width: 20 },
    { key: 'theoryAttendance', width: 20 },
    { key: 'labCie', width: 20 },
    { key: 'labAttendance', width: 20 },
    { key: 'cieMarks', width: 25 },
    { key: 'eligibility', width: 25 },
    { key: 'isCondoned', width: 17 },
  ],
  HEADER: [
    { loc: "C2", value: "B. M. S. COLLEGE OF ENGINEERING, BANGALORE-560 019\n(Autonomous Institute affiliated to VTU, Belagavi)", align: 'center', fontSize: 16 },
    { loc: "C5", value: "COURSEWISE CONSOLIDATED ATTENDANCE & CIE MARKS", align: "center", fontSize: 16 },
    { loc: "C7", value: "Course Code", align: "left", fontSize: 11 },
    { loc: "G7", value: "Course Title", align: "left", fontSize: 11 },
    { loc: "C9", value: "Semester", align: "left", fontSize: 11 },
    { loc: "F9", value: "Section", align: "left", fontSize: 11 }
  ],
  MERGES: [
    'C2:I4', 'C5:I5', "E7:F7", "I7,J7"
  ],
  HEADER_DATA: {
    "D7": "code",
    "H7": "name",
    "D9": "level",
    "G9": "section"
  },
  FOOTER: [
    { row: 0, value: ['', 'Staff In charge', '', '', '', '', '', '', 'Signature of HOD'], data: [{ col: 3, value: "staffName" }] },
    { row: 1, value: ['', 'Date', '', '', '', '', '', '', 'Date'] },
  ],
  FOOTER_MERGES: [
    { rowStart: 0, colStart: 3, rowEnd: 0, colEnd: 4 },
    { rowStart: 0, colStart: 10, rowEnd: 0, colEnd: 11 },
  ],
  EXPLICIT_DATA: [
  ]
}

const E_NONINTEGRATED_SUBJECT = {
  TABLE_HEADER_NAMES: ["", "SL No.", "USN", "Student Name", "Department", "First Test", "Second Test", "Third Test", "CIE Total", "Classes Held", "Classes Attended", "Attendance %", "Eligibility Status"],
  TABLE_ROWS: [
    { key: '', width: 10 },
    { key: 'sl', width: 15 },
    { key: 'usn', width: 30 },
    { key: 'name', width: 30 },
    { key: 'department', width: 25 },
    { key: 'test1', width: 20 },
    { key: 'test2', width: 20 },
    { key: 'test3', width: 20 },
    { key: 'cieMarks', width: 20 },
    { key: 'classesHeld', width: 25 },
    { key: 'classesAttended', width: 25 },
    { key: 'overallAttendance', width: 25 },
    { key: 'eligibility', width: 25 },
  ],
  HEADER: [
    { loc: "C2", value: "B. M. S. COLLEGE OF ENGINEERING, BANGALORE-560 019\n(Autonomous Institute affiliated to VTU, Belagavi)", align: 'center', fontSize: 16 },
    { loc: "C5", value: "COURSEWISE CONSOLIDATED ATTENDANCE & CIE MARKS", align: "center", fontSize: 16 },
    { loc: "D7", value: "Course Code", align: "left", fontSize: 11 },
    { loc: "H7", value: "Course Title", align: "left", fontSize: 11 },
    { loc: "D9", value: "Semester", align: "left", fontSize: 11 },
    { loc: "G9", value: "Section", align: "left", fontSize: 11 }
  ],
  MERGES: [
    'C2:J4', 'C5:J5', "E7:F7", "I7,J7"
  ],
  HEADER_DATA: {
    "E7": "code",
    "I7": "name",
    "E9": "level",
    "H9": "section"
  },
  FOOTER: [
    { row: 0, value: ['', 'Staff In charge', '', '', '', '', '', '', 'Signature of HOD'], data: [{ col: 3, value: "staffName" }] },
    { row: 1, value: ['', 'Date', '', '', '', '', '', '', 'Date'] },
  ],
  FOOTER_MERGES: [
    { rowStart: 0, colStart: 3, rowEnd: 0, colEnd: 4 },
    { rowStart: 0, colStart: 10, rowEnd: 0, colEnd: 11 },
  ],
  EXPLICIT_DATA: [
  ]
}

const E_INTEGRATED_SUBJECT = {
  TABLE_HEADER_NAMES: ["", "SL No.", "USN", "Student Name", "Department", "Theory CIE ", "Theory Attendance ", "Lab CIE", "Lab Attendance", "Total Marks", "Eligibility Status"],
  TABLE_ROWS: [
    { key: '', width: 10 },
    { key: 'sl', width: 15 },
    { key: 'usn', width: 30 },
    { key: 'name', width: 30 },
    { key: 'department', width: 25 },
    { key: 'theoryCie', width: 20 },
    { key: 'theoryAttendance', width: 20 },
    { key: 'labCie', width: 20 },
    { key: 'labAttendance', width: 20 },
    { key: 'cieMarks', width: 25 },
    { key: 'eligibility', width: 25 }
  ],
  HEADER: [
    { loc: "C2", value: "B. M. S. COLLEGE OF ENGINEERING, BANGALORE-560 019\n(Autonomous Institute affiliated to VTU, Belagavi)", align: 'center', fontSize: 16 },
    { loc: "C5", value: "COURSEWISE CONSOLIDATED ATTENDANCE & CIE MARKS", align: "center", fontSize: 16 },
    { loc: "C7", value: "Course Code", align: "left", fontSize: 11 },
    { loc: "G7", value: "Course Title", align: "left", fontSize: 11 },
    { loc: "C9", value: "Semester", align: "left", fontSize: 11 },
    { loc: "F9", value: "Section", align: "left", fontSize: 11 }
  ],
  MERGES: [
    'C2:I4', 'C5:I5', "E7:F7", "I7,J7"
  ],
  HEADER_DATA: {
    "D7": "code",
    "H7": "name",
    "D9": "level",
    "G9": "section"
  },
  FOOTER: [
    { row: 0, value: ['', 'Staff In charge', '', '', '', '', '', '', 'Signature of HOD'], data: [{ col: 3, value: "staffName" }] },
    { row: 1, value: ['', 'Date', '', '', '', '', '', '', 'Date'] },
  ],
  FOOTER_MERGES: [
    { rowStart: 0, colStart: 3, rowEnd: 0, colEnd: 4 },
    { rowStart: 0, colStart: 10, rowEnd: 0, colEnd: 11 },
  ],
  EXPLICIT_DATA: [
  ]
}

@Injectable()
export class ExcelDownloadService {
  doc: any;
  blobType: string = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  columHeaders: any;

  logo = new Image();
  wm = new Image();
  sign = new Image();
  vtu_logo = new Image();
  principal_signature = new Image();

  student_slno: number = 0;

  constructor(private jsPDFFontService: JsPDFFontService) {
    this.logo.src = 'assets/images/bms.png';
    this.wm.src = 'assets/images/bms_wm.png';
    this.sign.src = 'assets/images/COE_SIGN.jpg';
    this.vtu_logo.src = 'assets/images/vtu_logo.jpg';
    this.principal_signature.src = 'assets/images/principal_signature.jpg'
  }

  /**
   * @param data the data to be downloaded; required format: {'SheetName':Arrray<{}>}
   * @param filename will be the name of the downloaded excel file
   * @param extra_data any extra data to be insterted.
   */
  downloadExcel(data, filename: string, extra_data?: {}) {
    const workBook = XLSX.utils.book_new();
    Object.keys(data).forEach(element => {
      var workSheet = XLSX.utils.json_to_sheet(data[element]);
      XLSX.utils.book_append_sheet(workBook, workSheet, element);
    });
    XLSX.writeFile(workBook, filename + '.xlsx');
  }

  downloadExcelBook(data: { [key: string]: {}[] }, filename: string, extra_data?: {}) {
    var workBook: ExcelProper.Workbook = new Excel.Workbook();
    Object.keys(data).forEach(sheet => {
      let worksheet = workBook.addWorksheet(sheet, {
        properties: {
          defaultRowHeight: 100,
        },
      });
      var tableData = data[sheet];
      var header = Object.keys(tableData[0]);
      var headerRow = worksheet.getRow(1);
      headerRow.values = header;
      headerRow.eachCell(cell => {
        cell.style = { font: { bold: true, size: 14 }, alignment: { vertical: "middle" } }
      });
      var cols = []
      header.forEach(h => {
        cols.push({ key: h, header: h, width: 25, style: { alignment: { vertical: "middle" } } })
      })
      worksheet.columns = cols;

      worksheet.addRows(tableData);
    });

    workBook.xlsx.writeBuffer().then(data => {
      const blob = new Blob([data], { type: this.blobType });
      FileSaver.saveAs(blob, filename);
    });
  }

  downloadMarksSheet(data, program: string, date: string, level: string, season: string , isMakeUp = false, round = "Provisional") {
    const workBook: ExcelProper.Workbook = new Excel.Workbook();
    var student_data = [];
      var sheet = workBook.addWorksheet(program+ '-' + level);
      this.createHeaderSheets(sheet, data["headers"], level, program, date, round);
      this.createColumnHeaders(sheet, data["headers"], 3, data["headers"].length, 4);
      this.fillData(sheet, data["data"], 0, 11, 1, 1, level, isMakeUp);

    workBook.xlsx.writeBuffer().then(data => {
      const blob = new Blob([data], { type: this.blobType });
      FileSaver.saveAs(blob, program + " - " + level + "-" + season + "-Result SHEET");
    });
  }

  fillData(sheet: ExcelProper.Worksheet, data, startColumn, startRow, rowStep, columnStep, level: string, isMakeUp: boolean) {
    this.student_slno = 0;
    var sortedStudents = [];
    data.forEach(student => {
      student['usn'] = student['studentData'][0]["usn"];
      sortedStudents.push(student)
    });
    sortedStudents.sort(sortByProperty("usn"));
    function sortByProperty(property) {
      return function (a, b) {
        if (a[property] > b[property])
          return 1;
        else if (a[property] < b[property])
          return -1;
        return 0;
      }
    }
    function allBorder(cell:ExcelProper.Cell){
      cell.style.border = {
        top: {style:'thin'},
        left: {style:'thin'},
        bottom: {style:'thin'},
        right: {style:'thin'}
      }
    }
    function allBorderThickSides(cell:ExcelProper.Cell){
      cell.style.border = {
        top: {style:'thin'},
        left: {style:'medium'},
        bottom: {style:'thin'},
        right: {style:'medium'}
      }
    }
    function allBorderLeftThick(cell:ExcelProper.Cell){
      cell.style.border = {
        top: {style:'thin'},
        left: {style:'medium'},
        bottom: {style:'thin'},
        right: {style:'thin'}
      }
    }
    function allBorderRightThick(cell:ExcelProper.Cell){
      cell.style.border = {
        top: {style:'thin'},
        left: {style:'thin'},
        bottom: {style:'thin'},
        right: {style:'medium'}
      }
    }
    sheet.getColumn(1).width = 10;
    sheet.getColumn(2).width = 25;
    sheet.getColumn(3).width = 30;
    sortedStudents.forEach(student => {
      if(student['studentData'].length == 0){
        return;
      }
      this.student_slno = this.student_slno + 1;
      var columnSlno = this.getColumnValue(startColumn) + startRow.toString();
      let cellSlno = sheet.getCell(columnSlno);
      cellSlno.value = this.student_slno;
      cellSlno.style.alignment = { horizontal: "center", vertical: "middle" }
      cellSlno.style.font = { size: 14, name: "Cambria" };
      allBorderThickSides(cellSlno);
      sheet.getRow(10+this.student_slno).height = 37;
      var columnUsn = this.getColumnValue((startColumn + 1)) + startRow.toString();
      let cellUsn = sheet.getCell(columnUsn);
      cellUsn.style.alignment = { horizontal: "center", vertical: "middle" };
      cellUsn.value = student['studentData'][0]["usn"];
      cellUsn.style.font = { size: 14, name: "Cambria" };
      allBorderThickSides(cellUsn);

      var columnName = this.getColumnValue((startColumn + 2)) + startRow.toString();
      let cellName = sheet.getCell(columnName);
      cellName.value = student['studentData'][0]["name"];
      cellName.style.alignment = { horizontal: "left", vertical: "middle" };
      cellName.style.font = { size: 14, name: "Cambria" };
      allBorderThickSides(cellName);


      var dataArranged = this.arrangeHeaders(student['studentData'], "slno");

      var checkedData = this.checkData(dataArranged);

      var colIndex = startColumn;
      checkedData.forEach(t => {
        var columnCie = this.getColumnValue((colIndex + 3)) + startRow.toString();
        var columnSee = this.getColumnValue((colIndex + 4)) + startRow.toString();
        var columnTotal = this.getColumnValue((colIndex + 5)) + startRow.toString();
        var columnGrade = this.getColumnValue((colIndex + 6)) + startRow.toString();

        let cellCie = sheet.getCell(columnCie)
        cellCie.value = t["cieMarks"]
        cellCie.style.alignment = { horizontal: "center", vertical: "middle" }
        cellCie.style.font = { size: 14, name: "Cambria" }
        allBorderLeftThick(cellCie);

        var total: any;

        if (t["cieMarks"] === '-') {
          total = '-';
        } else {
          total = t["totalMarks"]
        }
        
        if(t["hasAttendedMakeup"] == false && isMakeUp){
          if(t['grade'] !== 'I'){
            t["examMarks"] = "AB"
          }
          else{
            t["examMarks"] = '-'
          }
          total = t["cieMarks"]
        } else if(t["hasAttendedExam"] == false && !isMakeUp){
          if(t['grade'] !== 'I'){
            t["examMarks"] = "AB"
          }
          else{
            t["examMarks"] = '-'
          }
          total = t["cieMarks"]
        }

        if (t["isEligibleForExam"] == false) {
          t["examMarks"] = "NE"
          total = t["cieMarks"]
        }
        let cellSee = sheet.getCell(columnSee)
        cellSee.value = t["examMarks"];
        allBorder(cellSee);
        if (t["examMarks"] == "NE") {
          cellSee.style = { font: { size: 14, bold: true, color: { argb: 'ff6961' } } }
          cellSee.style.alignment = { horizontal: "center", vertical: "middle" }
        } else {
          cellSee.style.alignment = { horizontal: "center", vertical: "middle" }
          cellSee.style.font = { size: 14, name: "Cambria" }
        }

        let cellTotal = sheet.getCell(columnTotal)
        allBorder(cellTotal)
        cellTotal.value = total
        cellTotal.style.alignment = { horizontal: "center", vertical: "middle" }
        cellTotal.style.font = { size: 14, name: "Cambria" }

        let cellGrade = sheet.getCell(columnGrade)
        cellGrade.value = t['grade']
        cellGrade.style.alignment = { horizontal: "center", vertical: "middle" }
        cellGrade.style.font = { size: 14, name: "Cambria" }
        allBorderRightThick(cellGrade)
        colIndex = colIndex + 4

      })
      startRow = startRow + rowStep
    });
    var coe = sheet.getCell(10 +this.student_slno+4,3);
    coe.value = "Controller of Examinations";
    coe.style.alignment = { horizontal: "center", vertical: "middle" }
    coe.style.font = { size: 20, name: "Cambria", bold: true }
    sheet.getRow(sheet.rowCount-3).eachCell(cell =>{
      cell.style.border = {
        top: {style: 'medium'}
      }
    })
    var principal = sheet.getCell(10 +this.student_slno+4,sheet.columnCount-3);
    principal.value = "Principal";
    principal.style.alignment = { horizontal: "left", vertical: "middle" }
    principal.style.font = { size: 20, name: "Cambria", bold: true }
  }

  checkData(data) {
    var temp_array = [];
    for (var i = 0; i < this.columHeaders.length; i++) {
      var s = this.findSubject(data, this.columHeaders[i]["subjectCode"]);
      if (s != -1) {
        temp_array.push(data[s])
      } else {
        var subject = {}
        subject['cieMarks'] = '-'
        subject['examMarks'] = '-'
        subject['total'] = '-'
        subject['grade'] = '-'
        temp_array.push(subject)
      }
    }
    return temp_array
  }


  findSubject(data, subjectCode) {
    for (var i = 0; i < data.length; i++) {
      if (data[i]['subjectCode'] == subjectCode) {
        return i;
      }

    }
    return -1;
  }

  createHeaderSheets(sheet: ExcelProper.Worksheet, headers, level: string, program: string, date: string, round) {
    var headerLength = headers.length;
    var maxColumns = ((headerLength * 4) + 3) - 1;
    var maxColumnValue = this.getColumnValue(maxColumns);
    /* code cleanup required */
    this.mergeCells(sheet, 'A1', (maxColumnValue + '1'));
    this.mergeCells(sheet, 'A2', (maxColumnValue + '2'));
    this.mergeCells(sheet, 'A4', (maxColumnValue + '4'));
    this.mergeCells(sheet, 'A6', (maxColumnValue + '6'));
    this.mergeCells(sheet, 'R7', (maxColumnValue + '7'));
    this.mergeCells(sheet, 'A8', 'A10');
    this.mergeCells(sheet, 'B8', 'B10');
    this.mergeCells(sheet, 'C8', 'C10');
    var index = 3
    for (var i = 0; i < headerLength; i++) {
      var columnValue = this.getColumnValue(index) + '8'
      var columnValue2 = this.getColumnValue(index + 3) + '8'
      var columnValue3 = this.getColumnValue(index) + '9'
      var columnValue4 = this.getColumnValue(index + 3) + '9'
      this.mergeCells(sheet, columnValue, columnValue2);
      this.mergeCells(sheet, columnValue3, columnValue4);
      index = index + 4;
    }

    /* code cleanup required */
    let cell: ExcelProper.Cell = sheet.getCell('D1')
    cell.value = "B. M. S. COLLEGE OF ENGINEERING, BANGALORE-560 019";
    cell.style.alignment = { horizontal: "center", vertical: "middle" }
    cell.style.font = { size: 28, name: "Cambria", bold: true }

    let cell1 = sheet.getCell('A2')
    cell1.value = "Autonomous Institute affiliated to VTU, Belagavi";
    cell1.style.alignment = { horizontal: "center", vertical: "middle" }
    cell1.style.font = { size: 18, name: "Cambria" }

    let cell3 = sheet.getCell('A4')
    var exam_string = '';
    if (level === 'I SEM' && program.includes('BE')) {
      exam_string = " DECEMBER 2019 - JANUARY 2020";
    } else if (level === 'II SEM' && program.includes('BE')) {
      exam_string = " AUGUST 2020";
    } else if (level === 'I SEM' && program.includes('Masters')) {
      exam_string = " JANUARY 2020 ";
    } else if (level === 'II SEM' && program.includes('Masters')) {
      exam_string = " AUGUST 2020";
    }
    else {
      exam_string = " January & February 2021";
    }
    cell3.value = program + " " + level + " - " + exam_string;
    cell3.style.alignment = { horizontal: "center", vertical: "middle" }
    cell3.style.font = { size: 18, bold: true, name: 'Cambria' }

    let cell4 = sheet.getCell('A6')
    cell4.value = round + " Result Sheet";
    cell4.style.alignment = { horizontal: "center", vertical: "middle" }
    cell4.style.font = { size: 24, bold: true, name: 'Cambria' }

    let cell5 = sheet.getCell('A7')
    cell5.value = "Branch: " + program;
    cell5.style.alignment = { horizontal: "left" }
    cell5.style.font = { size: 18, name: "Cambria" }

    let cell6 = sheet.getCell('T7')
    cell6.value = "Date: " + moment(date).format("DD.MM.YYYY");
    cell6.style.alignment = { horizontal: "center", vertical: "middle" }
    cell6.style.font = { size: 18, name: "Cambria" }

    let cell7 = sheet.getCell('A8')
    cell7.value = "Sl. No.";
    cell7.style.alignment = { horizontal: "center", vertical: "middle" }
    cell7.style.font = { size: 18, name: "Cambria" }
    cell7.style.border = {
      top: {style:'medium'},
      left: {style:'medium'},
      bottom: {style:'thin'},
      right: {style:'medium'}
    }

    let cell8 = sheet.getCell('B8')
    cell8.value = "USN";
    cell8.style.alignment = { horizontal: "center", vertical: "middle" }
    cell8.style.font = { size: 18,  name: "Cambria" }
    cell8.style.border = {
      top: {style:'medium'},
      left: {style:'medium'},
      bottom: {style:'thin'},
      right: {style:'medium'}
    }

    let cell9 = sheet.getCell('C8')
    cell9.value = "Student Name";
    cell9.style.alignment = { horizontal: "center", vertical: "middle" }
    cell9.style.font = { size: 18, name: "Cambria" }
    cell9.style.border = {
      top: {style:'medium'},
      left: {style:'medium'},
      bottom: {style:'thin'},
      right: {style:'medium'}
    }
    sheet.getRow(8).height = 40;
    sheet.getRow(9).height = 30;
    sheet.getRow(10).height = 50;
  }

  createColumnHeaders(sheet: ExcelProper.Worksheet, headers, startIndex: number, endIndex: number, mutipler: number) {
    this.columHeaders = this.arrangeHeaders(headers, "slno");

    this.columHeaders.forEach(header => {
      var column2 = this.getColumnValue(startIndex) + '8'
      var column1 = this.getColumnValue(startIndex) + '9'

      var columnaValue1 = this.getColumnValue(startIndex) + '10';
      var columnaValue2 = this.getColumnValue(startIndex + 1) + '10';
      var columnaValue3 = this.getColumnValue(startIndex + 2) + '10';
      var columnaValue4 = this.getColumnValue(startIndex + 3) + '10';

      let cellHead3 = sheet.getCell(columnaValue1);
      let cellHead4 = sheet.getCell(columnaValue2);
      let cellHead5 = sheet.getCell(columnaValue3);
      let cellHead6 = sheet.getCell(columnaValue4);

      var cell = sheet.getCell(column2)
      cell.value = header.subjectName;
      cell.style.alignment = { horizontal: "center", vertical: "middle", wrapText: true }
      cell.style.font = { size: 12, name: "Cambria", bold: true }
      cell.style.border = {
        top: {style:'medium'},
        left: {style:'medium'},
        bottom: {style:'thin'},
        right: {style:'medium'}
      }

      var cell1 = sheet.getCell(column1)
      cell1.value = header.subjectCode;
      cell1.style.alignment = { horizontal: "center", vertical: "middle" }
      cell1.style.font = { size: 14, name: "Cambria", bold: true };
      cell1.style.border = {
        top: {style:'thin'},
        left: {style:'medium'},
        bottom: {style:'thin'},
        right: {style:'medium'}
      }

      cellHead3.value = "CIE";
      cellHead3.style.alignment = { horizontal: "center", vertical: "middle", textRotation: 90 };
      cellHead3.style.font = { size: 14, name: "Cambria" };
      cellHead3.style.border = {
        top: {style:'thin'},
        left: {style:'medium'},
        bottom: {style:'thin'},
        right: {style:'thin'}
      }

      cellHead4.value = "SEE";
      cellHead4.style.alignment = { horizontal: "center", vertical: "middle", textRotation: 90 };
      cellHead4.style.font = { size: 14, name: "Cambria" };
      cellHead4.style.border = {
        top: {style:'thin'},
        left: {style:'thin'},
        bottom: {style:'thin'},
        right: {style:'thin'}
      }

      cellHead5.value = "TOTAL";
      cellHead5.style.alignment = { horizontal: "center", vertical: "middle", textRotation: 90 };
      cellHead5.style.font = { size: 14, name: "Cambria" };
      cellHead5.style.border = {
        top: {style:'thin'},
        left: {style:'thin'},
        bottom: {style:'thin'},
        right: {style:'thin'}
      }

      cellHead6.value = "GRADE";
      cellHead6.style.alignment = { horizontal: "center", vertical: "middle", textRotation: 90};
      cellHead6.style.font = { size: 14, name: "Cambria"};
      cellHead6.style.border = {
        top: {style:'thin'},
        left: {style:'thin'},
        bottom: {style:'thin'},
        right: {style:'medium'}
      }
      startIndex = startIndex + mutipler;
    });
  }


  private arrangeHeaders(headers, key: string) {
    function sortByProperty(property) {
      return function (a, b) {
        if (a[property] > b[property])
          return 1;
        else if (a[property] < b[property])
          return -1;
        return 0;
      }
    }
    return headers.sort(sortByProperty(key));
  }

  private mergeCells(sheet, startIndex, endIndex) {
    sheet.mergeCells(startIndex, endIndex);
  }

  getColumnValue(number) {
    var temp, letter = '';
    var column = number + 1;
    while (column > 0) {
      temp = (column - 1) % 26;
      letter = String.fromCharCode(temp + 65) + letter;
      column = (column - temp - 1) / 26;
    }
    return letter;
  }

  getIntegratedCieSheet(subjectData :Vo){
    var sectionsData = subjectData["sections"] as Vo[];
    var workBook: ExcelProper.Workbook = new Excel.Workbook();

    function allBorder(cell:ExcelProper.Cell){
      cell.style.border = {
        top: {style:'thin'},
        left: {style:'thin'},
        bottom: {style:'thin'},
        right: {style:'thin'}
      }
    }

    sectionsData.forEach(section =>{
      var sheet = workBook.addWorksheet(section.section as string);

      var cells = [
        {coordinate: 'A1', value: "B. M. S. COLLEGE OF ENGINEERING, BANGALORE-560 019", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 24, name: "Cambria", bold: true }, background: 'FFFFFFFF' },
        {coordinate: 'A2', value: "Autonomous Institute affiliated to VTU, Belagavi", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 12, name: "Cambria", bold: true }, background: 'FFFFFFFF' },
        {coordinate: 'A3', value: "COURSEWISE CONSOLIDATED  ATTENDANCE & CIE MARKS", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 16, name: "Cambria", bold: true }, background: 'FFFFFFFF' },
        {coordinate: 'A4', value: "DEPARTMENT", alignment: { horizontal: "left", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
        {coordinate: 'C4', value: section.students[0].department, alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
        {coordinate: 'A5', value: "COURSE CODE", alignment: { horizontal: "left", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
        {coordinate: 'C5', value: subjectData["code"] as string, alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
        {coordinate: 'D5', value: "COURSE TITLE", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
        {coordinate: 'G5', value: subjectData["name"], alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },   
        {coordinate: 'A6', value: "SEMESTER", alignment: { horizontal: "left", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
        {coordinate: 'C6', value: subjectData["level"] as string, alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
        {coordinate: 'D6', value: "SECTION", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
        {coordinate: 'G6', value: section.section as string, alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },    
        {coordinate: 'A7', value: "S.NO.", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
        {coordinate: 'B7', value: "USN", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
        {coordinate: 'C7', value: "NAME", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
      ];

      cells.forEach(cell=>{
        let tempCell: ExcelProper.Cell = sheet.getCell(cell.coordinate);
        tempCell.value = cell.value;
        tempCell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: {
            argb: cell.background
          }
        }
        tempCell.alignment = cell.alignment as Partial<ExcelProper.Alignment>;
        tempCell.font = cell.font;
        allBorder(tempCell);
      });
      sheet.mergeCells('A4','B4');
      sheet.mergeCells('A5','B5');
      sheet.mergeCells('D5','F5');
      sheet.mergeCells('G5','L5');
      sheet.mergeCells('A6','B6');
      sheet.mergeCells('D6','F6');
      sheet.mergeCells('A7','A9');
      sheet.mergeCells('B7','B9');
      sheet.mergeCells('C7','C9');

      var assessmentLength = section["students"][0]["theoryAssessments"].length;
      section["students"][0]["theoryAssessments"].forEach(assessment =>{
        let cellCount  = sheet.getRow(7).cellCount;
        let tempCell: ExcelProper.Cell = sheet.getCell(7, cellCount+1);
        tempCell.value = assessment.assessmentName;
        tempCell.alignment = {textRotation:90, horizontal: 'center', vertical: 'middle'};
        tempCell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: {
            argb: 'FFFCE9D9'
          }
        }
        tempCell.font = {bold: true, size: 14, name: "Cambria",};
        allBorder(tempCell);
        sheet.mergeCells(this.getColumnValue(cellCount) + '7' ,this.getColumnValue(cellCount) + '9' )
      });

      var trailingCells = [
        {row: 7, value: "THEORY MARKS", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF4ABEF8' },
        {row: 7, value: "HELD", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
        {row: 7, value: "ATTENDED", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
        {row: 7, value: "% OF ATTTENDANCE", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
        {row: 7, value: "LAB MARKS", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF4ABEF8' },
        {row: 7, value: "HELD", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
        {row: 7, value: "ATTENDED", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
        {row: 7, value: "% OF ATTTENDANCE", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
        {row: 7, value: "TOTAL MARKS", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF4ABEF8' },  
        {row: 7, value: "ELIGIBILITY", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
        {row: 7, value: "CONDONED", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
      ];

      trailingCells.forEach(cell =>{
        let cellCount  = sheet.getRow(8).cellCount;
        let tempCell: ExcelProper.Cell = sheet.getCell(cell.row, cellCount+1);
        tempCell.value = cell.value;
        tempCell.alignment = cell.alignment as Partial<ExcelProper.Alignment>;
        tempCell.font = cell.font;
        tempCell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: {
            argb: cell.background
          }
        }
        allBorder(tempCell);
        sheet.mergeCells(this.getColumnValue(cellCount) + cell.row ,this.getColumnValue(cellCount) + '9' )
      });

      var rowStart = 10;
      (section["students"] as unknown as any).forEach((student, idx) =>{
        var row = sheet.getRow(rowStart + idx);
        row.border = {
          top: {style:'thin'},
          left: {style:'thin'},
          bottom: {style:'thin'},
          right: {style:'thin'}
        }
        row.font = { size: 12, name: "Cambria",};
        row.alignment = { horizontal: "center", vertical: "middle" };
        var values = [
          idx + 1,
          student["usn"],
          student["name"],
        ];
        (student["theoryAssessments"] as Vo[]).forEach(assessment =>{
          values.push(assessment["marks"])
        });
        values.push(student["theoryCie"]);
        values.push(student["theoryClassesHeld"]);
        values.push(student["theoryClassesAttended"]);
        values.push(student["theoryAttendance"]);
        values.push(student["labCie"]);
        values.push(student["labClassesHeld"]);
        values.push(student["labClassesAttended"]);
        values.push(student["labAttendance"]);
        values.push(student["cieMarks"]);
        if(student["eligibility"] as boolean){
          values.push("ELIGIBLE");
        }
        else{
          values.push("NOT ELIGIBLE");
        }

        if(student["isCondoned"] as boolean){
          values.push("CONDONED")
        }
        else{
          values.push("");
        }

        row.values = values;
        
        var eligibilityCell = row.findCell(assessmentLength+3+10);
        if(student["eligibility"] as boolean){
          eligibilityCell.font = {size: 12, name: "Cambria", color: {argb: '00008000'}, bold: true}
        }
        else{
          eligibilityCell.font = {size: 12, name: "Cambria", color: {argb: '00FF0000'}, bold: true}
          if(student["hasCieShortage"] as boolean){
            row.findCell(assessmentLength+3+9).font = {size: 12, name: "Cambria", color: {argb: '00FF0000'}, bold: true}
          }
          if(student["hasAttendanceShortage"] as boolean){
            var theoryAttendanceCell = row.findCell(assessmentLength+3+4);
            var labAttendanceCell = row.findCell(assessmentLength+3+8);
            if(student["hasAttendanceShortage"] as boolean){
              theoryAttendanceCell.font = {size: 12, name: "Cambria", color: {argb: '00FF0000'}}
              labAttendanceCell.font = {size: 12, name: "Cambria", color: {argb: '00FF0000'}}
            }
          }
        }

        var condonedCell = row.findCell(assessmentLength+3+11);
        if(student["isCondoned"] as boolean){
          condonedCell.font = {size: 12, name: "Cambria", color: {argb: '00FFA500'}}
        }

        row.findCell(3).alignment = { horizontal: "left", vertical: "middle" };
        
        
      });

      sheet.getColumn(2).width = 25;
      sheet.getColumn(3).width = 40;
      sheet.getRow(8).height = 20;
      sheet.getRow(9).height = 20;

      var mergeCol = this.getColumnValue(sheet.columnCount -1) ;
      sheet.mergeCells('A1', mergeCol + '1');
      sheet.mergeCells('A2', mergeCol + '2');
      sheet.mergeCells('A3', mergeCol + '3');

    });

    workBook.xlsx.writeBuffer().then(data => {
      const blob = new Blob([data], { type: this.blobType });
      FileSaver.saveAs(blob, subjectData['level'] + " - " + subjectData['name']);
    });
  }

  getNonIntegratedCieSheet(subjectData){
    var sectionsData = subjectData["sections"] as Vo[];
    var workBook: ExcelProper.Workbook = new Excel.Workbook();

    function allBorder(cell:ExcelProper.Cell){
      cell.style.border = {
        top: {style:'thin'},
        left: {style:'thin'},
        bottom: {style:'thin'},
        right: {style:'thin'}
      }
    }

    sectionsData.forEach(section =>{
      var sheet = workBook.addWorksheet(section.section as string);

      var cells = [
        {coordinate: 'A1', value: "B. M. S. COLLEGE OF ENGINEERING, BANGALORE-560 019", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 24, name: "Cambria", bold: true }, background: 'FFFFFFFF' },
        {coordinate: 'A2', value: "Autonomous Institute affiliated to VTU, Belagavi", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 12, name: "Cambria", bold: true }, background: 'FFFFFFFF' },
        {coordinate: 'A3', value: "COURSEWISE CONSOLIDATED  ATTENDANCE & CIE MARKS", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 16, name: "Cambria", bold: true }, background: 'FFFFFFFF' },
        {coordinate: 'A4', value: "DEPARTMENT", alignment: { horizontal: "left", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
        {coordinate: 'C4', value: section.students[0].department, alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
        {coordinate: 'A5', value: "COURSE CODE", alignment: { horizontal: "left", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
        {coordinate: 'C5', value: subjectData["code"] as string, alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
        {coordinate: 'D5', value: "COURSE TITLE", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
        {coordinate: 'G5', value: subjectData["name"], alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },   
        {coordinate: 'A6', value: "SEMESTER", alignment: { horizontal: "left", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
        {coordinate: 'C6', value: subjectData["level"] as string, alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
        {coordinate: 'D6', value: "SECTION", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
        {coordinate: 'G6', value: section.section as string, alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },    
        {coordinate: 'A7', value: "S.NO.", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
        {coordinate: 'B7', value: "USN", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
        {coordinate: 'C7', value: "NAME", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
      ];

      cells.forEach(cell=>{
        let tempCell: ExcelProper.Cell = sheet.getCell(cell.coordinate);
        tempCell.value = cell.value;
        tempCell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: {
            argb: cell.background
          }
        }
        tempCell.alignment = cell.alignment as Partial<ExcelProper.Alignment>;
        tempCell.font = cell.font;
        allBorder(tempCell);
      });
      sheet.mergeCells('A4','B4');
      sheet.mergeCells('A5','B5');
      sheet.mergeCells('D5','F5');
      sheet.mergeCells('G5','L5');
      sheet.mergeCells('A6','B6');
      sheet.mergeCells('D6','F6');
      sheet.mergeCells('A7','A9');
      sheet.mergeCells('B7','B9');
      sheet.mergeCells('C7','C9');

      var assessmentLength = section["students"][0]["assessments"].length;
      section["students"][0]["assessments"].forEach(assessment =>{
        let cellCount  = sheet.getRow(7).cellCount;
        let tempCell: ExcelProper.Cell = sheet.getCell(7, cellCount+1);
        tempCell.value = assessment.assessmentName;
        tempCell.alignment = {textRotation:90, horizontal: 'center', vertical: 'middle'};
        tempCell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: {
            argb: 'FFFCE9D9'
          }
        }
        tempCell.font = {bold: true, size: 14, name: "Cambria",};
        allBorder(tempCell);
        sheet.mergeCells(this.getColumnValue(cellCount) + '7' ,this.getColumnValue(cellCount) + '9' )
      });

      var trailingCells = [
        {row: 7, value: "MARKS", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF4ABEF8' },
        {row: 7, value: "HELD", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
        {row: 7, value: "ATTENDED", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
        {row: 7, value: "% OF ATTTENDANCE", alignment: { textRotation: 90, horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
        {row: 7, value: "ELIGIBILITY", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
        {row: 7, value: "CONDONED", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
      ];

      trailingCells.forEach(cell =>{
        let cellCount  = sheet.getRow(7).cellCount;
        let tempCell: ExcelProper.Cell = sheet.getCell(cell.row, cellCount+1);
        tempCell.value = cell.value;
        tempCell.alignment = cell.alignment as Partial<ExcelProper.Alignment>;
        tempCell.font = cell.font;
        tempCell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: {
            argb: cell.background
          }
        }
        allBorder(tempCell);
        sheet.mergeCells(this.getColumnValue(cellCount) + cell.row ,this.getColumnValue(cellCount) + '9' )
      });

      var rowStart = 10;
      (section["students"] as unknown as any).forEach((student, idx) =>{
        var row = sheet.getRow(rowStart + idx);
        row.border = {
          top: {style:'thin'},
          left: {style:'thin'},
          bottom: {style:'thin'},
          right: {style:'thin'}
        }
        row.font = { size: 12, name: "Cambria",};
        row.alignment = { horizontal: "center", vertical: "middle" };
        var values = [
          idx + 1,
          student["usn"],
          student["name"],
        ];
        (student["assessments"] as Vo[]).forEach(assessment =>{
          values.push(assessment["marks"])
        });
        values.push(student["cieMarks"]);
        values.push(student["classesHeld"]);
        values.push(student["classesAttended"]);
        values.push(student["overallAttendance"]);
        if(student["eligibility"] as boolean){
          values.push("ELIGIBLE");
        }
        else{
          values.push("NOT ELIGIBLE");
        }

        if(student["isCondoned"] as boolean){
          values.push("CONDONED")
        }
        else{
          values.push("");
        }

        row.values = values;
        var attendanceCell = row.findCell(assessmentLength+3+4);
        if(student["hasAttendanceShortage"] as boolean){
          attendanceCell.font = {size: 12, name: "Cambria", color: {argb: 'FF008000'}}
        }
        var eligibilityCell = row.findCell(assessmentLength+3+5);
        if(student["eligibility"] as boolean){
          eligibilityCell.font = {size: 12, name: "Cambria", color: {argb: '00008000'}, bold: true}
        }
        else{
          eligibilityCell.font = {size: 12, name: "Cambria", color: {argb: '00FF0000'}, bold: true}
          if(student["hasCieShortage"] as boolean){
            row.findCell(assessmentLength+3+1).font = {size: 12, name: "Cambria", color: {argb: '00FF0000'}, bold: true}
          }
          if(student["hasAttendanceShortage"] as boolean && parseInt(student["overallAttendance"]) < 85){
            row.findCell(assessmentLength+3+4).font = {size: 12, name: "Cambria", color: {argb: '00FF0000'}, bold: true}
          }
        }

        var condonedCell = row.findCell(assessmentLength+3+6);
        if(student["isCondoned"] as boolean){
          condonedCell.font = {size: 12, name: "Cambria", color: {argb: '00FFA500'}}
        }

        row.findCell(3).alignment = { horizontal: "left", vertical: "middle" };
        
        
      });

      sheet.getColumn(2).width = 25;
      sheet.getColumn(3).width = 40;
      sheet.getRow(8).height = 20;
      sheet.getRow(9).height = 20;

      var mergeCol = this.getColumnValue(sheet.columnCount -1) ;
      sheet.mergeCells('A1', mergeCol + '1');
      sheet.mergeCells('A2', mergeCol + '2');
      sheet.mergeCells('A3', mergeCol + '3');

    });

    workBook.xlsx.writeBuffer().then(data => {
      const blob = new Blob([data], { type: this.blobType });
      FileSaver.saveAs(blob, subjectData['level'] + " - " + subjectData['name']);
    });
  }

  getPpNpSheet(subjectData,gradeMap){
    var sectionsData = subjectData["sections"] as Vo[];
    var workBook: ExcelProper.Workbook = new Excel.Workbook();

    function allBorder(cell:ExcelProper.Cell){
      cell.style.border = {
        top: {style:'thin'},
        left: {style:'thin'},
        bottom: {style:'thin'},
        right: {style:'thin'}
      }
    }

    sectionsData.forEach(section =>{
      var sheet = workBook.addWorksheet(section.section as string);

      var cells = [
        {coordinate: 'A1', value: "B. M. S. COLLEGE OF ENGINEERING, BANGALORE-560 019", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 24, name: "Cambria", bold: true }, background: 'FFFFFFFF' },
        {coordinate: 'A2', value: "Autonomous Institute affiliated to VTU, Belagavi", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 12, name: "Cambria", bold: true }, background: 'FFFFFFFF' },
        {coordinate: 'A3', value: "COURSEWISE CONSOLIDATED  ATTENDANCE & CIE MARKS", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 16, name: "Cambria", bold: true }, background: 'FFFFFFFF' },
        {coordinate: 'A4', value: "DEPARTMENT", alignment: { horizontal: "left", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
        {coordinate: 'C4', value: section.students[0].department, alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
        {coordinate: 'A5', value: "COURSE CODE", alignment: { horizontal: "left", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
        {coordinate: 'C5', value: subjectData["code"] as string, alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
        {coordinate: 'D5', value: "COURSE TITLE", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
        {coordinate: 'G5', value: subjectData["name"], alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },   
        {coordinate: 'A6', value: "SEMESTER", alignment: { horizontal: "left", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
        {coordinate: 'C6', value: subjectData["level"] as string, alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },
        {coordinate: 'D6', value: "SECTION", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FF00FF00' },
        {coordinate: 'G6', value: section.section as string, alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFFFF00' },    
        {coordinate: 'A7', value: "S.NO.", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
        {coordinate: 'B7', value: "USN", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
        {coordinate: 'C7', value: "NAME", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
        {coordinate: 'D7', value: "GRADE", alignment: { horizontal: "center", vertical: "middle" }, font: { size: 14, name: "Cambria", bold: true }, background: 'FFFCE9D9' },
      ];

      cells.forEach(cell=>{
        let tempCell: ExcelProper.Cell = sheet.getCell(cell.coordinate);
        tempCell.value = cell.value;
        tempCell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: {
            argb: cell.background
          }
        }
        tempCell.alignment = cell.alignment as Partial<ExcelProper.Alignment>;
        tempCell.font = cell.font;
        allBorder(tempCell);
      });
      sheet.mergeCells('A4','B4');
      sheet.mergeCells('A5','B5');
      sheet.mergeCells('D5','F5');
      sheet.mergeCells('G5','L5');
      sheet.mergeCells('A6','B6');
      sheet.mergeCells('D6','F6');
      sheet.mergeCells('A7','A9');
      sheet.mergeCells('B7','B9');
      sheet.mergeCells('C7','C9');
      sheet.mergeCells('D7','D9');

      var rowStart = 10;
      (section["students"] as unknown as any).forEach((student, idx) =>{
        var row = sheet.getRow(rowStart + idx);
        row.border = {
          top: {style:'thin'},
          left: {style:'thin'},
          bottom: {style:'thin'},
          right: {style:'thin'}
        }
        row.font = { size: 12, name: "Cambria",};
        row.alignment = { horizontal: "center", vertical: "middle" };
        var values = [
          idx + 1,
          student["usn"],
          student["name"],
          gradeMap[student["usn"]]
        ];
        row.values = values;

        row.findCell(3).alignment = { horizontal: "left", vertical: "middle" };
        
        
      });

      sheet.getColumn(2).width = 25;
      sheet.getColumn(3).width = 10;

      var mergeCol = this.getColumnValue(sheet.columnCount -1) ;
      sheet.mergeCells('A1', mergeCol + '1');
      sheet.mergeCells('A2', mergeCol + '2');
      sheet.mergeCells('A3', mergeCol + '3');

    });

    workBook.xlsx.writeBuffer().then(data => {
      const blob = new Blob([data], { type: this.blobType });
      FileSaver.saveAs(blob, subjectData['level'] + " - " + subjectData['name']+'.xlsx');
    });
  }

  /**
   * Downloads an excel of CIE for a subject
   * @param subjectData the details of the CIE of a subject section with three level hierarchy
   * {   subjectName:"Mechanics", isIntegrated:bool  sections:[ { ....,students:[{}],.... }  ]   }
   */
  public downloadCIE(subjectData: Vo): void {
    var isIntegrated: boolean = subjectData.isIntegrated as boolean;
    console.log(isIntegrated);
    if(isIntegrated){
      this.getIntegratedCieSheet(subjectData)
    }
    else{
      this.getNonIntegratedCieSheet(subjectData)
    }

  }
  


  /**
  * Downloads halltickets
  * @param data input data for the hallticket
  * @param filename The name of the file to be downloaded
  */
  downloadHallTicket(data, date, filename: string, title: string, view?: boolean,) {
    this.doc = new jsPDF('p', 'pt', 'a4');
    for (var i = 0; i < data.length; i++) {
      if (i % 2 == 0) {
        this.getHallTicket(0, data[i], date, title)
      }
      else {
        this.getHallTicket(410, data[i], date, title)
        this.doc.addPage();
      }
    }
    this.doc.setProperties({
      title: filename
    });
    this.doc.save(filename + '.pdf');
  }

  /**
   * Returns the hall ticket template
   * @param pos Position offset
   * @param data Data to be added in the hall ticket
   */
  getHallTicket(pos: number, data, date, title) {
    this.doc.setLineWidth(3);
    this.doc.setDrawColor(0, 0, 255);
    this.doc.rect(20, 30 + pos, 555, 350); // outer blue box
    this.doc.addImage(this.logo, 'png', 110, 35 + pos, 28, 28)
    this.doc.addImage(this.wm, 'png', 172, 105 + pos, 250, 250);
    var path = 'assets/images/portraits/' + data.usn.toString() + '.jpg';
    var person = new Image()
    try {
      person.src = path;
      this.doc.addImage(person, 'jpg', 470, 105 + pos, 40, 50)
    }
    catch (error) {

    }
    this.doc.setFontSize(14);
    this.doc.setFontType("bold");
    this.doc.setTextColor(0, 0, 0);
    this.getAlignmentValue(10, 53 + pos, "B.M.S. COLLEGE OF ENGINEERING, Bengaluru-19", { align: 'center', width: '595' });
    this.doc.setFontSize(7);
    this.doc.setFontType("normal");
    this.doc.setTextColor(0, 0, 255);
    this.doc.setFontSize(9);
    this.getAlignmentValue(0, 63 + pos, "Autonomous Institute under VTU, Belagavi", { align: 'center', width: '595' });
    this.doc.setTextColor(255, 0, 0);
    this.getAlignmentValue(0, 76 + pos, "ADMISSION TICKET FOR - B.E. /B.ARCH/M.TECH/MBA/MCA", { align: 'center', width: '595' });
    this.doc.setTextColor(0, 100, 0);
    this.getAlignmentValue(0, 86 + pos, title, { align: 'center', width: '595' });
    this.doc.setDrawColor(0, 0, 255);
    this.doc.rect(20, 30 + pos, 555, 65);

    this.doc.setTextColor(0, 50, 123);
    this.doc.setFontSize(8);
    this.doc.setFontType("bold");
    this.getAlignmentValue(45, 110 + pos, "USN: " + data.usn, { align: 'left', width: '595' });
    this.getAlignmentValue(45, 125 + pos, "Name: " + data.studentName, { align: 'left', width: '595' });
    this.getAlignmentValue(45, 140 + pos, "Semester: " + data.levelName, { align: 'left', width: '595' });
    this.getAlignmentValue(45, 155 + pos, "Program: " + data.programName, { align: 'left', width: '595' });
    this.doc.setDrawColor(0, 0, 255);
    this.doc.rect(20, 30 + pos, 555, 135);

    var row = [];
    let column = ["SL. No", "Course Code", "Course Title", "Eligibility", "Invigilator Sign"];
    for (var j = 0; j < data.subjectDetails.length; j++) {
      row.push([j + 1, data.subjectDetails[j].subjectCode, data.subjectDetails[j].subjectName, data.subjectDetails[j].isEligible]);
    }
    this.doc.setDrawColor(236, 128, 38);
    this.doc.setLineWidth(2);
    this.doc.rect(30, 172 + pos, 535, 58 + ((j - 1) * 13));
    var cellStyles = {
      fontSize: 8,
      fillColor: false,
      textColor: 0,
      halign: 'center',
      valign: 'middle',
      lineWidth: 0.3,
      lineColor: 0,
      minCellHeight: 0,
      cellPadding: 2,
    }

    var headCellStyles = {
      fontSize: 8,
      fillColor: false,
      textColor: 0,
      halign: 'center',
      valign: 'middle',
      lineWidth: 0.3,
      lineColor: 0,
      minCellHeight: 0,
      cellPadding: 12,
    }

    this.doc.autoTable(
      column,
      row,
      {
        startY: 177 + pos,
        headStyles: headCellStyles,
        bodyStyles: cellStyles, styles:
          cellStyles,
        alternateRowStyles: cellStyles,
        didParseCell: data => {
          if (data.column.dataKey === 3 && data.section === "body") {
            if (data.row.raw[3] == "ELIGIBLE") {
              data.cell.styles.textColor = 0;
              data.cell.styles.fontStyle = "bold";
            }
            else {
              data.cell.styles.textColor = [255, 0, 0];
              data.cell.styles.fontStyle = "bold";
            }
          }
          if (data.column.dataKey === 2 && data.section === "body") {
            data.cell.styles.halign = "left";
          }
        }
      }
    );

    this.doc.setFontSize(8);
    this.doc.setFontType("normal");
    this.getAlignmentValue(55, 370 + pos, "Candidate Signature", { align: 'left', width: '595' });
    this.getAlignmentValue(0, 370 + pos, "Date of Issue: " + date, { align: 'center', width: '595' });
    this.getAlignmentValue(-55, 370 + pos, "Controller of Examinations", { align: 'right', width: '595' });
    this.doc.addImage(this.sign, 'jpg', 470, 335 + pos, 46, 23)

  }

  /**
   * fuction used to align a text in the pdf doc
   * @param x x-position
   * @param y y-position
   * @param text the text to be added
   * @param options used for alignment: center | left | right
   */
  getAlignmentValue(x: any, y: any, text: string, options: any) {
    var options = options || {};
    var defaults = {
      align: 'left',
      width: this.doc.internal.pageSize.width
    }
    var settings = $.extend({}, defaults, options);
    var fontSize = this.doc.internal.getFontSize();
    var text_size = this.doc.getStringUnitWidth(text) * fontSize / this.doc.internal.scaleFactor;
    if (settings.align === 'center')
      x += (settings.width - text_size) / 2;
    else if (settings.align === 'right')
      x += (settings.width - text_size);
    this.doc.text(text, x, y);
  }

  downloadFormA(data,name,date,time,title) {
    var doc: PDF = new jsPDF('p', 'pt','a3');
    doc.setFontSize(8);
    doc.setFontStyle('bold');
    doc.setLineWidth(1.1)
    
    var adjuster = data.students.length;
    if(Math.floor(adjuster/250) >= 1){
      adjuster = 250;
    }
    var len = Math.ceil(adjuster/6)+1;
    var attendedX = 75,
      attendedY = 188,
      attendedCol = 0,
      attendedRow = 0,
      absentX = 75,
      absentY = 305+15*len,
      absentCol = 0,
      absentRow = 0,
      totalPresent = 0,
      totalAbsent = 0,
      totalMalpractice = 0;
    this.putFormAHeader(doc,data,len,date,time,title);
    
    data.students.forEach(student => {
      if(totalPresent % 250 == 0 && totalPresent != 0){
        var totalOptions = { size: 12, align: 'right' };
        this.putFormAFooter(data,len,doc,totalPresent,totalAbsent,totalMalpractice,totalOptions);
        doc.addPage();
        attendedX = 75;
        attendedY = 188;
        attendedCol = 0;
        attendedRow = 0;
        absentX = 75;
        absentY = 305+15*len;
        absentCol = 0;
        absentRow = 0;
        totalMalpractice = 0;
        var adjuster = data.students.length-250;
        if(Math.floor(adjuster/250) >= 1){
          adjuster = 250;
        }
        len = Math.ceil(adjuster/6)+1;
        this.putFormAHeader(doc,data,len,date,time,title);
      }
      if (student.hasAttended) {
        this.putText(attendedX + attendedCol * 90, attendedY + attendedRow * 20, student.usn, {size:11}, doc)
        attendedCol != 0 && attendedCol % 7 == 0 ? (attendedCol = 0, attendedRow++) : attendedCol++;
        totalPresent++;
      }
      else {
        this.putText(absentX + absentCol * 90, absentY + absentRow * 16, student.usn, {size:11}, doc)
        absentCol != 0 && absentCol % 5 == 0 ? (absentCol = 0, absentRow++) : absentCol++;
        totalAbsent++;

      }

    });
    this.putFormAFooter(data,len,doc,totalPresent,totalAbsent,totalMalpractice,{ size: 12, align: 'right' });
    doc.save(name+" Form-A.pdf");
  }

  putFormAHeader(doc,data,len,date,time,title){
    var logo = new Image();
    logo.src = 'assets/images/bms_bw.png';
    doc.addImage(logo, 'png', 170, 35, 33, 33)
    doc.rect(65, 155, 735, 25+15*len);
    doc.rect(65, 155+25+15*len+20, 735, 60);
    doc.rect(65, 155+25+15*len+90, 735, 60);
    const textArray = [
      { text: "BMS COLLEGE OF ENGINEERING", size: "11", style: "bold" },
      { text: " (AUTONOMOUS COLLEGE UNDER VTU), ", size: "8", style: "normal" },
      { text: "BANGALORE - 560 019", size: "11", style: "normal" },
    ]
    this.putMulti(-20, 40, textArray, { align: 'center' }, doc);
    this.putText(-30, 40, "Form-A", { align: 'right', size: 10, style: "bold" }, doc);
    this.putText(0, 56, "Attendance and Room Superintendent's Report", { align: 'center', size: 11 }, doc);
    this.putText(20, 70, title, { align: 'center', size: 11 }, doc);
    this.putText(45, 100, "Department: " + data.departmentName, { align: 'left',size: 11 }, doc);
    this.putText(45, 118, "Course: " + data.name, { align: 'left',size: 11 }, doc);
    this.putText(45, 136, "Date: " + moment(date).format("Do MMMM YYYY"), { align: 'left',size: 11 }, doc);
    this.putText(-45, 118, "Course Code:" + data.code, { align: 'right',size: 11 }, doc);
    this.putText(-45, 136, "Time: " + time, { align: 'right',size: 11 }, doc);
    this.putText(79, 168, "Seat Number of the candidates present:", { size: 12 }, doc);
    this.putText(79, 155+25+15*len+33, "Seat Number of the candidates booked under malpractice:", { size: 12 }, doc);
    this.putText(79, 155+25+15*len+103, "Seat Number of the candidates absent:", { size: 12 }, doc);
  }

  putFormAFooter(data,len,doc,totalPresent,totalAbsent,totalMalpractice,totalOptions){
    this.putText(-54, 170+15*len-10, "Total:" + totalPresent, totalOptions, doc);
        this.putText(-54, 145+25+15*len+20+51, "Total:  ", totalOptions, doc);
        this.putText(-54, 145+25+15*len+90+51, "Total:" + totalAbsent, totalOptions, doc);
        this.putText(70, 145+25+15*len+90+92, "Total number of answer books enclosed : _________________", {size:11}, doc);
        this.putText(-50, 145+25+15*len+90+92, "Total number of packets : _________________", { align: 'right',size:11 }, doc);
        var text = "Deputy Chief Superintendent"
        doc.setLineWidth(0.6)
        this.putText(300, 145+25+15*len+90+112, text, { size: 8 }, doc);
        var textWidth = doc.getTextWidth(text);
        doc.line(300, 145+25+15*len+90+113, 300 + textWidth, 145+25+15*len+90+113)
        text = "Chief Superintendent"
        this.putText(560, 145+25+15*len+90+112, text, { size: 8 }, doc);
        textWidth = doc.getTextWidth(text);
        doc.line(560, 145+25+15*len+90+113, 560 + textWidth, 145+25+15*len+90+113);
        this.putText(70, 145+25+15*len+90+144, "Signature with date:", {size:11}, doc);
        this.putText(70, 145+25+15*len+90+174, "Name:", {size:11}, doc);
        doc.line(240, 145+25+15*len+90+144, 470, 145+25+15*len+90+144); doc.line(500, 145+25+15*len+90+144, 720, 145+25+15*len+90+144);
        doc.line(240, 145+25+15*len+90+174, 470, 145+25+15*len+90+174); doc.line(500, 145+25+15*len+90+174, 720, 145+25+15*len+90+174);
  }

  /**
   * Puts a line of text in a document
   * @param x X-coordinate in a page
   * @param y Y-coordinate in a page
   * @param text String to be printed
   * @param options Styling options
   * @param doc The document in which the texts must be printed
   */
  putText(x: any, y: any, text: string, options: any, doc: any) {
    var options = options || {};
    var defaults = {
      align: 'left',
      width: doc.internal.pageSize.width,
      size: 8,
      style: 'normal'
    }
    var settings = $.extend({}, defaults, options);
    var fontSize = settings.size;
    doc.setFontSize(fontSize);
    doc.setFontStyle(settings.style);
    var text_size = doc.getStringUnitWidth(text) * fontSize / doc.internal.scaleFactor;
    if (settings.align === 'center') {
      x += (settings.width - text_size) / 2;
    }
    else if (settings.align === 'right')
      x += (settings.width - text_size);
    doc.text(text, x, y);

  }

  /**
   * Puts A line of text with multiple styles
   * @param x X-coordinate in a page
   * @param y Y-coordinate in a page
   * @param textArray Array of strings to be printed
   * @param options Styling option
   * @param doc The document in which the texts must be printed
   */
  putMulti(x: any, y: any, textArray: Array<any>, options: any, doc: any) {
    // putText(x,y,doc){
    var options = options || {};
    var defaults = {
      align: 'left',
      width: doc.internal.pageSize.width
    }
    var text = "";
    textArray.forEach(e => { text += e.text });
    var settings = $.extend({}, defaults, options);
    var fontSize = doc.internal.getFontSize();
    var text_size = doc.getStringUnitWidth(text) * fontSize / doc.internal.scaleFactor;
    if (settings.align === 'center')
      x += (settings.width - text_size) / 2;
    else if (settings.align === 'right')
      x += (settings.width - text_size);

    textArray.forEach(e => {
      doc.setFontSize(e.size);
      doc.setFontStyle(e.style);
      doc.text(e.text, x, y);
      x += doc.getStringUnitWidth(e.text) * e.size / doc.internal.scaleFactor;
    })

  }

  excelFromTemplate(template: ExcelTemplate, data: any, filename: string,sheetName:string="Sheet 1"): void {
    var workBook: ExcelProper.Workbook = new Excel.Workbook();
    let worksheet = workBook.addWorksheet(sheetName, {
      properties: {
        defaultRowHeight: 100,
      },
    });
    var tableData: Array<any> = data[template.tableArray];
    worksheet.columns = template.tableValues;
    var headerRow = worksheet.getRow(template.tableStart)
    headerRow.values = template.tableHeader;
    if (template.tableHeaderStyle != undefined) {
      headerRow.eachCell(cell => {
        cell.style = template.tableHeaderStyle
      });
    }
    // Fixed Header
    template.fixedHeader.forEach(e => {
      var cell = worksheet.getCell(e.loc);
      cell.style = e.style;
      cell.value = e.value;
    });
    //Dynamic header
    template.dynamicHeader.forEach(d => {
      var cell = worksheet.getCell(d.loc);
      cell.value = d.prefix + data[d.dynamicVar] + d.suffix;
      cell.style = d.style
    });
    // Table Data
    worksheet.addRows(tableData);
    for (var i = 1; i <= tableData.length; i++) {
      let row = worksheet.getRow(template.tableStart + i);
      for (var j = 1; j <= worksheet.columnCount; j++) {
        worksheet.getCell(row.number,j).border = {bottom: {style: 'thin'},top: {style: 'thin'}, left: {style: 'thin'},right:{style: 'thin'} }
      }
      row.height = template.tableStyle.rowHeight;
      
    }

   

    // Merges
    template.merges.forEach(m => {
      worksheet.mergeCells(m);
    });
    // Columns
    var cols = worksheet.columns
    template.colWidths.forEach((c, i) => {
      cols[i].width = c
    });
    var footerStart = worksheet.rowCount;
    // Fixed Footer
    template.fixedFooter.forEach(f => {
      var cell = worksheet.getRow(f.loc[0] + footerStart).getCell(f.loc[1]);
      cell.value = f.value;
      cell.style = f.style;
    });
    // Dynamic Footer
    template.dynamicFootfer.forEach(f => {
      var cell = worksheet.getRow(f.loc[0] + footerStart).getCell(f.loc[1]);
      cell.value = f.prefix + data[f.dynamicVar] + f.suffix;
      cell.style = f.style;
    });
    // Footer Merges
    template.footerMerges.forEach(range => {
      worksheet.mergeCells(
        range[0] + footerStart,
        range[1],
        range[2] + footerStart,
        range[3]
      );
    });
    template.footerRowHeights.forEach((row, i) => {
      worksheet.getRow(footerStart + i + 1).height = row
    });

    workBook.xlsx.writeBuffer().then(data => {
      const blob = new Blob([data], { type: this.blobType });
      FileSaver.saveAs(blob, filename);
    });
  }

  /**
   * function used to generate and download code stickers
   * @param codes Array of codes generated for packets
   */
  downloadCodes(codes: Array<string>, name: string,code,isPacket?: boolean) {
    var doc: PDF = new PDF("p", "mm", 'a4');
    doc.setLineWidth(0.2);
    doc.setFontSize(11);
    doc.setFontStyle('bold');
    var x = 65;
    var y = 34;
    var col = 0; var row = 0;var pageNo = 2;
    if(isPacket){
      doc.setFontSize(12);
      this.getAlignmentValueAny(-20, 10, code +" - Packets" , { align: 'center', }, doc);
      doc.setFontSize(11);
    }
    var that = this;
    doc.setFontSize(8);
    doc.setFontStyle('normal');
    that.getAlignmentValueAny(-20, 10, "Page-1-" +code, { align: 'right', }, doc);
    doc.setFontSize(11);
    doc.setFontStyle('bold');
    function addPage(doc){
      doc.addPage();
      doc.setFontSize(8);
      doc.setFontStyle('normal');
      that.getAlignmentValueAny(-20, 10, "Page-" + pageNo+"-"+code, { align: 'right', }, doc);
      doc.setFontSize(11);
      doc.setFontStyle('bold');
      pageNo++;
    }
    codes.forEach(element => {
      // doc.roundedRect(15 + x * col, 14 + y * row, 50, 32, 4, 4, 'S');
      this.getAlignmentValueAny(9.5 + x * col + 14, 12 + y * row + 18, element, { align: 'center', width: 34 }, doc);
      col != 0 && col % 2 == 0 ? (row++, col = 0) : col++;
      if (row != 1 && (row - 1) % 7 == 0) { row = 0, col = 0; addPage(doc) }
    })
    doc.save(name + ".pdf");

  }

  /**
   * fuction used to align a text in the pdf doc
   * @param x x-position
   * @param y y-position
   * @param text the text to be added
   * @param options used for alignment: center | left | right
   * @param doc the pdf variable to which the string must be appended
   */
  getAlignmentValueAny(x: any, y: any, text: string, options: any, doc: any) {
    var options = options || {};
    var defaults = {
      align: 'left',
      width: doc.internal.pageSize.width
    }
    var settings = $.extend({}, defaults, options);
    var fontSize = doc.internal.getFontSize();
    var text_size = doc.getStringUnitWidth(text) * fontSize / doc.internal.scaleFactor;
    if (settings.align === 'center')
      x += (settings.width - text_size) / 2;
    else if (settings.align === 'right')
      x += (settings.width - text_size);
    doc.text(text, x, y);
  }



  /**
   * Downloads an excel of CIE for a subject
   * @param subjectData the details of the CIE of a subject section with three level hierarchy
   * {   subjectName:"Mechanics", isIntegrated:bool  sections:[ { ....,students:[{}],.... }  ]   }
   */
  public downloadEligibility(subjectData: Vo): void {
    var excelMeta;
    if (subjectData["isIntegrated"] == true) { excelMeta = E_INTEGRATED_SUBJECT; }
    else { excelMeta = E_NONINTEGRATED_SUBJECT }
    var merges = excelMeta.MERGES;
    var workBook: ExcelProper.Workbook = new Excel.Workbook();
    var sectionsData = subjectData["sections"] as Vo[];
    var hasCIEShortage: boolean[] = [];
    var hasAttendanceShortage: boolean[] = [];
    var hasTotalCIEShortage: boolean[] = [];
    var hasLabAttendanceShortage: boolean[] = [];
    var i = 0;
    var j = 0;
    var k = 0;
    var x = 0;
    var y = 0;

    sectionsData.forEach(section => {
      section["code"] = subjectData["code"]
      section["name"] = subjectData["name"]
      section["level"] = subjectData["level"]
      var workSheet = workBook.addWorksheet(section["section"] as string);
      merges.forEach(range => {
        workSheet.mergeCells(range);
      });

      // Header
      let headerValues = excelMeta.HEADER;
      headerValues.forEach(header => {
        let cell = workSheet.getCell(header.loc)
        cell.value = header.value;
        cell.style.alignment = { horizontal: header.align }
        cell.style.font = { size: header.fontSize }
      });
      let headerData = excelMeta.HEADER_DATA;
      Object.keys(headerData).forEach(hData => {
        let cell = workSheet.getCell(hData);
        cell.value = section[headerData[hData]] as string;
        cell.style = { font: { bold: true } };
      });

      // Data
      let tableStart = workSheet.rowCount + 2
      workSheet.getRow(tableStart).values = excelMeta.TABLE_HEADER_NAMES;
      workSheet.getRow(tableStart).font = { bold: true }
      workSheet.columns = excelMeta.TABLE_ROWS;
      let studentArray = section["students"] as Vo[];
      studentArray.forEach((student, index) => {
        student["sl"] = index + 1;
        if (student["isCondoned"]) { student["isCondoned"] = "CONDONED" }
        else { student["isCondoned"] = "NOT CONDONED" }
        if (student["eligibility"]) { student["eligibility"] = "ELIGIBLE" }
        else { student["eligibility"] = "NOT ELIGIBLE" }
        workSheet.addRow(student);
        hasCIEShortage.push(student["hasCieShortage"] as boolean);
        hasAttendanceShortage.push(student["hasAttendanceShortage"] as boolean);
        hasTotalCIEShortage.push(student["hasCieShortage"] as boolean);
        hasLabAttendanceShortage.push(student["hasAttendanceShortage"] as boolean);
      });

      
      if (subjectData["isIntegrated"] == true) {
        workSheet.getColumn("cieMarks").eachCell(cell => {
          if (parseInt(cell.row) >= tableStart+1) {
            if (hasCIEShortage[i]) {
              cell.style = { font: { bold: true, color: { argb: '00FF0000' } } }
            }
            i++;
          }
        });

        workSheet.getColumn("theoryCie").eachCell(cell => {
       if (parseInt(cell.row) >= tableStart+1) {
            if (hasTotalCIEShortage[j]) {
              cell.style = { font: { bold: true, color: { argb: '00FF0000' } } }
            }
            j++;
          }
        });

        workSheet.getColumn("labCie").eachCell(cell => {
          if (parseInt(cell.row) >= tableStart+1) {
            if (hasTotalCIEShortage[k]) {
              cell.style = { font: { bold: true, color: { argb: '00FF0000' } } }
            }
            k++;
          }
        });

        workSheet.getColumn("theoryAttendance").eachCell(cell => {
          if (parseInt(cell.row) >= tableStart+1) {
            if (hasAttendanceShortage[x] && cell.value < 85) {
              cell.style = { font: { bold: true, color: { argb: '00FF0000' } } }
            }
            x++;
          }
        });

        workSheet.getColumn("labAttendance").eachCell(cell => {
          if (parseInt(cell.row) >= tableStart+1) {
            if (hasLabAttendanceShortage[y] && cell.value < 85) {
              cell.style = { font: { bold: true, color: { argb: '00FF0000' } } }
            }
            y++;
          }
        });
      }

      else{
        workSheet.getColumn("cieMarks").eachCell(cell => {
          if (parseInt(cell.row) >= tableStart+1) {
            if (hasCIEShortage[i]) {
              cell.style = { font: { bold: true, color: { argb: '00FF0000' } } }
            }
            i++;
          }
        });

        workSheet.getColumn("overallAttendance").eachCell(cell => {
          if (parseInt(cell.row) >= tableStart+1) {
            if (hasAttendanceShortage[j]) {
              cell.style = { font: { bold: true, color: { argb: '00FF0000' } } }
            }
            j++;
          }
        });
      }

      workSheet.getColumn("eligibility").eachCell(cell => {
        switch (cell.value) {
          case "NOT ELIGIBLE":
            cell.style = { font: { bold: true, color: { argb: '00FF0000' } } }
            break;
          case "ELIGIBLE":
            cell.style = { font: { bold: true, color: { argb: '00008000' } } }
            break;
          default:
            break;
        }
      })

      // Footer
      let footerStart = workSheet.rowCount + 2;
      let fixedFooter = excelMeta.FOOTER
      fixedFooter.forEach(row => {
        let rowCount = footerStart + row.row;
        let footerRow = workSheet.getRow(rowCount)
        footerRow.values = row.value
      });
      let footerMerges = excelMeta.FOOTER_MERGES;
      footerMerges.forEach(range => {
        workSheet.mergeCells(
          range.rowStart + footerStart,
          range.colStart,
          range.rowEnd + footerStart,
          range.colEnd
        );
      });
    });

    // Save
    workBook.xlsx.writeBuffer().then(data => {
      const blob = new Blob([data], { type: this.blobType });
      FileSaver.saveAs(blob, subjectData['level'] + " - " + subjectData['name']);
    });

  }

  /**
  * Downloads halltickets
  * @param data input data for the hallticket
  * @param filename The name of the file to be downloaded
  */
  downloadGradeCard(data) {
    var gradeCard = new jsPDF('p', 'pt', 'a4');
    var filename = "Grade Card - " + data.usn
    gradeCard.setProperties({
      title: filename
    });

    gradeCard.setLineWidth(3);
    gradeCard.setDrawColor(0, 0, 255);
    gradeCard.rect(20, 30, 555, 350); // outer blue box
    gradeCard.addImage(this.logo, 'png', 110, 35, 28, 28)
    gradeCard.addImage(this.wm, 'png', 172, 105, 250, 250);
    var path = 'assets/images/portraits/' + data.usn.toString() + '.bmp';
    var person = new Image()
    try {
      person.src = path;
      gradeCard.addImage(person, 'bmp', 470, 105, 40, 50)
    }
    catch (error) {

    }
    gradeCard.setFontSize(14);
    gradeCard.setFontType("bold");
    gradeCard.setTextColor(0, 0, 0);
    this.getAlignmentValueAny(10, 53, "B.M.S. COLLEGE OF ENGINEERING, Bengaluru-19", { align: 'center', width: '595' }, gradeCard);
    gradeCard.setFontSize(7);
    gradeCard.setFontType("normal");
    gradeCard.setTextColor(0, 0, 255);
    gradeCard.setFontSize(9);
    this.getAlignmentValueAny(0, 63, "Autonomous Institute under VTU, Belagavi", { align: 'center', width: '595' }, gradeCard);
    gradeCard.setTextColor(255, 0, 0);
    this.getAlignmentValueAny(0, 76, "ADMISSION TICKET FOR - B.E. /B.ARCH/M.TECH/MBA/MCA", { align: 'center', width: '595' }, gradeCard);
    gradeCard.setTextColor(0, 100, 0);
    this.getAlignmentValueAny(0, 86, "Semester End Examination – December -2019 /Jan-2020", { align: 'center', width: '595' }, gradeCard);
    gradeCard.setDrawColor(0, 0, 255);
    gradeCard.rect(20, 30, 555, 65);

    gradeCard.setTextColor(0, 50, 123);
    gradeCard.setFontSize(8);
    gradeCard.setFontType("bold");
    this.getAlignmentValueAny(45, 110, "USN: " + data.usn, { align: 'left', width: '595' }, gradeCard);
    this.getAlignmentValueAny(45, 125, "Name: " + data.studentName, { align: 'left', width: '595' }, gradeCard);
    this.getAlignmentValueAny(45, 140, "Semester: " + data.levelName, { align: 'left', width: '595' }, gradeCard);
    this.getAlignmentValueAny(45, 155, "Branch: " + data.departmentName, { align: 'left', width: '595' }, gradeCard);
    gradeCard.setDrawColor(0, 0, 255);
    gradeCard.rect(20, 30, 555, 135);

    var row = [];
    let column = ["Course Code", "Course Title", "Credits", "Grade", "Grade Points"];
    for (var j = 0; j < data.subjectDetails.length; j++) {
      row.push([
        data.subjectDetails[j].subjectCode,
        data.subjectDetails[j].subjectName,
        data.subjectDetails[j].credits,
        data.subjectDetails[j].grade,
        data.subjectDetails[j].gradePoints
      ]);
    }
    gradeCard.setDrawColor(236, 128, 38);
    gradeCard.setLineWidth(2);
    gradeCard.rect(30, 172, 535, 58 + ((j - 1) * 13));
    var cellStyles = {
      fontSize: 8,
      fillColor: false,
      textColor: 0,
      halign: 'center',
      valign: 'middle',
      lineWidth: 0.3,
      lineColor: 0,
      minCellHeight: 0,
      cellPadding: 2,
    }

    var headCellStyles = {
      fontSize: 8,
      fillColor: false,
      textColor: 0,
      halign: 'center',
      valign: 'middle',
      lineWidth: 0.3,
      lineColor: 0,
      minCellHeight: 0,
      cellPadding: 12,
    }

    gradeCard.autoTable(
      column,
      row,
      {
        startY: 177,
        headStyles: headCellStyles,
        bodyStyles: cellStyles, styles:
          cellStyles,
        alternateRowStyles: cellStyles,
        didParseCell: data => {
          if (data.column.dataKey === 3 && data.section === "body") {
            if (data.row.raw[3] == "F") {
              data.cell.styles.textColor = [255, 0, 0];
              data.cell.styles.fontStyle = "bold";
            }
            else if (data.row.raw[3] == "W") {
              data.cell.styles.textColor = [255, 0, 0];
              data.cell.styles.fontStyle = "bold";
            }
            else if (data.row.raw[3] == "I") {
              data.cell.styles.textColor = [0, 128, 0];
              data.cell.styles.fontStyle = "bold";
            }
            else if (data.row.raw[3] == "X") {
              data.cell.styles.textColor = [0, 128, 0];
              data.cell.styles.fontStyle = "bold";
            }
            else {
              data.cell.styles.textColor = 0;
              data.cell.styles.fontStyle = "bold";
            }
          }
        }
      }
    );

    gradeCard.setFontSize(8);
    gradeCard.setFontType("normal");
    this.getAlignmentValueAny(55, 370, "Obtained Credits: " + data.obtainedCredits, { align: 'left', width: '595' }, gradeCard);
    this.getAlignmentValueAny(0, 370, "SGPA: " + data.sgpa, { align: 'center', width: '595' }, gradeCard);
    this.getAlignmentValueAny(-55, 370, "CGPA: " + data.cgpa, { align: 'right', width: '595' }, gradeCard);
    gradeCard.save(filename + '.pdf');
  }

  getGradeCard(students: Array<any>, programName: string, dateOfIssue: string, base64string?: string) {
    console.log(students,programName,  dateOfIssue)
    var date = moment(dateOfIssue).format('DD-MMM-YYYY');
    if (students[0].degreeId == 1) {
      this.getBEGradeCard(students, programName, date, base64string);
    }
    else if (students[0].degreeId == 2 || students[0].degreeId == 4) {
      this.getMbaMcaGradeCard(students, programName, date, base64string);
    }
    else {
      this.getMtechGradeCard(students, programName, date, base64string);
    }
  }

  getMtechGradeCard(students: Array<any>, programName: string, dateOfIssue: string, base64string?: string) {
    var template = new Image()
    template.src = 'assets/images/mtechGradeCard.jpg';
    var doc = new jsPDF('l', 'mm', 'a4');
    doc.deletePage(1);
    students.forEach(student => {
      doc.addPage();

      doc.addImage(template, 'jpg', 0, 0, 297, 210);
      var path = 'assets/images/portraits/' + student.usn.toString() + '.jpg';
      var person = new Image()
      if (base64string) {
        person.src = base64string;
        doc.addImage(person, 'jpg', 255, 47, 21, 25);
      }
      else {
        try {
          person.src = path;
          doc.addImage(person, 'jpg', 255, 47, 21, 25);
        }
        catch (error) {

        }
      }

      doc.setFontType("bold");
      doc.setFont('Times')
      doc.setFontSize(15);
      doc.setTextColor('red');
      var program = programName.split(' ').slice(2).join(' ')
      this.getAlignmentValueAny(-2, 58, program, { align: 'center', width: '297' }, doc);


      doc.setFontSize(10);
      doc.setTextColor(165, 35, 120);
      doc.text(student.studentName, 62.3, 62.1);

      student.guardianDetails.forEach(guardian => {
        if (guardian.relationType == 'Mother') {
          doc.text(guardian.name, 62.3, 67);
        }
        else {
          doc.text(guardian.name, 62.3, 72.3);
        }
      });

      doc.text(student['usn'], 66.8, 78);
      var levelName = student.sessionSemester;
      doc.text(levelName, 202.5, 67.55);

      /**
       * Using Hardcoded Value for now due to client requirements
       * Please change Later!
       * doc.text(student.seasonName, 202.5, 73.1);
       */
      doc.text(String(student.academicYear).split('-')[0] + ' - ' + String(student.academicYear).split('-')[1].slice(3), 202.5, 73.1);

      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.setFontType("normal");

      this.getAlignmentValueAny(-133.6, 170.2, student.registeredCredits + "0", { align: 'right', width: '297' }, doc);
      this.getAlignmentValueAny(-133.6, 176.2, student.obtainedCredits + "0", { align: 'right', width: '297' }, doc);
      this.getAlignmentValueAny(-133.6, 187.7, student.totalCredits, { align: 'right', width: '297' }, doc);
      doc.setFontType("bold");
      this.getAlignmentValueAny(-133.6, 181.6, student.sgpa, { align: 'right', width: '297' }, doc);
      this.getAlignmentValueAny(-133.6, 193.8, student.cgpa, { align: 'right', width: '297' }, doc);

      doc.setTextColor(12, 32, 226);
      doc.setFontType("normal");

      this.getAlignmentValueAny(79.2, 193.8, dateOfIssue, { align: 'center', width: '20' }, doc);
      doc.addImage(this.principal_signature, 'jpg', 232.2, 171.5, 43.4, 17);
      doc.text(student.barcode, 34.7, 193.38);
      var row = [];
      let column = [
        { key: "sl", title: "Sl. No." },
        { key: "cc", title: "Course Code" },
        { key: "ct", title: "Course Title" },
        { key: "cd", title: "Credits" },
        { key: "g", title: "Grade Awarded" },
        { key: "gp", title: "Grade Points" },
      ];
      var subjectDetails = student.academicDetails;
      function sortByProperty(property) {
        return function (a, b) {
          if (a[property] > b[property])
            return 1;
          else if (a[property] < b[property])
            return -1;
          return 0;
        }
      }
      subjectDetails.sort(sortByProperty("slno"));

      for (var j = 0; j < subjectDetails.length; j++) {
        row.push([
          j + 1,
          subjectDetails[j].subjectCode,
          subjectDetails[j].subjectName,
          subjectDetails[j].credits + ".00",
          subjectDetails[j].grade,
          subjectDetails[j].gradePoints * subjectDetails[j].credits,
        ])
      }

      var cellStyles = {
        fontSize: 11,
        font: 'times',
        fillColor: false,
        textColor: 0,
        halign: 'left',
        valign: 'middle',
        lineWidth: 0.4,
        lineColor: 0,
        minCellHeight: 0,
        cellPadding: 1.3,
        fontStyle: "bold"
      }

      var headCellStyles = {
        fontSize: 12,
        fillColor: false,
        textColor: 'red',
        font: 'Arial',
        halign: 'center',
        valign: 'middle',
        lineWidth: 0.4,
        lineColor: 0,
        minCellHeight: 0,
        cellPadding: 1.3,
      }

      doc.autoTable(
        column,
        row,
        {
          startY: 83,
          headStyles: headCellStyles,
          bodyStyles: cellStyles, styles:
            cellStyles,
          tableLineColor: [12, 32, 226],
          tableLineWidth: 0.5,
          alternateRowStyles: cellStyles,
          didParseCell: data => {
            if (data.section !== "body") {
              data.cell.styles.font = "helvetica";
              data.cell.styles.fontStyle = "bold";
            }
          },
          tableWidth: 245,
          margin: { left: 26 },
          columnStyles: {
            cc: { columnWidth: 40, halign: 'center', },
            sl: { columnWidth: 25, halign: 'center', },
            cd: { columnWidth: 25, halign: 'center', },
            gp: { columnWidth: 25, halign: 'center', },
            g: { columnWidth: 25, halign: 'center', },
          }
        }
      );

      var barcode = document.createElement("canvas");
      barcode.setAttribute("id", "barcode");
      barcode.setAttribute("hidden", "true");
      document.body.appendChild(barcode);

      var barcodeImage = new JsBarcode('#barcode', student.barcode);
      var canvas = document.getElementsByTagName('canvas')
      var context = canvas[0].getContext('2d');

      var data = context.getImageData(0, 0, canvas[0].width - 50, canvas[0].height);
      context.fillStyle = "#FFFFFF";
      context.fillRect(0, 0, canvas[0].width, canvas[0].height);
      var tempCanvas = document.createElement("canvas"),
        tCtx = tempCanvas.getContext("2d");

      tempCanvas.width = 200;
      tempCanvas.height = 50;
      tCtx.drawImage(canvas[0], 0, 0);

      var jpegUrl = tempCanvas.toDataURL("image/png")

      doc.addImage(jpegUrl, 'png', 21, 171);
      document.body.removeChild(document.getElementById('barcode'))

    });
    doc.save(programName + ' - ' + students[0].levelName + '.pdf');
  }


  getMtechFinalGradeCard(students: Array<any>, programName: string, dateOfIssue: string, base64string?: string) {
    var template = new Image()
    template.src = 'assets/images/finalMtechGradeCard.jpg';
    var doc = new jsPDF('l', 'mm', 'a4');
    doc.deletePage(1);
    students.forEach(student => {
      doc.addPage();

      doc.addImage(template, 'jpg', 0, 0, 297, 210);
      var path = 'assets/images/portraits/' + student.usn.toString() + '.jpg';
      var person = new Image()
      if (base64string) {
        person.src = base64string;
        doc.addImage(person, 'jpg', 255, 47, 21, 25);
      }
      else {
        try {
          person.src = path;
          doc.addImage(person, 'jpg', 255, 47, 21, 25);
        }
        catch (error) {

        }
      }

      doc.setFontType("bold");
      doc.setFont('Times')
      doc.setFontSize(15);
      doc.setTextColor('red');
      var program = programName.split(' ').slice(2).join(' ')
      this.getAlignmentValueAny(-2, 58, program, { align: 'center', width: '297' }, doc);


      doc.setFontSize(10);
      doc.setTextColor(165, 35, 120);
      doc.text(student.studentName, 62.3, 62.1);

      student.guardianDetails.forEach(guardian => {
        if (guardian.relationType == 'Mother') {
          doc.text(guardian.name, 62.3, 67);
        }
        else {
          doc.text(guardian.name, 62.3, 72.3);
        }
      });

      doc.text(student['usn'], 66.8, 78);
      var levelName = student.sessionSemester;
      doc.text(levelName, 202.5, 67.55);

      /**
       * Using Hardcoded Value for now due to client requirements
       * Please change Later!
       * doc.text(student.seasonName, 202.5, 73.1);
       */
      doc.text(String(student.academicYear).split('-')[0] + ' - ' + String(student.academicYear).split('-')[1].slice(3), 202.5, 73.1);
      doc.setFontSize(11);

      doc.setTextColor(12, 32, 226);
      doc.setFontType("normal");
      this.getAlignmentValueAny(79.2, 192.8, dateOfIssue, { align: 'center', width: '20' }, doc);
      doc.text(student.barcode, 34.7, 192.48);
      doc.addImage(this.principal_signature, 'jpg', 244.5, 171.5, 36.7, 17);
      var row = [];
      let column = [
        { key: "sl", title: "Sl. No." },
        { key: "cc", title: "Course Code" },
        { key: "ct", title: "Course Title" },
        { key: "cd", title: "Credits" },
        { key: "g", title: "Grade Awarded" },
        { key: "gp", title: "Grade Points" },
      ];
      var subjectDetails = student.academicDetails;
      function sortByProperty(property) {
        return function (a, b) {
          if (a[property] > b[property])
            return 1;
          else if (a[property] < b[property])
            return -1;
          return 0;
        }
      }
      subjectDetails.sort(sortByProperty("slno"));

      for (var j = 0; j < subjectDetails.length; j++) {
        row.push([
          j + 1,
          subjectDetails[j].subjectCode,
          subjectDetails[j].subjectName,
          subjectDetails[j].credits + ".00",
          subjectDetails[j].grade,
          subjectDetails[j].gradePoints * subjectDetails[j].credits,
        ])
      }

      var cellStyles = {
        fontSize: 11,
        font: 'times',
        fillColor: false,
        textColor: 0,
        halign: 'left',
        valign: 'middle',
        lineWidth: 0.4,
        lineColor: 0,
        minCellHeight: 0,
        cellPadding: 1.3,
        fontStyle: "normal"
      }

      var headCellStyles = {
        fontSize: 12,
        fillColor: false,
        textColor: 'red',
        font: 'Arial',
        halign: 'center',
        valign: 'middle',
        lineWidth: 0.4,
        lineColor: 0,
        minCellHeight: 0,
        cellPadding: 1.3,
      }

      doc.autoTable(
        column,
        row,
        {
          startY: 83,
          headStyles: headCellStyles,
          bodyStyles: cellStyles, styles:
            cellStyles,
          tableLineColor: [12, 32, 226],
          tableLineWidth: 0.5,
          alternateRowStyles: cellStyles,
          didParseCell: data => {
            if (data.section !== "body") {
              data.cell.styles.font = "helvetica";
              data.cell.styles.fontStyle = "bold";
            }
          },
          tableWidth: 245,
          margin: { left: 26 },
          columnStyles: {
            cc: { columnWidth: 40, halign: 'center', },
            sl: { columnWidth: 25, halign: 'center', },
            cd: { columnWidth: 25, halign: 'center', },
            gp: { columnWidth: 25, halign: 'center', },
            g: { columnWidth: 25, halign: 'center', },
          }
        }
      );

      let tableY = doc.lastAutoTable.finalY;
      var title = student.projectTitle;
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(12);
      this.getAlignmentValueAny(26,tableY + 8,`Title of the Project : ${title}`,{ align: 'left', width: '20' }, doc);
      this.getAlignmentValueAny(26,tableY + 20,`Credits Registered : ${student.registeredCredits + '0'}`,{ align: 'left', width: '297' }, doc);
      this.getAlignmentValueAny(32,tableY + 27, `Credits Earned : ${student.obtainedCredits + '0'}`,{ align: 'left', width: '297' }, doc);
      this.getAlignmentValueAny(120, tableY + 25, `Cumulative Credits Earned : ${student.totalCredits}`,{ align: 'left', width: '297' }, doc);
      doc.setFontType('bold');
      this.getAlignmentValueAny(220, tableY + 20, `SGPA : ${student.sgpa}`, { align: 'left', width: '297'}, doc);
      this.getAlignmentValueAny(220, tableY + 25, `CGPA : ${student.cgpa}`, {align: 'left',width: '297'}, doc);
      this.getAlignmentValueAny(102,163,`Results of I to IV Semesters :`,{align: 'left',width: '297'}, doc);
      //-------Second table----------------
      var rows = [];
      let columns = ['', '', '', '', ''];
      let tempFirstRow = ['Semester'];
      let tempSecondRow = ['SGPA'];
      let tempThirdRow = ['CGPA'];
      for (var i = 0; i < student.previousSemesterGPADetails.length; i++) {
        tempFirstRow.push(student.previousSemesterGPADetails[i].levelName.split(' ')[0]);
        tempSecondRow.push(Number(student.previousSemesterGPADetails[i].sgpa).toFixed(2));
        tempThirdRow.push(Number(student.previousSemesterGPADetails[i].cgpa).toFixed(2));
      }
      rows.push(tempFirstRow);
      rows.push(tempSecondRow);
      rows.push(tempThirdRow);
      var result = 'Pass'
      if(Number(student.cgpa) >= 7.75){
        result = 'FCD'
      } else if (Number(student.cgpa) >= 6.65 && Number(student.cgpa) <= 7.74){
        result = 'FC'
      } else if (Number(student.cgpa) >= 5.75 && Number(student.cgpa) <= 6.64){
        result = 'SC'
      }
      let tempFourthRow = ['Result of the Degree', result, '', '', ''];
      rows.push(tempFourthRow);
      var cellStyle = {
        fontSize: 12,
        fillColor: false,
        textColor: 0,
        halign: 'left',
        valign: 'middle',
        lineWidth: 0.3,
        lineColor: 0,
        minCellHeight: 0,
        cellPadding: 1
      };
      var headCellStyle = {
        fontSize: 8,
        fillColor: false,
        textColor: 0,
        halign: 'center',
        valign: 'middle',
        lineWidth: 0.3,
        lineColor: 0,
        minCellHeight: 0,
        cellPadding: 1
      };
      doc.autoTable(columns, rows, {
        margin: { left: 102 },
        tableWidth: 145,
        startY: 165,
        headStyles: headCellStyle,
        bodyStyles: cellStyle,
        styles: cellStyle,
        alternateRowStyles: cellStyle,
        didParseCell: function(data) {
          var rows = data.table.body;
          if (data.row.index === rows.length - 1 && data.column.index == 1) {
            data.cell.colSpan = 4;
            data.cell.styles.halign = 'center';
          }
        },
        columnStyles: {
          0: { cellWidth: 41, fontStyle: 'normal' },
          1: { cellWidth: 13, halign: 'center', fontStyle: 'normal' },
          2: { cellWidth: 13, halign: 'center', fontStyle: 'normal' },
          3: { cellWidth: 13, halign: 'center', fontStyle: 'normal' },
          4: { cellWidth: 13, halign: 'center', fontStyle: 'normal' }
        }
      });
      // ------Second table end-----
      
      var barcode = document.createElement("canvas");
      barcode.setAttribute("id", "barcode");
      barcode.setAttribute("hidden", "true");
      document.body.appendChild(barcode);

      var barcodeImage = new JsBarcode('#barcode', student.barcode);
      var canvas = document.getElementsByTagName('canvas')
      var context = canvas[0].getContext('2d');

      var data = context.getImageData(0, 0, canvas[0].width - 50, canvas[0].height);
      context.fillStyle = "#FFFFFF";
      context.fillRect(0, 0, canvas[0].width, canvas[0].height);
      var tempCanvas = document.createElement("canvas"),
        tCtx = tempCanvas.getContext("2d");

      tempCanvas.width = 200;
      tempCanvas.height = 50;
      tCtx.drawImage(canvas[0], 0, 0);

      var jpegUrl = tempCanvas.toDataURL("image/png")

      doc.addImage(jpegUrl, 'png', 21, 171);
      document.body.removeChild(document.getElementById('barcode'))

    });
    doc.save(programName + ' - ' + students[0].levelName + '.pdf');
  }

  getMbaMcaGradeCard(students: Array<any>, programName: string, dateOfIssue: string, base64string: string) {
    var template = new Image()
    template.src = 'assets/images/mbaMcaGradeCard.jpg';
    var doc = new jsPDF('l', 'mm', 'a4');
    doc.deletePage(1);
    students.forEach(student => {
      doc.addPage();

      doc.addImage(template, 'jpg', 0, 0, 297, 210);
      var path = 'assets/images/portraits/' + student.usn.toString() + '.jpg';
      var person = new Image()
      if (base64string) {
        person.src = base64string;
        doc.addImage(person, 'jpg', 255, 47, 21, 25);
      }
      else {
        try {
          person.src = path;
          doc.addImage(person, 'jpg', 255, 47, 21, 25);
        }
        catch (error) {

        }
      }

      doc.setFontType("bold");
      doc.setFont('Times')
      doc.setFontSize(15);
      doc.setTextColor('red');
      this.getAlignmentValueAny(0, 52, student.departmentName, { align: 'center', width: '297' }, doc);


      doc.setFontSize(10);
      doc.setTextColor(165, 35, 120);
      doc.text(student.studentName, 62.3, 62.1);

      student.guardianDetails.forEach(guardian => {
        if (guardian.relationType == 'Mother') {
          doc.text(guardian.name, 62.3, 67);
        }
        else {
          doc.text(guardian.name, 62.3, 72.3);
        }
      });

      doc.text(student['usn'], 66.8, 78);
      var levelName = student.sessionSemester;
      doc.text(levelName, 202.5, 67.55);

      /**
       * Using Hardcoded Value for now due to client requirements
       * Please change Later!
       * doc.text(student.seasonName, 202.5, 73.1);
       */
      console.log(String(student.academicYear).split('-')[1].slice(3))
      doc.text(String(student.academicYear).split('-')[0] + ' - ' + String(student.academicYear).split('-')[1].slice(3), 202.5, 73.1);

      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.setFontType("normal");

      this.getAlignmentValueAny(-133.6, 170.2, student.registeredCredits + "0", { align: 'right', width: '297' }, doc);
      this.getAlignmentValueAny(-133.6, 176.2, student.obtainedCredits + "0", { align: 'right', width: '297' }, doc);
      this.getAlignmentValueAny(-133.6, 187.7, student.totalCredits, { align: 'right', width: '297' }, doc);
      doc.setFontType("bold");
      this.getAlignmentValueAny(-133.6, 181.6, student.sgpa, { align: 'right', width: '297' }, doc);
      this.getAlignmentValueAny(-133.6, 193.8, student.cgpa, { align: 'right', width: '297' }, doc);

      doc.setTextColor(12, 32, 226);
      doc.setFontType("normal");

      this.getAlignmentValueAny(79.2, 193.8, dateOfIssue, { align: 'center', width: '20' }, doc);
      doc.addImage(this.principal_signature, 'jpg', 235.2, 171.5, 38, 17);
      doc.text(student.barcode, 34.7, 193.38);
      var row = [];
      let column = [
        { key: "sl", title: "Sl. No." },
        { key: "cc", title: "Course Code" },
        { key: "ct", title: "Course Title" },
        { key: "cd", title: "Credits" },
        { key: "g", title: "Grade Awarded" },
        { key: "gp", title: "Grade Points" },
      ];
      var subjectDetails = student.academicDetails;
      function sortByProperty(property) {
        return function (a, b) {
          if (a[property] > b[property])
            return 1;
          else if (a[property] < b[property])
            return -1;
          return 0;
        }
      }
      subjectDetails.sort(sortByProperty("slno"));

      for (var j = 0; j < subjectDetails.length; j++) {
        row.push([
          j + 1,
          subjectDetails[j].subjectCode,
          subjectDetails[j].subjectName,
          subjectDetails[j].credits + ".00",
          subjectDetails[j].grade,
          subjectDetails[j].gradePoints * subjectDetails[j].credits,
        ])
      }

      var cellStyles = {
        fontSize: 11,
        font: 'times',
        fillColor: false,
        textColor: 0,
        halign: 'left',
        valign: 'middle',
        lineWidth: 0.4,
        lineColor: 0,
        minCellHeight: 0,
        cellPadding: 1.3,
        fontStyle: "bold"
      }

      var headCellStyles = {
        fontSize: 12,
        fillColor: false,
        textColor: 'red',
        font: 'Arial',
        halign: 'center',
        valign: 'middle',
        lineWidth: 0.4,
        lineColor: 0,
        minCellHeight: 0,
        cellPadding: 1.3,
      }

      doc.autoTable(
        column,
        row,
        {
          startY: 83,
          headStyles: headCellStyles,
          bodyStyles: cellStyles, styles:
            cellStyles,
          tableLineColor: [12, 32, 226],
          tableLineWidth: 0.5,
          alternateRowStyles: cellStyles,
          didParseCell: data => {
            if (data.section !== "body") {
              data.cell.styles.font = "helvetica";
              data.cell.styles.fontStyle = "bold";
            }
          },
          tableWidth: 245,
          margin: { left: 26 },
          columnStyles: {
            cc: { columnWidth: 40, halign: 'center', },
            sl: { columnWidth: 25, halign: 'center', },
            cd: { columnWidth: 25, halign: 'center', },
            gp: { columnWidth: 25, halign: 'center', },
            g: { columnWidth: 25, halign: 'center', },
          }
        }
      );

      var barcode = document.createElement("canvas");
      barcode.setAttribute("id", "barcode");
      barcode.setAttribute("hidden", "true");
      document.body.appendChild(barcode);

      var barcodeImage = new JsBarcode('#barcode', student.barcode);
      var canvas = document.getElementsByTagName('canvas')
      var context = canvas[0].getContext('2d');

      var data = context.getImageData(0, 0, canvas[0].width - 50, canvas[0].height);
      context.fillStyle = "#FFFFFF";
      context.fillRect(0, 0, canvas[0].width, canvas[0].height);
      var tempCanvas = document.createElement("canvas"),
        tCtx = tempCanvas.getContext("2d");

      tempCanvas.width = 200;
      tempCanvas.height = 50;
      tCtx.drawImage(canvas[0], 0, 0);

      var jpegUrl = tempCanvas.toDataURL("image/png")

      doc.addImage(jpegUrl, 'png', 21, 171);
      document.body.removeChild(document.getElementById('barcode'))

    });
    doc.save(programName + ' - ' + students[0].levelName + '.pdf');
  }

  getBEGradeCard(students: Array<any>, programName: string, dateOfIssue: string, base64string: string) {
    var template = new Image()
    template.src = 'assets/images/beGradeCard.jpg';
    var doc = new jsPDF('l', 'mm', 'a4');
    doc.deletePage(1);
    students.forEach(student => {
      doc.addPage();

      doc.addImage(template, 'jpg', 0, 0, 297, 210);
      var path = 'assets/images/portraits/' + student.usn.toString() + '.jpg';
      var person = new Image()
      if (base64string) {
        person.src = base64string;
        doc.addImage(person, 'jpg', 255, 47, 21, 25);
      }
      else {
        try {
          person.src = path;
          doc.addImage(person, 'jpg', 255, 47, 21, 25);
        }
        catch (error) {

        }
      }

      doc.setFontType("bold");
      doc.setFont('times')
      doc.setFontSize(15);
      doc.setTextColor(0, 0, 175);
      var exp = new RegExp(/^(be)\s*(in)\s*/,"gi")
      this.getAlignmentValueAny(0, 58, (String(programName).split(exp)[String(programName).split(exp).length-1]), { align: 'center', width: '297' }, doc);


      doc.setFontSize(10);
      doc.setTextColor(165, 35, 120);
      doc.text(student.studentName, 62.3, 62.1);

      student.guardianDetails.forEach(guardian => {
        if (guardian.relationType == 'Mother') {
          doc.text(guardian.name, 62.3, 67);
        }
        else {
          doc.text(guardian.name, 62.3, 72.3);
        }
      });

      doc.text(student['usn'], 66.8, 78);

      var levelName = student.sessionSemester;
      doc.text(levelName, 202.5, 67.55);

      /**
       * Using Hardcoded Value for now due to client requirements
       * Please change Later!
       * doc.text(student.seasonName, 202.5, 73.1);
       */
      doc.text(student.sessionName, 202.5, 73.1);

      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.setFontType("normal");

      this.getAlignmentValueAny(-133.6, 170.2, student.registeredCredits + "0", { align: 'right', width: '297' }, doc);
      this.getAlignmentValueAny(-133.6, 176.2, student.obtainedCredits + "0", { align: 'right', width: '297' }, doc);
      this.getAlignmentValueAny(-133.6, 187.7, student.totalCredits, { align: 'right', width: '297' }, doc);
      doc.setFontType("bold");
      this.getAlignmentValueAny(-133.6, 181.6, student.sgpa, { align: 'right', width: '297' }, doc);
      this.getAlignmentValueAny(-133.6, 193.8, student.cgpa, { align: 'right', width: '297' }, doc);

      doc.setTextColor(12, 32, 226);
      doc.setFontType("normal");
      doc.setDrawColor(0, 0, 0);
      doc.circle(89.6, 177, 6)
      doc.text('Date of Issue', 79.2, 187.7);

      this.getAlignmentValueAny(79.2, 193.8, dateOfIssue, { align: 'center', width: '20' }, doc);
      doc.addImage(this.principal_signature, 'jpg', 247.2, 172.7, 33.3, 17);

      doc.text(student.barcode, 34.7, 193.98);
      var row = [];
      let column = [
        { key: "sl", title: "Sl. No." },
        { key: "cc", title: "Course Code" },
        { key: "ct", title: "Course Title" },
        { key: "cd", title: "Credits" },
        { key: "g", title: "Grade Awarded" },
        { key: "gp", title: "Grade Points" },
      ];

      var subjectDetails = student.academicDetails;
      function sortByProperty(property) {
        return function (a, b) {
          if (a[property] > b[property])
            return 1;
          else if (a[property] < b[property])
            return -1;
          return 0;
        }
      }
      
      subjectDetails.sort(sortByProperty("slno"));

      for (var j = 0; j < subjectDetails.length; j++) {
        row.push([
          j + 1,
          subjectDetails[j].subjectCode,
          subjectDetails[j].subjectName,
          subjectDetails[j].credits + ".00",
          subjectDetails[j].grade,
          subjectDetails[j].gradePoints * subjectDetails[j].credits,
        ])
      }

      var cellStyles = {
        fontSize: 11,
        font: 'times',
        fillColor: false,
        textColor: 0,
        halign: 'left',
        valign: 'middle',
        lineWidth: 0.4,
        lineColor: 0,
        minCellHeight: 0,
        cellPadding: 1.3,
        fontStyle: "bold"
      }

      var headCellStyles = {
        fontSize: 12,
        fillColor: false,
        textColor: [231, 120, 23],
        font: 'Arial',
        halign: 'center',
        valign: 'middle',
        lineWidth: 0.4,
        lineColor: 0,
        minCellHeight: 0,
        cellPadding: 1.3,
      }

      doc.autoTable(
        column,
        row,
        {
          startY: 83,
          headStyles: headCellStyles,
          bodyStyles: cellStyles, styles:
            cellStyles,
          tableLineColor: [12, 32, 226],
          tableLineWidth: 0.5,
          alternateRowStyles: cellStyles,
          didParseCell: data => {
            if (data.section !== "body") {
              data.cell.styles.font = "helvetica";
              data.cell.styles.fontStyle = "bold";
            }
          },
          tableWidth: 245,
          margin: { left: 26 },
          columnStyles: {
            cc: { columnWidth: 40, halign: 'center', },
            sl: { columnWidth: 25, halign: 'center', },
            cd: { columnWidth: 25, halign: 'center', },
            gp: { columnWidth: 25, halign: 'center', },
            g: { columnWidth: 25, halign: 'center', },
          }
        }
      );

      var barcode = document.createElement("canvas");
      barcode.setAttribute("id", "barcode");
      barcode.setAttribute("hidden", "true");
      document.body.appendChild(barcode);

      var barcodeImage = new JsBarcode('#barcode', student.barcode);
      var canvas = document.getElementsByTagName('canvas')
      var context = canvas[0].getContext('2d');

      var data = context.getImageData(0, 0, canvas[0].width - 50, canvas[0].height);
      context.fillStyle = "#FFFFFF";
      context.fillRect(0, 0, canvas[0].width, canvas[0].height);
      var tempCanvas = document.createElement("canvas"),
        tCtx = tempCanvas.getContext("2d");

      tempCanvas.width = 200;
      tempCanvas.height = 50;
      tCtx.drawImage(canvas[0], 0, 0);

      var jpegUrl = tempCanvas.toDataURL("image/png")

      doc.addImage(jpegUrl, 'png', 21, 171);
      document.body.removeChild(document.getElementById('barcode'))

    });
    doc.save(programName + ' - ' + students[0].levelName + '.pdf');
  }

  downloadTranscript(data, issueDate, yearOfCompletion){
    var doc: PDF = new jsPDF('p', 'mm', 'a4');
    doc.setTextColor(25,77,108);
    if(data.degreeId == 2){
      var title = "Consolidated Grade Card for Master of Business Administration"
      var affiliated = "(Autonomous Institute Affiliated to Visvesvaraya Technological University, Belagavi)"
    }else if(data.degreeId == 3){
      var title = "Consolidated Grade Card for Master of Technology";
      var affiliated = "(Autonomous Institute Affiliated to Visvesvaraya Technological University, Belagavi)"
    }else if(data.degreeId == 4){
      var title = "Consolidated Grade Card for Master of Computer Applications"
      var affiliated = "(Autonomous Institute Affiliated to Visvesvaraya Technological University, Belagavi)"
    }else{
      var title = "Consolidated Grade Card for Bachelor Of Engineering"
      var affiliated = "(Autonomous College Under Visvesvaraya Technological University, Belgaum)"
    }
    this.jsPDFFontService.AddFontCambria(doc);
    doc.setFont('Lucida');
    console.log(doc.getFontList());
    this.putText(30,9, "B.M.S. COLLEGE OF ENGINEERING,", { align: 'left',size:15, style:'bold' }, doc);
    this.putText(39,9, "BENGALURU - 560 019", { align: 'center',size:11, style:'bold' }, doc);
    doc.setTextColor(25,77,108);
    this.putText(0,14, affiliated, { align: 'center',size:8, style:'bold' }, doc);
    this.putText(0,19, "Karnataka State, India.", { align: 'center',size:9, style:'bold' }, doc);
    doc.setTextColor(219,124,59)
    doc.addImage(this.logo, 'png', 9, 3, 18, 18);
    doc.addImage(this.vtu_logo, 'jpg', 178, 3, 18, 18);
    doc.setFont('Helvetica');
    this.putText(0,25, title, { align: 'center',size:12, style:'bold' }, doc);
    doc.setLineWidth(0.55);
    var exp = new RegExp(/^(be)\s*(in)\s*/,"gi");

    
    if(data.semesterDetails.length>4 || data.degreeId == 1){
      this.putText(25,(data.degreeId == 2 || data.degreeId == 4 ? 64 : 71), "Course title", { align: 'left',size:15, style:'normal' }, doc);
      doc.setLineWidth(0.55);
      doc.rect(10,28,192,(data.degreeId == 2 || data.degreeId == 4 ? 23.6 : 30.6));
      doc.rect(10,(data.degreeId == 2 || data.degreeId == 4 ? 53 : 60),92,20);
      if(data.semesterDetails.length>4){
        doc.setTextColor(219,124,59)
        this.putText(125,(data.degreeId == 2 || data.degreeId == 4 ? 64 : 71), "Course Title", { align: 'left',size:15, style:'normal' }, doc);
        doc.rect(110,(data.degreeId == 2 || data.degreeId == 4 ? 53 : 60),92,20);
        doc.setDrawColor(0,0,0);
        doc.setLineWidth(0.45);
        doc.line(197, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 197, (data.degreeId == 2 || data.degreeId == 4 ? 73 : 80));
        doc.line(192, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 192, (data.degreeId == 2 || data.degreeId == 4 ? 73 : 80));
        doc.line(187, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 187, (data.degreeId == 2 || data.degreeId == 4 ? 73 : 80));
        doc.setTextColor(0,0,0);
        doc.setFontSize(6);
        doc.setFontStyle('bold')
        doc.text("No. Of Credits",190,(data.degreeId == 2 || data.degreeId == 4 ? 70 : 77),null,90)
        doc.text("Grade Obtained",195,(data.degreeId == 2 || data.degreeId == 4 ? 71 : 78),null,90)
        doc.text("Result",        200,(data.degreeId == 2 || data.degreeId == 4 ? 67 : 74),null,90)
      }
  
      doc.setTextColor(25,77,108);
      this.putText(15, 33, "Name", { align: 'left', width: '595', style: 'bold', size : 8 },doc);
      this.putText(15, 37, "University Seat Number" , { align: 'left', width: '595', style: 'bold', size : 8 },doc);
      this.putText(15, 41, "Year of Entry", { align: 'left', width: '595', style: 'bold', size : 8 },doc);
      this.putText(15, 45, "Year of Completion" , { align: 'left', width: '595', style: 'bold', size : 8 },doc);
      this.putText(15, 49, "Degree to be Awarded" , { align: 'left', width: '595', style: 'bold', size : 8 },doc);
  
      doc.setDrawColor(0,0,0);
      doc.setLineWidth(0.45);
      doc.line(97, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 97, (data.degreeId == 2 || data.degreeId == 4 ? 73 : 80));
      doc.line(92, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 92, (data.degreeId == 2 || data.degreeId == 4 ? 73 : 80));
      doc.line(87, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 87, (data.degreeId == 2 || data.degreeId == 4 ? 73 : 80));
  
      doc.setTextColor(0,0,0);
      doc.setFontSize(6);
      doc.setFontStyle('bold')
      doc.text("No. Of Credits",90,(data.degreeId == 2 || data.degreeId == 4 ? 70 : 77),null,90)
      doc.text("Grade Obtained",95,(data.degreeId == 2 || data.degreeId == 4 ? 71 : 78),null,90)
      doc.text("Result",        100,(data.degreeId == 2 || data.degreeId == 4 ? 67 : 74),null,90)
  
      doc.setTextColor(141,78,119);
      this.putText(57, 33, ":  " + data.name, { align: 'left', width: '595', style: 'normal', size : 8 },doc);
      this.putText(57, 37, ":  " + data.usn , { align: 'left', width: '595', style: 'normal', size : 8 },doc);
      this.putText(57, 41, ":  " + (data.semesterDetails.length == 0 || data.semesterDetails.length != 0 && String(data.semesterDetails[0].seasonStartDate).trim() == ""  ? '' : moment(data.semesterDetails[0].seasonStartDate).year()), { align: 'left', width: '595', style: 'normal', size : 8 },doc);
      this.putText(57, 45, ":  " + (yearOfCompletion == null || yearOfCompletion == "null" ? '' : yearOfCompletion), { align: 'left', width: '595', style: 'normal', size : 8 },doc);
      this.putText(57, 49, ":  " + data.degreeName, { align: 'left', width: '595', style: 'normal', size : 8 },doc);

      if(data.degreeId == 1 || data.degreeId == 3){
        doc.setTextColor(25,77,108);
        doc.line(12, 51.5, 97, 51.5);
        this.putText(15, 56, "Branch" , { align: 'left', width: '595', style: 'bold', size : 8 },doc);
        var branchName = (data.degreeId == 1 ? (String(data.programName).split(exp)[String(data.programName).split(exp).length-1]) : ((String(data.programName).split('-')).length > 1? String(data.programName).split('-')[1].trim() : data.programName) )
        this.putText(57, 56, ":  " + branchName, { align: 'left', width: '595', style: 'bold', size : 9 },doc);
      }
  
      doc.setTextColor(0,0,0);
      this.putText(130, (data.degreeId == 2 || data.degreeId == 4 ? 44 : 51), "1. Duration of Course  :   " + data.courseDuration, { align: 'left', width: '595', style: 'bold', size : 9 },doc);
      this.putText(130, (data.degreeId == 2 || data.degreeId == 4 ? 49 : 56), "2. Medium of Instruction  :   English", { align: 'left', width: '595', style: 'bold', size : 9 },doc);
  
      var colStart = (data.degreeId == 2 || data.degreeId == 4 ? 74 : 81), xPos = 0,finalBottom=220;
      data.semesterDetails.forEach((sem,semIdx)=>{
        /**
         * Season Header
         */
        doc.line(xPos+10, colStart, xPos+102, colStart);
        doc.line(xPos+10, colStart, xPos+10, colStart+4.6);
        doc.line(xPos+102, colStart, xPos+102, colStart+4.6);
        doc.line(xPos+10, colStart+4.6, xPos+102, colStart+4.6);
        doc.setTextColor(0,0,0);
        this.putText(xPos+13, colStart+3, "Semester : " + sem.sessionSemester, { align: 'left', width: '595', style: 'bold', size : 7 },doc);
        doc.setTextColor(141,78,119);
        this.putText(xPos+10, colStart+3, "Academic Year : " + sem.academicYear, { align: 'right', width: '90', style: 'bold', size : 7 },doc);
        doc.setTextColor(0,0,0);
        
        var slno = 1;
        var allPass = true;
        data.subjectDetails.forEach((sub,index) =>{
          if(sem.seasonId == sub.subjectSeasonId){
            var res = "P";
            if(sub.attempts != 1){
              res = "P#" + sub.attempts;
            }
            if(!sub.isPassGrade){
              res = "F";
              allPass= false;
            }
            this.putText(xPos+12.2, colStart+7.8+4.6*(slno-1), slno+"", { align: 'left', width: '90', style: 'normal', size : 6.5 },doc);
            this.putText(xPos+17, colStart+7.8+4.6*(slno-1), sub.subjectName, { align: 'left', width: '90', style: 'normal', size : 6.5 },doc);
            this.putText(xPos+86, colStart+7.7+4.6*(slno-1), sub.gradePoints.toString(), { align: 'center', width: '5.5', style: 'normal', size : 6.5 },doc);
            this.putText(xPos+91, colStart+7.8+4.6*(slno-1), sub.grade, { align: 'center', width: '5.5', style: 'normal', size : 6.5 },doc);
            this.putText(xPos+96, colStart+7.8+4.6*(slno-1), res, { align: 'center', width: '5.5', style: 'normal', size : 6.5 },doc);
            doc.setLineWidth(0.15);
            doc.line(xPos+10, colStart+9.2+4.6*(slno-1), xPos+102, colStart+9.2+4.6*(slno-1));
            slno++
          }
        })
        doc.setLineWidth(0.45);
        doc.line(xPos+16, colStart+4.6, xPos+16, colStart+9.2+4.6*(slno-2));
        doc.line(xPos+96, colStart+4.6, xPos+96, colStart+9.2+4.6*(slno-2));
        doc.line(xPos+91, colStart+4.6, xPos+91, colStart+9.2+4.6*(slno-2));
        doc.line(xPos+86, colStart+4.6, xPos+86, colStart+9.2+4.6*(slno-2));
  
        doc.line(xPos+10, colStart, xPos+10, colStart+8.5+4.6*(slno-1));
        doc.line(xPos+102, colStart, xPos+102, colStart+8.5+4.6*(slno-1));
        doc.line(xPos+10, colStart+8.5+4.6*(slno-1), xPos+102, colStart+8.5+4.6*(slno-1));
        this.putText(xPos+13,  colStart+7.5+4.6*(slno-1), "SGPA : " + String(Number(sem.sgpa).toFixed(2)), { align: 'left', width: '595', style: 'bold', size : 7 },doc);
        this.putText(xPos+43,  colStart+7.5+4.6*(slno-1), "CGPA : " + String(Number(sem.cgpa).toFixed(2)), { align: 'left', width: '595', style: 'bold', size : 7 },doc);
        this.putText(xPos+5, colStart+7.5+4.6*(slno-1), allPass ? "PASS" : "FAIL", { align: 'right', width: '90', style: 'bold', size : 7 },doc);
        colStart = colStart+9.5+4.6*(slno-1)
        if(semIdx == 3){
          finalBottom = colStart
          colStart = (data.degreeId == 2 || data.degreeId == 4 ? 74 : 81)
          xPos = 100
        }
      });
  
      this.putText(10, finalBottom+3, "# Cleared in Subsequent Exams", { align: 'left', width: '595', style: 'normal', size : 7 },doc);
      this.putText(10, finalBottom+6.5, "P- Passed in Credit Mandatory Course" , { align: 'left', width: '595', style: 'normal', size : 7 },doc);
      this.putText(10, finalBottom+10, "PP- Passed in Non Credit Mandatory Course", { align: 'left', width: '595', style: 'normal', size : 7 },doc);
  
  
      doc.setTextColor(25,77,108);
      this.putText(10, finalBottom + 35, "Issue Date: ", { align: 'left', width: '595', style: 'normal', size : 9 },doc);
      doc.setTextColor(0,0,0);
      this.putText(28, finalBottom + 35, moment(issueDate).format('DD-MMM-YYYY'), { align: 'left', width: '595', style: 'normal', size : 8.5 },doc);
      doc.setTextColor(25,77,108);
      this.putText(60, finalBottom + 35, "Checked By", { align: 'left', width: '595', style: 'normal', size : 9 },doc);
  
      this.putText(-30, finalBottom + 35, "Controller of Examinations", { align: 'right', width: '200', style: 'normal', size : 9 },doc);
      this.putText(0, finalBottom + 15, "Authentic", { align: 'right', width: '200', style: 'normal', size : 9 },doc);
      this.putText(0, finalBottom + 35, "Principal", { align: 'right', width: '200', style: 'normal', size : 9 },doc);
      doc.addImage(this.principal_signature, 'jpg', 180, finalBottom + 18, 23, 11);
      /**
       * Add barcode
       */
      var barcode = document.createElement("canvas");
      barcode.setAttribute("id", "barcode");
      barcode.setAttribute("hidden", "true");
      document.body.appendChild(barcode);
  
      var barcodeImage = new JsBarcode('#barcode', data.usn);
      var canvas = document.getElementsByTagName('canvas')
      var context = canvas[0].getContext('2d');
  
      var barDat = context.getImageData(0, 0, canvas[0].width, canvas[0].height);
      context.fillStyle = "#FFFFFF";
      context.fillRect(0, 0, canvas[0].width, canvas[0].height);
      var tempCanvas = document.createElement("canvas"),
        tCtx = tempCanvas.getContext("2d");
  
  
      tempCanvas.height = 50;
      tCtx.drawImage(canvas[0], 0, 0);
      var jpegUrl = tempCanvas.toDataURL("image/png")
  
      doc.addImage(jpegUrl, 'png', 8, finalBottom + 15);
      document.body.removeChild(document.getElementById('barcode'))
  
      doc.save("Transcript" + ' - ' + data.usn + '.pdf');
  
    }

    if(data.semesterDetails.length <= 4 && (data.degreeId==2 || data.degreeId==3 || data.degreeId==4) ){
      this.putText(75,(data.degreeId == 2 || data.degreeId == 4 ? 64 : 71), "Course Title", { align: 'left',size:15, style:'normal' }, doc);
      doc.rect(60,(data.degreeId == 2 || data.degreeId == 4 ? 53 : 60),92,20);
      doc.setTextColor(25,77,108);
      this.putText(15, 33, "Name", { align: 'left', width: '595', style: 'bold', size : 8 },doc);
      this.putText(15, 37, "University Seat Number" , { align: 'left', width: '595', style: 'bold', size : 8 },doc);
      this.putText(15, 41, "Year of Entry", { align: 'left', width: '595', style: 'bold', size : 8 },doc);
      this.putText(15, 45, "Year of Completion" , { align: 'left', width: '595', style: 'bold', size : 8 },doc);
      this.putText(15, 49, "Degree to be Awarded" , { align: 'left', width: '595', style: 'bold', size : 8 },doc);

      doc.setDrawColor(0,0,0);
      doc.setLineWidth(0.45);
      doc.rect(10,28,192,(data.degreeId == 2 || data.degreeId == 4 ? 23.6 : 30.6));
      doc.line(145, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 145, (data.degreeId == 2 || data.degreeId == 4 ? 73 : 80));
      doc.line(140, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 140, (data.degreeId == 2 || data.degreeId == 4 ? 73 : 80));
      doc.line(135, (data.degreeId == 2 || data.degreeId == 4 ? 53 : 60), 135, (data.degreeId == 2 || data.degreeId == 4 ? 73 : 80));

      doc.setTextColor(0,0,0);
      doc.setFontSize(6);
      doc.setFontStyle('bold')
      doc.text("Grade Obtained",143,(data.degreeId == 2 || data.degreeId == 4 ? 70 : 77),null,90)
      doc.text("No. Of Credits",138,(data.degreeId == 2 || data.degreeId == 4 ? 71 : 78),null,90)
      doc.text("Result",148,(data.degreeId == 2 || data.degreeId == 4 ? 67 : 74),null,90)

      doc.setTextColor(141,78,119);
      this.putText(57, 33, ":  " + data.name, { align: 'left', width: '595', style: 'normal', size : 8 },doc);
      this.putText(57, 37, ":  " + data.usn , { align: 'left', width: '595', style: 'normal', size : 8 },doc);
      this.putText(57, 41, ":  " + (data.semesterDetails.length == 0 || data.semesterDetails.length != 0 && String(data.semesterDetails[0].seasonStartDate).trim() == ""  ? '' : moment(data.semesterDetails[0].seasonStartDate).year()), { align: 'left', width: '595', style: 'normal', size : 8 },doc);
      this.putText(57, 45, ":  " + (yearOfCompletion == null || yearOfCompletion == "null" ? '' : yearOfCompletion), { align: 'left', width: '595', style: 'normal', size : 8 },doc);
      this.putText(57, 49, ":  " + data.degreeName, { align: 'left', width: '595', style: 'normal', size : 8 },doc);
      
      if(data.degreeId == 1 || data.degreeId == 3){
        doc.setTextColor(25,77,108);
        doc.line(12, 51.5, 97, 51.5);
        this.putText(15, 56, "Branch" , { align: 'left', width: '595', style: 'bold', size : 8 },doc);
        var branchName = (data.degreeId == 1 ? (String(data.programName).split(exp)[String(data.programName).split(exp).length-1]) : ((String(data.programName).split('-')).length > 1? String(data.programName).split('-')[1].trim() : data.programName) )
        this.putText(57, 56, ":  " + branchName, { align: 'left', width: '595', style: 'bold', size : 9 },doc);
      }

      doc.setTextColor(0,0,0);
      this.putText(130, (data.degreeId == 2 || data.degreeId == 4 ? 44 : 51), "1. Duration of Course  :   " + data.courseDuration, { align: 'left', width: '595', style: 'bold', size : 9 },doc);
      this.putText(130, (data.degreeId == 2 || data.degreeId == 4 ? 49 : 56), "2. Medium of Instruction  :   English", { align: 'left', width: '595', style: 'bold', size : 9 },doc);

      var colStart = (data.degreeId == 2 || data.degreeId == 4 ? 74 : 81), xPos = 50,finalBottom=220;
      data.semesterDetails.forEach((sem,semIdx)=>{
        /**
         * Season Header
         */
        doc.line(xPos+10, colStart, xPos+102, colStart);
        doc.line(xPos+10, colStart, xPos+10, colStart+4.6);
        doc.line(xPos+102, colStart, xPos+102, colStart+4.6);
        doc.line(xPos+10, colStart+4.6, xPos+102, colStart+4.6);
        doc.setTextColor(0,0,0);
        this.putText(xPos+13, colStart+3, "Semester : " + sem.sessionSemester, { align: 'left', width: '595', style: 'bold', size : 7 },doc);
        doc.setTextColor(141,78,119);
        this.putText(xPos+10, colStart+3, "Academic Year : " + sem.academicYear, { align: 'right', width: '90', style: 'bold', size : 7 },doc);
        doc.setTextColor(0,0,0);
        
        var slno = 1;
        var allPass = true;
        data.subjectDetails.forEach((sub,index) =>{
          console.log(data.subjectDetails)
          if(sem.seasonId == sub.subjectSeasonId){
            var res = "P";
            if(sub.attempts != 1){
              res = "P#" + sub.attempts;
            }
            if(!sub.isPassGrade){
              res = "F";
              allPass= false;
            }
            this.putText(xPos+12.2, colStart+7.8+4.6*(slno-1), slno+"", { align: 'left', width: '90', style: 'normal', size : 6.5 },doc);
            this.putText(xPos+17, colStart+7.8+4.6*(slno-1), sub.subjectName, { align: 'left', width: '90', style: 'normal', size : 6.5 },doc);
            this.putText(xPos+86, colStart+7.7+4.6*(slno-1), sub.credits.toString(), { align: 'center', width: '5.5', style: 'normal', size : 6.5 },doc);
            this.putText(xPos+91, colStart+7.8+4.6*(slno-1), sub.grade, { align: 'center', width: '5.5', style: 'normal', size : 6.5 },doc);
            this.putText(xPos+96, colStart+7.8+4.6*(slno-1), res, { align: 'center', width: '5.5', style: 'normal', size : 6.5 },doc);
            doc.setLineWidth(0.15);
            doc.line(xPos+10, colStart+9.2+4.6*(slno-1), xPos+102, colStart+9.2+4.6*(slno-1));
            slno++
          }
        })
        doc.setLineWidth(0.45);
        doc.line(xPos+16, colStart+4.6, xPos+16, colStart+9.2+4.6*(slno-2));
        doc.line(xPos+96, colStart+4.6, xPos+96, colStart+9.2+4.6*(slno-2));
        doc.line(xPos+91, colStart+4.6, xPos+91, colStart+9.2+4.6*(slno-2));
        doc.line(xPos+86, colStart+4.6, xPos+86, colStart+9.2+4.6*(slno-2));

        doc.line(xPos+10, colStart, xPos+10, colStart+8.5+4.6*(slno-1));
        doc.line(xPos+102, colStart, xPos+102, colStart+8.5+4.6*(slno-1));
        doc.line(xPos+10, colStart+8.5+4.6*(slno-1), xPos+102, colStart+8.5+4.6*(slno-1));
        this.putText(xPos+13,  colStart+7.5+4.6*(slno-1), "SGPA : " + String(Number(sem.sgpa).toFixed(2)), { align: 'left', width: '595', style: 'bold', size : 7 },doc);
        this.putText(xPos+43,  colStart+7.5+4.6*(slno-1), "CGPA : " + String(Number(sem.cgpa).toFixed(2)), { align: 'left', width: '595', style: 'bold', size : 7 },doc);
        this.putText(xPos+5, colStart+7.5+4.6*(slno-1), allPass ? "PASS" : "FAIL", { align: 'right', width: '90', style: 'bold', size : 7 },doc);
        colStart = colStart+9.5+4.6*(slno-1)
        if(semIdx == 3){
          finalBottom = colStart
          colStart = (data.degreeId == 2 || data.degreeId == 4 ? 74 : 81)
          xPos = 100
        }
      });

      this.putText(10, finalBottom+3, "# Cleared in Subsequent Exams", { align: 'left', width: '595', style: 'normal', size : 7 },doc);
      this.putText(10, finalBottom+6.5, "P- Passed in Credit Mandatory Course" , { align: 'left', width: '595', style: 'normal', size : 7 },doc);
      this.putText(10, finalBottom+10, "PP- Passed in Non Credit Mandatory Course", { align: 'left', width: '595', style: 'normal', size : 7 },doc);


      doc.setTextColor(25,77,108);
      this.putText(10, finalBottom + 35, "Issue Date: ", { align: 'left', width: '595', style: 'normal', size : 9 },doc);
      doc.setTextColor(0,0,0);
      this.putText(28, finalBottom + 35, moment(issueDate).format('DD-MMM-YYYY'), { align: 'left', width: '595', style: 'normal', size : 8.5 },doc);
      doc.setTextColor(25,77,108);
      this.putText(60, finalBottom + 35, "Checked By", { align: 'left', width: '595', style: 'normal', size : 9 },doc);

      this.putText(-30, finalBottom + 35, "Controller of Examinations", { align: 'right', width: '200', style: 'normal', size : 9 },doc);
      this.putText(0, finalBottom + 15, "Authentic", { align: 'right', width: '200', style: 'normal', size : 9 },doc);
      this.putText(0, finalBottom + 35, "Principal", { align: 'right', width: '200', style: 'normal', size : 9 },doc);
      doc.addImage(this.principal_signature, 'jpg', 180, finalBottom + 18, 23, 11);

      /**
       * Add barcode
       */
      var barcode = document.createElement("canvas");
      barcode.setAttribute("id", "barcode");
      barcode.setAttribute("hidden", "true");
      document.body.appendChild(barcode);

      var barcodeImage = new JsBarcode('#barcode', data.usn);
      var canvas = document.getElementsByTagName('canvas')
      var context = canvas[0].getContext('2d');

      var barDat = context.getImageData(0, 0, canvas[0].width, canvas[0].height);
      context.fillStyle = "#FFFFFF";
      context.fillRect(0, 0, canvas[0].width, canvas[0].height);
      var tempCanvas = document.createElement("canvas"),
        tCtx = tempCanvas.getContext("2d");


      tempCanvas.height = 50;
      tCtx.drawImage(canvas[0], 0, 0);
      var jpegUrl = tempCanvas.toDataURL("image/png")

      doc.addImage(jpegUrl, 'png', 8, finalBottom + 15);
      document.body.removeChild(document.getElementById('barcode'))

      doc.save("Transcript" + ' - ' + data.usn + '.pdf');
    }
  }

  getPdc(Data) {
    let doc = new jsPDF({ orientation: 'portrait', unit: 'pt', lineHeight: 1.5 });
    var template = new Image()
    template.src = 'assets/images/pdcbg.png';
    doc.deletePage(1);
    Data.forEach(element => {
      doc.addPage();
      doc.addImage(template, 'png', 0, 0, 600, 860); // base64 imge as background
      doc.setLineWidth(0.5);
      doc.setFontType("normal");
      doc.setFontSize(18);
      doc.addFileToVFS('src/assets/fonts/IMPRISHA.ttf', Roboto);
      doc.addFont('src/assets/fonts/IMPRISHA.ttf', 'Roboto', 'normal');
      doc.setFont('Roboto'); //
      doc.setTextColor(6, 6, 255);
      this.getAlignmentValueAny(5, 400, element.studentName, {align: "center",width: "595"},doc);
         
      doc.setFontSize(16);
      this.getAlignmentValueAny(5, 490, element.programName, {align: "center",width: "595"},doc);
      doc.setFontSize(18);
      this.getAlignmentValueAny(5, 510, element.departmentName, {align: "center",width: "595"},doc);
     
      doc.setFontSize(12);
      doc.setTextColor(255, 0, 6);
      doc.setFontType("bold");
      doc.setFont('Times')
      this.getAlignmentValueAny(202, 194, element.pdcNo, {align: "center",width: "595"},doc);
      
      doc.setFontSize(13);
      doc.setTextColor(0, 0, 0);
      doc.setFontType("bold");
      doc.setFont('Times')
      this.getAlignmentValueAny(62, 430, element.usn, {align: "center",width: "595"},doc);
      

      
      doc.setFontSize(15);
      doc.setTextColor(0, 0, 0);
      doc.setFontType("bold");
      doc.setFont('Times')
      this.getAlignmentValueAny(-5, 544, String(Number(element.cgpa).toFixed(2)), {align: "center",width: "595"},doc);
      doc.setFontSize(12);
      doc.setTextColor(6, 6, 255);
      doc.setFontType("bold");
      doc.setFont('Times')
      this.getAlignmentValueAny(18, 762,  moment(element.date).format("DD.MM.YYYY"), {align: "center",width: "595"},doc);
      var studentImage =  new Image();
      var image_name = element.usn+'.jpg'
      var path = 'assets/images/portraits/'+image_name
      try {
        studentImage.src = path;
        doc.addImage(studentImage, 'png', 250, 220, 85, 105);
      }
      catch (error) {
        console.log("Image not found"+element.usn)
      }

      var barcode = document.createElement("canvas");
      barcode.setAttribute("id", "barcode");
      barcode.setAttribute("hidden", "true");
      document.body.appendChild(barcode);

      var barcodeImage = new JsBarcode('#barcode', element.usn);
      var canvas = document.getElementsByTagName('canvas')
      var context = canvas[0].getContext('2d');

      var data = context.getImageData(0, 0, canvas[0].width - 50, canvas[0].height);
      context.fillStyle = "#FFFFFF";
      context.fillRect(0, 0, canvas[0].width, canvas[0].height);
      var tempCanvas = document.createElement("canvas"),
        tCtx = tempCanvas.getContext("2d");

      tempCanvas.width = 180;
      tempCanvas.height = 45;
      tCtx.drawImage(canvas[0], 0, 0);

      var jpegUrl = tempCanvas.toDataURL("image/png")

      doc.addImage(jpegUrl, 'png', 365, 710);
      document.body.removeChild(document.getElementById('barcode'))
    
    });

    doc.save('file');
  }

}

export interface ExcelTemplate {
  fixedHeader: Array<{ loc: string, value: any, style: ExcelProper.Style }>
  dynamicHeader: Array<{ loc: string, dynamicVar: string, prefix: string, suffix: string, style: ExcelProper.Style }>
  tableArray: string
  tableStart: number
  tableValues: Array<{ key: string, width: number, hidden?: boolean, outlineLevel?: number, style?: ExcelProper.Style, header?: string }>
  tableHeader: Array<string>
  tableHeaderStyle?: ExcelProper.Style
  tableStyle: { rowHeight: number }
  merges: Array<string>
  colWidths: Array<number>
  fixedFooter: Array<{ loc: Array<number>, value: any, style: ExcelProper.Style }>
  dynamicFootfer: Array<{ loc: Array<number>, dynamicVar: string, prefix: string, suffix: string, style: ExcelProper.Style }>
  footerMerges: Array<Array<number>>
  footerRowHeights: Array<number>

}
