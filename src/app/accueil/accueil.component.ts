import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { GlobalContainerService } from '../services/global-container.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements AfterViewInit {
  @ViewChildren("expansionPanels") expansionPanels: QueryList<MatExpansionPanel>;
  public idSolutionImg = 0;
  number = 0;
  public stepServices = [
    {
      title:'Prestation de qualité',
      paragraphe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cumque, magnam rem quibusdam adipisci quidem!'
    },
    {
      title:'Entreprise inclusive',
      paragraphe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cumque, magnam rem quibusdam adipisci quidem!'
    },
    {
      title:'Economie Sociale & Solidaire',
      paragraphe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cumque, magnam rem quibusdam adipisci quidem!'
    }
  ]

  public linksContent = [
    {
      title:"Flux documentaires",
      content:"Lorem ipsum dolor sit amet."
    },
    {
      title:"Studio de développement",
      content:"Lorem ipsum dolor sit amet."
    },
    {
      title:"L'atelier numérique",
      content:"Lorem ipsum dolor sit amet."
    },
    {
      title:"Livraison urbaine",
      content:"Lorem ipsum dolor sit amet."
    },
    {
      title:"Service postal",
      content:"Lorem ipsum dolor sit amet."
    },
    {
      title:"Conciergerie d'entreprise",
      content:"Lorem ipsum dolor sit amet."
    },
    {
      title:"Formations",
      content:"Lorem ipsum dolor sit amet."
    },
  ]

  constructor(public renderer:Renderer2,public globalService:GlobalContainerService){
    
  }


  public getTimeout(timeout:number){
    return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, timeout);
    })
  }

  ngAfterViewInit(): void {
    this.selectDefaultOffer(0);
  }


public selectDefaultOffer(index:number){
  const id = this.expansionPanels.toArray()[index]._headerId;
  const selectedElement = document.querySelector(`#${id}`);
  this.renderer.addClass(selectedElement,"expansionSelected")
}

changeSelection(next:boolean){
  let step = next ? 1 : -1;
  let indexSelected = this.expansionPanels.toArray().findIndex((currentItem) => {
    return document.querySelector(`#${currentItem._headerId}`)?.classList.contains("expansionSelected")
  });


  if(!this.expansionPanels.toArray()[indexSelected + step]){
    indexSelected =  next ? 0 : this.expansionPanels.toArray().length - 1;
  }else{
    indexSelected = indexSelected + step
  }

  this.openSolutionLinks(indexSelected)
}

 openSolutionLinks(index:number){
  this.expansionPanels.toArray().forEach((currentItem) => {
    const selectedElement = document.querySelector(`#${currentItem._headerId}`);
    this.renderer.removeClass(selectedElement,"expansionSelected")
    currentItem.close()
  });
    const id = this.expansionPanels.toArray()[index]._headerId;
    const selectedElement = document.querySelector(`#${id}`);
    this.renderer.addClass(selectedElement,"expansionSelected")
    this.idSolutionImg = index;
    this.selectDefaultOffer(index);

  // expand version
  // if(this.expansionPanels.toArray()[index]?.expanded){
  //   this.expansionPanels.toArray().forEach((currentItem) => {
  //     const selectedElement = document.querySelector(`#${currentItem._headerId}`);
  //     this.renderer.removeClass(selectedElement,"expansionSelected")
  //     currentItem.close()
  //   });
  //   this.expansionPanels.toArray()[index].open();
  //   const id = this.expansionPanels.toArray()[index]._headerId;
  //   const selectedElement = document.querySelector(`#${id}`);
  //   this.renderer.addClass(selectedElement,"expansionSelected")
  // }
 }





}
