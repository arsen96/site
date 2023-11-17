import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements AfterViewInit {
  @Input({ required: true }) allNumbers: Array<number> = new Array();
  @ViewChildren("eachNumber") numbers: QueryList<ElementRef>;
  public objectNumbers:Array<any> = [];

  public getTimeout(timeout:number){
    return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, timeout);
    })
  }

  ngAfterViewInit(): void {
    let options = {
      threshold: 1,
    };
    this.allNumbers.forEach((number) => {
      this.objectNumbers.push({initialValue:0,number})
    })

    this.numbers.changes.subscribe(() => {
      this.objectNumbers.forEach((currObj) => {
        const durationTotal = 3000;
        const durationInterval = 2; 
        const increment = (currObj.number / durationTotal) * durationInterval;
        const observer = new IntersectionObserver(entries => {
        entries.forEach(async entry => {
          if(entry.isIntersecting){
            observer.unobserve(entry.target)
            for(let i = 0;i <= currObj.number;i++){
              if(currObj.initialValue === currObj.number){
                break;
              }
              await this.getTimeout(durationInterval)
              currObj.initialValue = Math.round((currObj.initialValue + increment));
              currObj.initialValue = Math.min(currObj.initialValue, currObj.number);
            }
          }
        })
      },options)
      this.numbers.toArray().forEach((eachElement) => {
        observer.observe(eachElement.nativeElement)
      })
    })
    })
  }
  }
