import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  public get window(){
    return window;
  }

  constructor(){

  }

  ngOnInit(): void {};

}
