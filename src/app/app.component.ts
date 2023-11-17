import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { GlobalContainerService } from './services/global-container.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet';

constructor(
  public globalService: GlobalContainerService){
  }
}
