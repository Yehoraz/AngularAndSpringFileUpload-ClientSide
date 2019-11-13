import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularAndSpring';

  private file = null;

  constructor(private http: HttpClient) { }

  private imageChoice(theEventFromHtml) {
    this.file = theEventFromHtml.target.files[0];
  }

  private sendFile() {

    if (this.file !== null) {

      const formdata: FormData = new FormData();

      formdata.append('file', this.file);

      this.http.post("http://localhost:8383/addFile", formdata, { observe: 'response', responseType: 'text'}).subscribe();
    }
  }
}
