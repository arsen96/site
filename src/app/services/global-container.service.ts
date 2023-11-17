import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class GlobalContainerService {
  public isMobile:boolean
  public isTablet:boolean
  public isDesktop:boolean
  constructor(
    private deviceService: DeviceDetectorService){
      this.isMobile = this.deviceService.isMobile();
      this.isTablet = this.deviceService.isTablet();
      this.isDesktop = this.deviceService.isDesktop();
    }
}
