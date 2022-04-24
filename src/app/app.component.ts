import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Counter app';

  count: number = 0;

  handleIncrease = ()=>{
    this.count=this.count<10? this.count+1:this.count
   
  };
  handleDecrease = () =>{
    this.count=this.count>0? this.count-1:this.count
  };
  handleReset = () =>{
    this.count = 0;
  };


}
