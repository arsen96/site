import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<Promise<any>> {

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.paramMap.get('id');
        return of(1).toPromise();
    }
}