import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient : HttpClient) { }

  baseUrl = "http://127.0.0.1:5000"

  sendResumeToParse(file: File) {
    const url = `${this.baseUrl}/upload`;
    const formData: FormData = new FormData()
    formData.append("pdfFile", file);
    this.httpClient.post(url, formData).subscribe((data) => {
      console.log(data);
    });
  }
}
