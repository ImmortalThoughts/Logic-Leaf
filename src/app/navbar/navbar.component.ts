import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
constructor(private el:ElementRef){}
  @Input() xsSize: any;
  showSideNav:boolean=false;
  showList:boolean = false;
  @ViewChild('serviceList')serviceList!:any;
  onMouseOver(showList:boolean){
this.showList=showList;
  }
  onMouseOut(showList:boolean){
  this.showList=showList;
  }
  }
