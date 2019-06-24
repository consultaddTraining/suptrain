import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ConfigService, Test } from '../config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  test: Object;
  error: Object;
  users: Object;
  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.testMethodInConfigServiceTS().subscribe(data => {
      this.users = data
      console.log(this.users);
    }
  );
  
    /*this.configService.testMethodInConfigServiceTS()
      .subscribe(
        (data: Test) => this.test = { ...data }, // success path
        error => this.error = error // error path
      );
  }*/
  }
  firstClick() {
    this.configService.firstClick();
  }
  
}
