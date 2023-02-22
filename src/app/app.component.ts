import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.subs.add(this.apiService.getAllData().subscribe({
      next: (res: any) => {
        console.log(res);

      },
      error: (err) => {
        console.error(`response error ${err}`);
      }
    }));
  }

  ngOnDestroy() {

  }
}
