import { Component, Input, OnInit } from '@angular/core';
import { ContainersService } from 'src/app/services/containers.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {

  @Input() IDCONT: string= '';

  container: any= {};

  constructor(private containersService:ContainersService) {     
  }

  ngOnInit(): void {
    this.getContainerOne(this.IDCONT);
  }

  getContainerOne(idctner:String)
   {
    this.containersService.getContainerOne(idctner)
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