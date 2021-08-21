import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {

  idctner:string = '';
  // constructor() { }
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void 
  {
    let ver = this.route.snapshot.paramMap.get("id");
    if(ver!= null) {
      this.idctner = ver;
    }
    console.log(this.idctner);
  }

}
