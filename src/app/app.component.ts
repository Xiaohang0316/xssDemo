import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }
  title = 'xssDemo';
  ngOnInit() {
    this.http.get('/api/helloworld').subscribe((res) => {
      // @ts-ignore
      this.title = res.data;
      console.log(res);
    })
  }
  tiaozhuan() {
    window.open('https://www.baidu.com');
  }
}
