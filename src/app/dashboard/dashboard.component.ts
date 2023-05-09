import { Component ,OnInit} from '@angular/core';
import { Shule } from '../shule/shule';
import { ShuleService } from '../shule.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  schools: Shule[] = [];

  constructor(private shuleService: ShuleService) { }

  ngOnInit(): void {
    this.getSchools();
  }

  getSchools(): void {
    this.shuleService.getSchools()
      .subscribe(schools => this.schools = schools.slice(1, 5));
  }
}
