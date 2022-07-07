import {
	Component,
	Input,
	ViewEncapsulation,
	Injectable,
	OnInit
} from '@angular/core';
import {
	FormControl
} from '@angular/forms';
import * as moment from "moment";
import {
	NativeDateAdapter,
	DateAdapter
} from '@angular/material/core';
import {
	Field
} from '../../formdata/form/form';
import {
	FormData
} from '../../formdata/form/formData';

@Injectable()
export class DateFormat extends NativeDateAdapter {
	useUtcForDisplay = true;
	parse(value: any): Date | null {
		if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
			const str = value.split('/');
			const year = Number(str[2]);
			const month = Number(str[1]) - 1;
			const date = Number(str[0]);
			return new Date(year, month, date);
		}
		const timestamp = typeof value === 'number' ? value : Date.parse(value);
		return isNaN(timestamp) ? null : new Date(timestamp);
	}
}

@Component({
	selector: 'app-mv-date',
	templateUrl: './component.html',
	styleUrls: [],
	providers: [{
		provide: DateAdapter,
		useClass: DateFormat
	}, ],
	encapsulation: ViewEncapsulation.Emulated,
})
export class MvDatePickerComponent implements OnInit {
	@Input() public field: Field;
	@Input() public fd: FormData;
	public control: FormControl;
	public today = new Date();
	constructor(private dateAdapter: DateAdapter < Date > ) {
		dateAdapter.setLocale('en-in');
	}
	ngOnInit() {
		this.control = this.fd.formGroup.get(this.field.name) as FormControl;
		this.control.setValue(this.today);
	}
	
	dateChange(_$event) {
		this.control.setValue(moment(this.control.value).format("YYYY-MM-DD"))
	}
}