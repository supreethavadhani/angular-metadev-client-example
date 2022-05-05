import { ClientContext } from 'src/app/framework-modules/formdata/form/clientContext';
import { Injectable } from "@angular/core";
const pScreensMap = {
  G01: ["D01", "D02", "D03"],
  G02: ["D04"],
  G03: ["D05", "D06", "D07", "D08", "D09", "D10", "D11", "D12", "D13", "D14","D130","D131","D137","D139","D140"],
  G04: ["D16", "D17", "D18", "D19", "D20", "D21", "D22", "D23","D24","D25","D26","D27","D56","D66","D67","D68","D83","D84","D88","D113","D153","D154"],
  G05: ["D28", "D29", "D30", "D31","D80","D81","D82"],
  G06: ["D32", "D33", "D34","D35","D87","D89","D138"],
  G07: ["D15", "D36", "D37","D38", "D39", "D40", "D41", "D42", "D43", "D44","D143","D144","D145","D146","D147","D148"],
  G08: ["D45","D46","D47","D48","D49","D50","D51","D52","D57","D58","D59","D60","D61","D62","D63","D64","D65","D69","D70","D71","D72","D73","D74","D75","D76","D77","D78","D79","D80","D101","D102","D103","D104","D105","D106","D107","D108","D109","D110","D111","D85","D86","D112","D133","D134","D141","D142","D150","D151","D152","D155","D156","D157","D158","D159","D160","D161","D162","D163","D164"],
  G09:["D54"],
  G10:["D55"],
  G11:["D120","D121","D122","D123","D149"],
  G12:["D132"],
  G13:["D135","D136"],
  G14: ["D165","D166","D167","D168","D169","D170","D171","D172","D173","D174","D175","D176"],
};

@Injectable()
export class MenuService {
  pScreens: Array<string> = [];
  modules: string[];

  constructor(private cc: ClientContext) {
  }

  getPermittedScreens() {
    let permittedScreens = this.cc.getPermittedScreens();
    this.pScreens = [];
    this.modules = [];
    for (let i = 0; i < permittedScreens.length; i++) {
      Object.keys(pScreensMap).forEach(key => {
        pScreensMap[key].forEach(element => {
          if (element == permittedScreens[i]) {
            this.pScreens.push(element)
            if (!this.pScreens.includes(key)) {
              this.pScreens.push(key)
              this.modules.push(key)
            }
          }
        });
      });
    }
    return this.pScreens;
  }

  getPermittedModules(){
    return this.modules;
  }

  getScreens(){
    return this.pScreens;
  }
}
