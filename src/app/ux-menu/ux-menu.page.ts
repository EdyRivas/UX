import { Component, OnInit } from '@angular/core';
import { __awaiter } from 'tslib';
let click=false
@Component({
  selector: 'app-ux-menu',
  templateUrl: './ux-menu.page.html',
  styleUrls: ['./ux-menu.page.scss'],
})
export class UxMenuPage implements OnInit {

  
  constructor() { }

  CLickMenu(){
    if (click == false){
      document.getElementById('ItemMenu').style.transform = "rotate(90deg)";
      document.getElementById('menuSide').style.visibility = "initial";
      document.getElementById('menuSide').style.transform = "translate(0px)";
      document.getElementById('pageAll').style.backgroundColor = "#160D17";
      click =true
    }else{
      document.getElementById('ItemMenu').style.transform = "rotate(180deg)";
      document.getElementById('menuSide').style.transform = "translate(-700px)";
      document.getElementById('menuSide').style.visibility = "hidden";
      document.getElementById('pageAll').style.backgroundColor = "#312433";
      click =false
    }
  }

  ngOnInit() {
  }

}

