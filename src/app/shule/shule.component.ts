import { Component ,OnInit } from '@angular/core';
import { Shule } from './shule';
import { ShuleService } from '../shule.service';




@Component({
  selector: 'app-shule',
  templateUrl: './shule.component.html',
  styleUrls: ['./shule.component.css']
})
export class ShuleComponent implements OnInit{
  
school: Shule[] = [];


constructor(private shuleService: ShuleService) {}

ngOnInit(): void {
  this.getSchools();
}

getSchools(): void {
  this.shuleService.getSchools()
      .subscribe(schools => this.school = schools);
}

add(school_name: string,adress:string,location:string): void {
  school_name = school_name.trim();
  if (!school_name) { return; }
  this.shuleService.addSchool({ school_name ,adress,location} as Shule)
    .subscribe(shule => {
      this.school.push(shule);
    });
}
delete(shule: Shule): void {
  this.school = this.school.filter(h => h !== shule);
  this.shuleService.deleteShule(shule.id).subscribe();
}

}

