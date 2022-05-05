import { Component, OnInit, ViewChild, ViewContainerRef, Type, ComponentFactoryResolver, Input } from '@angular/core';
import { LandingPanel, GroupPanel } from './interfaces';
import { LandingComponent } from './landing-page/component';
 
/**
 * temp during development. will come from menuService
 */
const ROUTES: { [key: string]: Type<GroupPanel> } = {
    Landing: LandingComponent,
};


@Component({
  selector: 'non-session',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})

export class NonSessionComponent implements LandingPanel,OnInit {

  menu: { [key: string]: Type<GroupPanel> };

  selected:boolean = false;
  c:ComponentFactoryResolver;


  @ViewChild("primaryContainer", {static:true,read: ViewContainerRef }) container: ViewContainerRef;
  sideNav: Array<any> = [];
  sideNavLength: number = 0;
  selectedSideNavItem: string;

  constructor(private componentFactoryResolver: ComponentFactoryResolver ) { }
 
  ngOnInit() {
    /**
     * after we write menuService, we will use it this way.
     * this.menus = this.menuService.getMainMenu();
     */
    this.menu = ROUTES;
    this.navigate('Landing');
    // this.navigate('Maintenance');
  }

  /**
   * 
   * @param panelName landing panel to be opened in the container
   * @param data any optional data t be passed to the landing panel
   */
  public navigate(panelName: string,data?: any): void {
    
    this.container.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.menu[panelName]);
    const c = this.container.createComponent(factory);
    c.instance.parentPanel = this;
    c.instance.inputData = data;
    c.changeDetectorRef.detectChanges();
  }
  
  navigation(moduleId)
  { 
    this.selected=true;
    this.navigate(moduleId);
    }
}
