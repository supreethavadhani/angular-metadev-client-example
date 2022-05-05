import { Component, Injectable, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'ct-spinner',
  templateUrl: "./component.html",
  styleUrls: ['./component.scss']
})
export class CtSpinner {
  private static DEFAULT_TEXT = 'Loading...';
  /**
   * optional text set by the user
   */
  spinnerText: any;
  isShown: boolean = false;

  constructor(private cdRef: ChangeDetectorRef) {
  }

  show(message) {
    this.spinnerText = message || CtSpinner.DEFAULT_TEXT;
    this.isShown = true;
    this.cdRef.detectChanges();
  }
  
  hide() {
    if (!this.isShown) {
      console.error('spinner.hide() called before a .show()');
      return;
    }
    this.isShown = false;
    this.cdRef.detectChanges();
  }
}
