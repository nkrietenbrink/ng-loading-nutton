import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdiButtonComponent } from "./button.component";
import { AdiButtonLoaderIconDirective } from "./button.directive";
@NgModule({
  declarations: [AdiButtonComponent, AdiButtonLoaderIconDirective],
  imports: [CommonModule],
  exports: [AdiButtonComponent, AdiButtonLoaderIconDirective]
})
export class AdiButtonsModule {}
