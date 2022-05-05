import * as XLSX from 'xlsx';
import { Injectable } from '@angular/core';
declare var require: any
let jsPDF = require('jspdf');
require('jspdf-autotable');
require('jquery');
import 'jspdf-autotable';
import * as $ from 'jquery';
import * as _ from "lodash";
import * as PDF from 'jspdf';
import { TableMetaData } from '../framework-modules/elements/ct-table/component';


@Injectable()
export class PdfDownloadService {
   constructor() {}

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

  downloadValuationSheet(data,valuationType,fileName){
    var logo = new Image();
    var valuationText= "", valuatorText = "";
    if(valuationType == 1){
        valuationText = "MARKS (I VALUATION)";
        valuatorText = "1ST EVALUATOR";
    }
    else if(valuationType == 2){
        valuationText = "REVIEW/MODERATION (II VALUATION)";
        valuatorText = "2ND EVALUATOR";
    }
    else{
        valuationText = "III VALUATION";
        valuatorText = "3RD EVALUATOR";
    }
    logo.src = 'assets/images/bms.png';
    let doc: PDF = new jsPDF('l','pt','a4');
    doc.addImage(logo, 'png', 130, 30, 40, 40);
    var boxWidth = (doc.internal.pageSize.width - 230)/4;
    doc.setFont('Helvetica');
    this.putText(0,50,"B M S  COLLEGE OF ENGINEERING, BANGALORE - 19",{align:'center',size: 18,style:'bold'},doc);
    this.putText(0,68,"Autonomous Institute Affiliated to VTU",{align:'center',size: 12,style:'normal'},doc);
    this.putText(0,90,"SEMESTER END EXAMINATION JAN/FEB 2021",{align:'center',size: 14,style:'bold'},doc);
    this.putText(40,130,"Sl. No.",{align:'left',size: 12,style:'normal'},doc);
    this.putText(0,128,"VALUATION MARKS SHEET",{align:'center',size: 14,style:'bold'},doc);
    this.putText(-40,130,"Packet Code: " + data.packetCode ,{align:'right',size: 11,style:'normal'},doc);
    this.putText(40,150,"Course Code: " + data.subjectCode,{align:'left',size: 11,style:'normal'},doc);
    this.putText(260,150,"Course Name: " + data.subjectName,{align:'left',size: 11,style:'normal'},doc);
    this.putText(-40,150,"Date: __ __   __ __   __ __ __ __" ,{align:'right',size: 11,style:'normal'},doc);
    this.putText(80,188,"Script Code" ,{align:'left',size: 11,style:'bold'},doc);
    this.putText(190,176,valuationText ,{align:'center',size: 11,style:'bold',width:doc.internal.pageSize.width-230},doc);
    this.putText(190,201,"IN WORDS",{align: 'center',style:'bold',width:boxWidth*3,size:11},doc);
    this.putText(190+boxWidth*3,201,"IN FIGURES",{align: 'center',style:'bold',width:boxWidth,size:11},doc);
    this.putText(55,240+data.scriptCodes.length*25+10,"CODER SIGNATURE: ____________________________",{align: 'left',style:'normal',size:11},doc);
    this.putText(400,230+data.scriptCodes.length*25+10,valuatorText,{align: 'center',style:'bold',size:14,width:doc.internal.pageSize.width-400-55},doc)
    this.putText(400,250+data.scriptCodes.length*25+10,"Name: " + data.evaluatorName,{align: 'left',style:'normal',size:11},doc)
    this.putText(400,270+data.scriptCodes.length*25+10,"Type: " + data.evaluatorType,{align: 'left',style:'normal',size:11},doc)
    this.putText(-55,250+data.scriptCodes.length*25+10,"Phone: " + data.evaluatorPhoneNumber,{align: 'right',style:'normal',size:11},doc)
    this.putText(-55,270+data.scriptCodes.length*25+10,"Email: " + data.evaluatorEmail,{align: 'right',style:'normal',size:11},doc)
    this.putText(55,280+data.scriptCodes.length*25+10,"VALUATOR SIGNATURE: _________________________",{align: 'left',style:'normal',size:11},doc)
    doc.setLineWidth(1.2);

    doc.rect(40,160,150,50);
    doc.rect(190,160,doc.internal.pageSize.width-230,25);
    doc.rect(190,185,doc.internal.pageSize.width-230,25);
    doc.rect(190,185,boxWidth*3,25);
    data.scriptCodes.forEach((code,index)=>{
      this.putText(40,227 + 25*index,code.paperCode ,{align:'center',size: 11,style:'bold',width:150},doc);
      doc.rect(40,210 + 25*index,150,25);
      for(var i=0;i<4;i++){
        doc.rect(190 + i*boxWidth,210 + 25*index,boxWidth,25);
      }
    });
    doc.save(fileName);
  }

  private sortByProperty(property) {
    return function (a, b) {
      if (a[property] > b[property])
        return 1;
      else if (a[property] < b[property])
        return -1;
      return 0;
    }
  }

  /**
   * Downloads a PDF for a table
   * @param title Title to be added in the PDF
   * @param tableData Table meta data
   * @param filename Downloaded File Name
   * @param sortBy Sort the table data by this attribute while downloading. If none, the first column will be sorted in ascending order
   */
  downloadTableLandscape(title:string,tableData:TableMetaData,filename:string,sortBy: string = tableData.metaData.column_names[0]){
    var _tableData: TableMetaData = _.cloneDeep(tableData);
    if(_tableData.metaData.column_names.includes("edit")){
      _tableData.metaData.column_names.pop()
    }
    _tableData.data.sort(this.sortByProperty(sortBy))
    var doc = new jsPDF('l','pt','a4');
    var logo = new Image();
    logo.src = 'assets/images/bms.png';
    doc.addImage(logo, 'png', 130, 30, 40, 40);
    doc.setFont('Helvetica');
    this.putText(0,50,"B M S  COLLEGE OF ENGINEERING, BANGALORE - 19",{align:'center',size: 18,style:'bold'},doc);
    this.putText(0,68,"Autonomous Institute Affiliated to VTU",{align:'center',size: 12,style:'normal'},doc);
    this.putText(0,110,title,{align:'center',size: 14,style:'bold'},doc);
    this.putText(0,90,"Semester End Examination Jan/Feb 2021",{align:'center',size: 12,style:'bold'},doc);
    var columns = []
    _tableData.metaData.column_names.forEach(col=>{
      columns.push(
        {header:_tableData.metaData.display_names[col],dataKey:col}
      )
    });
    var that = this;
    doc.autoTable({
      body: _tableData.data,
      columns: columns,
      theme: 'striped',
      didDrawPage: function (data) {
        // jsPDF 1.4+ uses getWidth, <1.4 uses .width
        let pageSize = doc.internal.pageSize;
        let pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
        let pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
        // Footer
        let page = "Page-" + doc.internal.getNumberOfPages()
        // Total page number plugin only available in jspdf v1.0+
        // if (typeof doc.putTotalPages === 'function') {
        //     page = page + " of " + pageCount;
        // }
        doc.setFontSize(10);
        that.putText(-50,pageHeight-30,page,{align:'right',style:'normal',size:8},doc);
      },      
      startY: 120,
    });
    this.setiFrameForPrint(doc);
  }

  setiFrameForPrint(doc) {
    const iframe = document.createElement('iframe');
    iframe.id = "iprint";
    iframe.name = "iprint";
    iframe.src = doc.output('bloburl');
    iframe.setAttribute('style', 'display: none;');
    document.body.appendChild(iframe);
    iframe.contentWindow.print();
  }

   
}