import { UserForm } from "./userForm";
import { UserRegistrationForm } from "./userRegistrationForm";
import { EmployeeForm } from "./employeeForm";
import { CustomerForm } from "./customerForm";
import { UserContextForm } from "./userContextForm";

 export const allForms = { 
    "user":UserForm,
    "userRegistration":UserRegistrationForm,
    "employee":EmployeeForm,
    "customer":CustomerForm,
    "userContext":UserContextForm,
}