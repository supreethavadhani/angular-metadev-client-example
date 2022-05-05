import {Injectable} from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar"; 
@Injectable()
export class MessageService {
   constructor(private snackBar: MatSnackBar) {}

   showSuccess(message: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['snackbar-success'];
    config.duration = 3000;
    this.snackBar.open(message, null, config);
 }
   showError(message: string) {
      const config = new MatSnackBarConfig();
      config.panelClass = ['snackbar-error'];
      config.duration = 3000;
      this.snackBar.open(message, null, config);
   }

   showInfo(message: string) {
      const config = new MatSnackBarConfig();
      config.panelClass = ['snackbar-info'];
      config.duration = 3000;
      this.snackBar.open(message, null, config);
   }
   showDetail(message: string) {
      const config = new MatSnackBarConfig();
      config.horizontalPosition = 'end';
      config.verticalPosition = 'bottom';
      this.snackBar.open(message,null,config)
   }
   close(){
      this.snackBar.dismiss();
   }
}