import { Directive, TemplateRef } from "@angular/core";
@Directive({
  selector: "ng-template[adiButtonLoader]"
})
export class AdiButtonLoaderIconDirective {
  constructor(public tpl: TemplateRef<any>) {}
}
