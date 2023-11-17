import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, distinctUntilChanged, map, } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
export interface Breadcrumb {
  label: void;
  url?: string;
}

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  private readonly _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(event => {
      const root = this.router.routerState.snapshot.root;
      console.log("snapshot",root)
      console.log("router",this.router)
      const breadcrumbs: Breadcrumb[] = [];
      this.addBreadcrumb(root, [], breadcrumbs);

      // Emit the new hierarchy
      this._breadcrumbs$.next(breadcrumbs);
    });
  }
    
  private addBreadcrumb(route: ActivatedRouteSnapshot, parentUrl: string[], breadcrumbs: Breadcrumb[]) {
    if (route) {
      const routeUrl = parentUrl.concat(route.url.map(url => url.path));
        const routeDATA = route.data as any
      if (routeDATA.breadcrumb) {
        const breadcrumb = {
          label: routeDATA.breadcrumb,
          url: '/' + routeUrl.join('/')
        };
        breadcrumbs.push(breadcrumb);
      }

      // Add another element for the next route part
      this.addBreadcrumb((route as any).firstChild, routeUrl, breadcrumbs);
    }
  }
}