import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  loading = { 1: false, 2: false, 3: false, 4: false };

  doSomething(i: number) {
    console.log("Clicked");

    this.loading[i] = true;
    setTimeout(() => {
      this.loading[i] = false;
    }, 2000);
  }
}
