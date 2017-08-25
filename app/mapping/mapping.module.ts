import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { MappingRoutingModule } from "./mapping-routing.module";
import { MappingComponent } from "./mapping.component";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";

import { registerElement } from "nativescript-angular/element-registry";
registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);

@NgModule({
  imports: [
    NativeScriptModule,
    MappingRoutingModule,
    TNSFontIconModule,
  ],
  declarations: [
    MappingComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class MappingModule { }