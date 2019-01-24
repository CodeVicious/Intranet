import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserPerfService } from '../services/userPerf.service';
import { UserPerf } from '../../models/userperf';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-SchedaPerformance',
  templateUrl: './SchedaPerformance.component.html',
  styleUrls: ['./SchedaPerformance.component.scss']
})
export class SchedaPerformanceComponent implements OnInit{

  user: UserPerf;
  constructor(
    private route: ActivatedRoute,
    private userPerfService: UserPerfService    
  ) { }


  ngOnInit(){
    const id = +this.route.snapshot.paramMap.get('userid');
    this.route.params.subscribe(p => console.log(p));
    this.route.url.subscribe(segments => console.log(segments['path']));
    // route.data includes both `data` and `resolve`
    const user = this.route.data.subscribe(d => console.log(d));

    this.userPerfService.getUser(id).subscribe(
      data => this.user = data      
    );
    
  }


}
