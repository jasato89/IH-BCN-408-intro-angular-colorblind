import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorblind',
  templateUrl: './colorblind.component.html',
  styleUrls: ['./colorblind.component.css']
})
export class ColorblindComponent implements OnInit {

  backgroundColor: string = "#F26419";

  isBackgroundChanged: boolean = false;
  
defaultFont: string = "12px";
superFont: string = "25px";

  bg1: string = "#F6AE2D";
  bg2: string = "#33658A";
  bg3: string = "#86BBD8";

  constructor() { }

  ngOnInit(): void {
  }

  changeBackgroundColor() {

    if(!this.isBackgroundChanged) {
      this.backgroundColor = "#2F4858";
      this.isBackgroundChanged = !this.isBackgroundChanged;
    } else {
      this.backgroundColor = "#F26419";
      this.isBackgroundChanged = !this.isBackgroundChanged;
    }

  }

  increaseSuperFont():void {
    this.superFont = "35px";
  }

  decreaseSuperFont():void {
    this.superFont = "25px";
  }

  increaseFont():void {
    this.defaultFont = "14px";
  }

  decreaseFont():void {
    this.defaultFont = "12px";
  }

}
