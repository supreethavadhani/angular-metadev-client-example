import { Injectable } from '@angular/core';

import * as jsPDF from 'jspdf';
import { cambiraNormal } from 'src/assets/fonts/Cambria';
import { cambriaBold } from 'src/assets/fonts/Cambria-bold';
import { lucidaBold } from 'src/assets/fonts/Lucida-bold';
import { lucidaNormal } from 'src/assets/fonts/Lucida-normal';


@Injectable()
export class JsPDFFontService {
    
    AddFontCambria(doc: jsPDF) {
        doc.addFileToVFS('Cambria-normal.ttf', cambiraNormal);
        doc.addFont('Cambria-normal.ttf', 'Cambria', 'normal');
        doc.addFileToVFS('Cambria-bold.ttf', cambriaBold);
        doc.addFont('Cambria-bold.ttf', 'Cambria', 'bold');
        doc.addFileToVFS('Lucida-bold.ttf', lucidaBold);
        doc.addFont('Lucida-bold.ttf', 'Lucida', 'bold');
        doc.addFileToVFS('Lucida-normal.ttf', lucidaNormal);
        doc.addFont('Lucida-normal.ttf', 'Lucida', 'normal');
        doc.setFont('Lucida');
    }
}