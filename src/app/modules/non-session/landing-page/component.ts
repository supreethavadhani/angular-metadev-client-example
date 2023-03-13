import { Component,OnInit,Input,ViewChild,ViewContainerRef,Type,ComponentFactoryResolver} from "@angular/core";
import { DynamicPanel,GroupPanel } from '../interfaces'
import { NonSessionComponent } from '../component';
import { SampleComponent } from './pages/sample-component';


/**
 Const to map the screen-component to screen-name to rended the facotry 
 */
const MENU: { [key: string]:{comp:Type<DynamicPanel>,subTitle?:string}} = {
    Login: {comp:SampleComponent },

};


@Component({
  selector: "app-landing-page",
  templateUrl: "./component.html",
  styleUrls: []
})
export class LandingComponent implements OnInit, GroupPanel {
  @Input() inputData: any;
  @Input() parentPanel: NonSessionComponent;
  menu: { [key: string]: Type<DynamicPanel> };
  @ViewChild("secondaryContainer", {static:true,read: ViewContainerRef }) container: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  
  ngOnInit() {
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
