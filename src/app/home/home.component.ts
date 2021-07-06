import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  imgurl:string="./D:\greenie\greenie\src\assets\images.jpg"
  
  constructor() { }

  ngOnInit(): void {
  }

}
