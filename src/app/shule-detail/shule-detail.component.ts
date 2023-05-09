import { Component,OnInit } from '@angular/core';
import { Shule } from '../shule/shule';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { ShuleService } from '../shule.service';

@Component({
  selector: 'app-shule-detail',
  templateUrl: './shule-detail.component.html',
  styleUrls: ['./shule-detail.component.css']
})

export class ShuleDetailComponent implements OnInit {

shule: Shule | undefined;

constructor(
    private route: ActivatedRoute,
    private shuleService: ShuleService,
    private location: Location
  ) {}

 
ngOnInit(): void {
  this.getShule();
}

getShule(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.shuleService.getShule(id)
    .subscribe(school => this.shule = school);
}
goBack(): void {
  this.location.back();
}

save(): void {
  if (this.shule) {
    this.shuleService.updateSchool(this.shule)
      .subscribe(() => this.goBack());
  }
}

}
