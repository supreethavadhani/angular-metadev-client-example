import { UserForm } from "./userForm";
import { UserRegistrationForm } from "./userRegistrationForm";
import { CustomerListForm } from "./customerListForm";
import { UserContextForm } from "./userContextForm";
import { VendorsForm } from "./vendorsForm";
import { OrdersForm } from "./ordersForm";

 export const allForms = { 
    "user":UserForm,
    "userRegistration":UserRegistrationForm,
    "customerList":CustomerListForm,
    "userContext":UserContextForm,
    "vendors":VendorsForm,
    "orders":OrdersForm,
}