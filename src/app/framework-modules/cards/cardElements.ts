import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CtEditPanel } from './ct-edit-panel/component';
import { CtGroupPanelComponent } from './ct-group-panel/component';
import { CtDataPanel } from './ct-data-panel/component';
import { CtDataPanel1 } from './ct-data-panel-1/component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { 
/**
 * Material Imports
 */
MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [
        /**
         * Material Component Declarations
         */
        /**
         * Banyantree Compoenent Declarations
         */
        CtEditPanel,
        CtGroupPanelComponent,
        CtDataPanel,
        CtDataPanel1,
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
        MatTooltipModule,
        MatCardModule,
        MatSelectModule,
        MatGridListModule,
        /**
         * Banyantree Compoenent  Imports
         */
        /**
         * Miscellaneous Imports
         */
        ReactiveFormsModule,
        CommonModule
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
        MatGridListModule,
        /**
         * Banyantree Compoenents Exports
         */
        CtEditPanel,
        CtGroupPanelComponent,
        CtDataPanel,
        CtDataPanel1,
        /**
         * Miscellaneous Exports
         */
        ReactiveFormsModule,
        CommonModule
    ]
})
export class CardElementsModule {
  constructor() {
  }
}
