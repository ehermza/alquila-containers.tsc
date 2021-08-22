import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContainersService } from 'src/app/services/containers.service';


@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {

  // idctner:string = '';
  container: any = {};
  
  constructor(
    private route: ActivatedRoute,
    private containersService: ContainersService
    ) { }

  ngOnInit(): void {
    let idByUrl = this.route.snapshot.paramMap.get("id");
    if (idByUrl != null) {
      // this.idctner = ver;  deprecated!
      this.getContainer(idByUrl);
    }
    console.log(`(PageProfileComponent) container: ${this.container}`);
  }

  getContainer(idctner:String)
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
