import {
    NgModule
} from '@angular/core';
import {
    ReactiveFormsModule,
    FormsModule
} from '@angular/forms';
import {
    CommonModule
} from '@angular/common';

import {
    MatButtonModule
} from '@angular/material/button';
import {
    MatButtonToggleModule
} from '@angular/material/button-toggle';
import {
    MatCardModule
} from '@angular/material/card';
import {
    MatCheckboxModule
} from '@angular/material/checkbox';
import {
    MatChipsModule
} from '@angular/material/chips';
import {
    MatNativeDateModule
} from '@angular/material/core';
import {
    MatDatepickerModule
} from '@angular/material/datepicker';
import {
    MatDialogModule
} from '@angular/material/dialog';
import {
    /**
     * Material Imports
     */
    MatFormFieldModule
} from '@angular/material/form-field';
import {
    MatGridListModule
} from '@angular/material/grid-list';
import {
    MatIconModule
} from '@angular/material/icon';
import {
    MatInputModule
} from '@angular/material/input';
import {
    MatPaginatorModule
} from '@angular/material/paginator';
import {
    MatProgressSpinnerModule
} from '@angular/material/progress-spinner';
import {
    MatSelectModule
} from '@angular/material/select';
import {
    MatSidenavModule
} from '@angular/material/sidenav';
import {
    MatSnackBarModule
} from '@angular/material/snack-bar';
import {
    MatSortModule
} from '@angular/material/sort';
import {
    MatTableModule
} from '@angular/material/table';
import {
    MatTooltipModule
} from '@angular/material/tooltip';
import {
    MvTextareaComponent
} from './mv-textarea/component';
import {
    MvFieldGeneratorComponent
} from './mv-field-generator/component';
import {
    MvTextboxComponent
} from './mv-textbox/component';
import { MvPrimaryButtonComponent } from './mv-primary-button/component';
import { MvSecondaryButtonComponent } from './mv-secondary-button/component';

@NgModule({
    declarations: [
        MvTextareaComponent,
        MvTextboxComponent,
        MvFieldGeneratorComponent,
        MvPrimaryButtonComponent,
        MvSecondaryButtonComponent,
    ],
    imports: [
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
        MvTextareaComponent,
        MvTextboxComponent,
        MvPrimaryButtonComponent,
        MvSecondaryButtonComponent,
        MvFieldGeneratorComponent,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,

    ]
})

export class ElementsModule {}