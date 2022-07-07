import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule} from '@angular/common';
import { CTLoginTextboxComponent } from './ct-login-textbox/component';
import { CTPrimaryButtonComponent } from '../elements/ct-primary-button/component';
import { CTSecondaryyButtonComponent } from '../elements/ct-secondary-button/component';
import { CTPrimaryNavigationComponent } from './ct-primary-navigation/component';
import { CTDropDownComponent } from '../elements/ct-dropdown/component';
import { CTResetButtonComponent } from '../elements/ct-reset-button/component';
import { CTTextboxComponent } from './ct-textbox/component';
import { CTToolbarComponent } from './ct-toolbar/component';
import { CtTableComponent } from './ct-table/component';
import { CtBarChartComponent } from './ct-barchart/component';
import { CtGroupedBarChartComponent } from './ct-grouped-barchart/component';
import { CtPieChartComponent } from './ct-piechart/component';
import { CTNavigationTileComponent } from './ct-navigation-tile/component';
import { CtSideNavComponent } from './ct-sidenav/component';
import { CTDatePickerComponent } from './ct-datepicker/component';
import { CTSelectableChipsComponent } from './ct-selectable-chips/component';
import { CTSelectableChipsComponent1 } from './ct-selectable-chips-1/component';
import { CtBackButtonComponent } from './ct-back-button/component';
import { CtCheckboxTableComponent } from './ct-checkbox-table/component';
import { CtBadgesComponent } from './ct-badges/component';
import { CtBadgesTableComponent } from './ct-badges-table/component';
import { CtEditableTableComponent } from './ct-editable-table/component';
import { CtBadges1Component } from './ct-badges-1/component';
import { CtDialogComponent } from './ct-dialog/component';
import { CtDangerButtonComponent } from './ct-danger-button/component';
import { CtCheckboxComponent } from './ct-checkbox/component';
import { CtSpinner } from './ct-spinner/component';
import { CtSearchBarFdComponent } from './ct-searchbar-fd/component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CtSideNavOneComponent } from './ct-sidenav-1/component';
import { CTOutput4Component } from './ct-output-4/component';
import { CTOutput3Component } from './ct-output-3/component';
import { CtPieGridChartComponent  } from './ct-piegridchart/component';
import { CtAdvancedPieChartComponent } from './ct-advanced-piechart/component';
import { CtTitleComponent } from './ct-title/component';
import { CtLineChartComponent } from './ct-linechart/component';
import { CtNumberCardComponent } from './ct-number-card/component';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { 
/**
 * Material Imports
 */
MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CtLinearGaugeComponent } from './ct-linear-gauge/component';
import { CtHorizontalBarChartComponent } from './ct-horizontal-barchart/component';
import { CTFieldGenerator } from './ct-field-generator/component';

@NgModule({
    declarations: [
        /**
         * Material Component Declarations
         */
        /**
         * Banyantree Compoenent Declarations
         */
        CTLoginTextboxComponent,
        CTPrimaryButtonComponent,
        CTSecondaryyButtonComponent,
        CTPrimaryNavigationComponent,
        CTTextboxComponent,
        CTDropDownComponent,
        CTResetButtonComponent,
        CtTableComponent,
        CtBarChartComponent,
        CtGroupedBarChartComponent,
        CtPieChartComponent,
        CtPieGridChartComponent,
        CTToolbarComponent,
        CTNavigationTileComponent,
        CtSideNavComponent,
        CTDatePickerComponent,
        CTSelectableChipsComponent,
        CTSelectableChipsComponent1,
        CtBackButtonComponent,
        CtCheckboxTableComponent,
        CtBadgesComponent,
        CtBadgesTableComponent,
        CtEditableTableComponent,
        CtBadges1Component,
        CtDialogComponent,
        CtDangerButtonComponent,
        CtCheckboxComponent,
        CtSpinner,
        CtSearchBarFdComponent,
        CtSideNavOneComponent,
        CTOutput3Component,
        CTOutput4Component,
        CtAdvancedPieChartComponent,
        CtTitleComponent,
        CtLineChartComponent,
        CtNumberCardComponent,
        CtLinearGaugeComponent,
        CtHorizontalBarChartComponent,
        CTFieldGenerator
    ],
    imports: [
        /**
         * Material Component Imports
         */
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatChipsModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        MatCheckboxModule,
        NgxChartsModule,
        MatTooltipModule,
        MatCardModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatGridListModule,
        /**
         * Banyantree Compoenent  Imports
         */
        /**
         * Miscellaneous Imports
         */
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
    ],
    bootstrap: [],
    exports: [
        /**
         * Material Component Exports
         */
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        NgxChartsModule,
        MatButtonModule,
        MatChipsModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatCardModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatGridListModule,
        /**
         * Banyantree Compoenents Exports
         */
        CTLoginTextboxComponent,
        CTPrimaryButtonComponent,
        CTSecondaryyButtonComponent,
        CTPrimaryNavigationComponent,
        CTTextboxComponent,
        CTDropDownComponent,
        CTResetButtonComponent,
        CtTableComponent,
        CtBarChartComponent,
        CtGroupedBarChartComponent,
        CtPieChartComponent,
        CtPieGridChartComponent,
        CTToolbarComponent,
        CTNavigationTileComponent,
        CtSideNavComponent,
        CTDatePickerComponent,
        CTSelectableChipsComponent,
        CTSelectableChipsComponent1,
        CtBackButtonComponent,
        CtCheckboxTableComponent,
        CtBadgesComponent,
        CtBadgesTableComponent,
        CtEditableTableComponent,
        CtBadges1Component,
        CtDialogComponent,
        CtDangerButtonComponent,
        CtCheckboxComponent,
        CtSpinner,
        CtSearchBarFdComponent,
        CtSideNavOneComponent,
        CTOutput3Component,
        CTOutput4Component,
        CtAdvancedPieChartComponent,
        CtTitleComponent,
        CtLineChartComponent,
        CtNumberCardComponent,
        CtLinearGaugeComponent,
        CtHorizontalBarChartComponent,
        CTFieldGenerator,
        /**
         * Miscellaneous Exports
         */
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        
    ]
})
  
export class ElementsModule {
    constructor() {
    }
  }