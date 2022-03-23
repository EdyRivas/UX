import { Component } from '@angular/core';
import { ApiconsumerService} from '../services/apiconsumer.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  response;
  constructor(private apiconsumer: ApiconsumerService) {}
  cardsArray = ['one', 'tow', 'three']
  CallAPI(){
    this.apiconsumer.test().subscribe((response)=>{
      
      this.response = response;
    })
  }

}
