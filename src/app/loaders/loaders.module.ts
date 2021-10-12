import { NgModule } from "@angular/core";
import { SearchLoaderComponent } from "./search-loader.component";
import { CircleLinesLoaderComponent } from "./circle-lines-loader.component";

@NgModule({
  declarations: [SearchLoaderComponent, CircleLinesLoaderComponent],
  exports: [SearchLoaderComponent, CircleLinesLoaderComponent]
})
export class LoadersModule {}
