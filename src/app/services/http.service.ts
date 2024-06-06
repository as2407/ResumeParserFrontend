import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = "http://127.0.0.1:5000"

  constructor(private httpClient: HttpClient) { }

  sendResumeToParse(file: File) {
    const url = `${this.baseUrl}/upload`
    const formData = new FormData()
    formData.append('pdfFile', file)

    return this.httpClient.post(url, formData, {
     responseType: 'text'
    })
  }
}
