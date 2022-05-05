import { Component,OnInit,Input,ViewChild,ViewContainerRef,Type,ComponentFactoryResolver} from "@angular/core";
import {DynamicPanel,LandingPanel, GroupPanel} from '../interfaces'
import { NonSessionComponent } from '../component';
import { ExampleComponent } from './sample-page/component';


/**
 Const to map the screen-component to screen-name to rended the facotry 
 */
const MENU: { [key: string]:{comp:Type<DynamicPanel>,subTitle?:string}} = {
    Login: {comp:ExampleComponent },

};


@Component({
  selector: "landing-page",
  templateUrl: "./component.html",
  styleUrls: ["./component.scss"]
})
export class LandingComponent implements OnInit, GroupPanel {
  @Input() inputData: any;
  @Input() parentPanel: NonSessionComponent;
  menu: { [key: string]: Type<DynamicPanel> };
  sidenav:boolean = false;
  displayNames:{}
  cardHeader:any;
  /**
    container for the child page loaded from the seconday navbar 
   */

  @ViewChild("secondaryContainer", {static:true,read: ViewContainerRef }) container: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  
  ngOnInit() {
    this.cardHeader="Students";
    /**
     Navigate to Student List page on app load
     */
    this.navigate("Login", {});
  }

  /**
   *
   * @param compName is the name of the component to navigate to
   * @param data is for any related data needed
   */

  public navigate(compName: string, data: any): void {
    this.container.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      MENU[compName].comp
    );
    const c = this.container.createComponent(factory);
    c.instance.inputData = data;
    c.instance.parentPanel = this;
    c.changeDetectorRef.detectChanges();
  }
}
