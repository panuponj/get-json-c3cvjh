import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public jsonData;
  public nextpage = '';
  public count = 0;
  public round = 0;
  private jsonUrl = 'https://graph.facebook.com/v10.0/507784162599885?fields=threads%7Bparticipants%2Cmessages.source(PARTICIPANTS).limit(1000)%7Btags%2Cmessage%7D%7D&access_token=EAAGFpZB6Ngn0BAMb8Oyu7ZBEW73TkH7fxrXDGA8JWkXuXQSPaQuuo33aM5DfZBWhIpZCL2h9B9Yk8ZAijdRa17ZAFNVLbEDzZBcT3RtnxkZBgRZAQnZARwY3khSReFNUIgvfl7AklI9RtMEbloAkyJhc3ZCwfcRoFPUaQQXoEXtO33EjKAkEAAPISdk2Ye5bLDgrcrvCVOKpMyUQYmxAimJPqd9'
  public deviceArray: [];
  public deviceArraytmp: [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getJson()
  }

  public getJson() {
    return this.http.get(this.jsonUrl).subscribe((devicesArraytmp) => {
      console.log('data ', devicesArraytmp);
      
      var nextpage ='';

      

      this.jsonData =  devicesArraytmp.threads.data;

      this.nextpage =  devicesArraytmp.threads.paging.next;

      this.count = this.jsonData.length;

     this.round = 1;
      

    

      for (let i = 0; i < this.jsonData.length; i++) {
        // deviceArray.push(devices[i].lineId)
        // this.deviceArray.push(this.deviceArray[i]);
      }
        console.log(this.deviceArray, " !!!!!!!!!!!!!!!!!");

    });
  }

  public getJsonByClick(clickurl) {
    return this.http.get(clickurl).subscribe((devicesArraytmp) => {
      console.log('data ', devicesArraytmp);
      
      var nextpage ='';

      

      this.jsonData =  this.jsonData.concat(devicesArraytmp.data);

      this.nextpage =  devicesArraytmp.paging.next;

      
this.count = this.jsonData.length;
     this.round = this.round + 1;
      

    

      for (let i = 0; i < this.jsonData.length; i++) {
        // deviceArray.push(devices[i].lineId)
        // this.deviceArray.push(this.deviceArray[i]);
      }
        console.log(this.deviceArray, " !!!!!!!!!!!!!!!!!");

    });
  }
   
  

}

