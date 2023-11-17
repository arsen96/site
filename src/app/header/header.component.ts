import { Component,Inject, Renderer2 } from '@angular/core';
import { Route } from '@angular/router';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Breadcrumb, BreadcrumbService, } from '../services/breadcrumb.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public darkMode = false;
  breadcrumbs: any
  public get window(){
    return window;
  }
  constructor(public renderer:Renderer2,public breadcrumbService:BreadcrumbService){
     breadcrumbService.breadcrumbs$.subscribe((result) => {
      this.breadcrumbs = result;
    })
    this.setBodyHTML();
  }

  switchDarkMode(){
    this.darkMode = !this.darkMode
    this.setBodyHTML();
  }

  setBodyHTML(){
    this.darkMode ? this.renderer.addClass(document.body,'darkMode') : this.renderer.removeClass(document.body,'darkMode')
  }

}
