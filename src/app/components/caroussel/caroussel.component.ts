import { Component,AfterViewInit, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { NgbPaginationModule, NgbAlertModule, NgbCarouselConfig,NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent implements AfterViewInit {

  @Input({ required: true }) images:Array<string>
  @Input({ required: false }) bannerColor:string;
  @Input({ required: true }) bannerText:{title:string;subTitle:string};
  @Input() options: { showNavigationArrows: boolean,showNavigationIndicators:boolean };
  showNavigationArrows = false;
	showNavigationIndicators = false;
  public displayCarousel = false;
	constructor(public config: NgbCarouselConfig,public cd:ChangeDetectorRef) {}

  ngAfterViewInit(){
    this.config.showNavigationArrows = this.options?.showNavigationArrows && this.images?.length > 1 || false;
		this.config.showNavigationIndicators =  this.options?.showNavigationIndicators && this.images?.length > 1 || false;
    this.displayCarousel = true;
    this.cd.detectChanges();
  }

}
