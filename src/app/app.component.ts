import { Component } from '@angular/core';
declare var jquery:any;
declare var baguetteBox:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  ngOnInit() {
    baguetteBox.run('.tz-gallery');
 }


  title = 'snapandshoot';
}
