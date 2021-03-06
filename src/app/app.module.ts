import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AdiButtonsModule } from "./buttons/buttons.module";
import { LoadersModule } from "./loaders/loaders.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AdiButtonsModule, LoadersModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
