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
  private jsonUrl = 'https://graph.facebook.com/v10.0/216583225510207?fields=threads%7Bparticipants%2Cmessages.source(PARTICIPANTS).limit(1000)%7Btags%2Cmessage%7D%7D&access_token=EAApWpKKSnVABAKgaiYw0QZBfFypxOjuQJMGWIZBaBFj9eDJR9ULTiwia6oe0dxZB8k3zOT6I82bcWsonMhBOWZB30ipqtehf3RtpUcBKkA8Ii95icOO1YzeBe3ooLU45imKtWGR1pxJjeM2RZA3rig9LLKwB8VqSj8oZB8f8hF9GCxLpA7gHzibGF7vqYlLdNDNcPNva2Lt2rxuCZCbS7IZC';
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

      
      this.deviceArray = devicesArraytmp.threads.data
      this.jsonData = this.deviceArray ;

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
      console.log('data ', devicesArraytmp.data);
      
      var nextpage ='';

      
      this.deviceArray = this.deviceArray.concat(devicesArraytmp.data);
      this.jsonData =  this.deviceArray

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
   
  public writeContents( fileName, contentType) {
    var content = JSON.stringify(this.jsonData);
    var a = document.createElement('a');
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

}

