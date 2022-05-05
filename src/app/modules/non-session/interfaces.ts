import { Type, EventEmitter, ComponentFactoryResolver } from "@angular/core";
import { NonSessionComponent } from './component';

export interface LandingPanel{
    navigate(panel:string, data?:any):void;
}
export interface GroupPanel{
    inputData:any;
    parentPanel:NonSessionComponent;
    navigate(panel:string, data?:any):void;
}

export interface DynamicPanel{
    inputData:any;
    parentPanel: GroupPanel
}

