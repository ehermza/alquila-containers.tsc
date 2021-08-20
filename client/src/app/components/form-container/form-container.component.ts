import { Component, OnInit } from '@angular/core';
import { ContainersService } from 'src/app/services/containers.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {

  container: any= {};

  constructor(private containersService:ContainersService) {     
  }

  ngOnInit(): void {
    this.getContainerOne('6109d38c69b2d1aea1f481a4');
  }

  getContainerOne(idclient:String)
   {
    this.containersService.getContainerOne(idclient)
      .subscribe (
         (res) => {
          this.container = res;
			 console.log(this.container);
        },
         (err) => {
          console.error(err);
        }
      );
  }

}

/*   constructor() { }

  ngOnInit(): void {
  }

}
 */