import { UserForm } from "./userForm";
import { OrderForm } from "./orderForm";
import { UserRegistrationForm } from "./userRegistrationForm";
import { EmployeeForm } from "./employeeForm";
import { CustomerForm } from "./customerForm";
import { UserContextForm } from "./userContextForm";
import { ReturnsForm } from "./returnsForm";
import { ShipmentsForm } from "./shipmentsForm";

 export const allForms = { 
    "user":UserForm,
    "order":OrderForm,
    "userRegistration":UserRegistrationForm,
    "employee":EmployeeForm,
    "customer":CustomerForm,
    "userContext":UserContextForm,
    "returns":ReturnsForm,
    "shipments":ShipmentsForm,
}