// @ts-ignore
import { Component,ChangeEvent } from '@angular/core';
import {HttpService} from "../services/http.service";


@Component({
  selector: 'app-upload-pdf',
  templateUrl: './upload-pdf.component.html',
  styleUrls: ['./upload-pdf.component.css']
})

export class UploadPdfComponent {
  selectedFile: File | null = null;
  markdownContent: string = "";
  parsing: boolean = false;
  editable: boolean = false;
  apiKey: string | null = null;

  constructor(private httpService: HttpService) {}

  onFileSelected(event: any) {
    const fileList: FileList | null = event.target.files;
    if (fileList && fileList.length > 0) {
      const file: File = fileList[0];
      if (this.isValidPdf(file)) {
        this.selectedFile = file;
      } else {
        console.error("Please select a PDF file.");
      }
    }
  }

  // onSubmit() {
  //   Logic to submit the form
  //   console.log("Submitting the form...");
  // }
  upload() {
    if(this.selectedFile){
      this.parsing = true
      this.httpService.sendResumeToParse(this.selectedFile).subscribe((data) => {
        this.markdownContent = data;
        this.parsing = false;
      }, (error) => {
        this.markdownContent = ""
        this.parsing = false;
      })
    }
  }

  discardFile() {
    this.selectedFile = null;
    this.markdownContent = "";
  }
  private isValidPdf(file: File): boolean {
    return file.type === 'application/pdf';
  }

  onFileDropped(files: Array<any>) {
    const file: File = files[0]
    if (this.isValidPdf(file)) {
      this.selectedFile = file;
    } else {
      console.error("Please select a PDF file.");
    }
  }

  submitContent() {
    if(this.apiKey !== null && this.apiKey.length > 0) {

    }
  }

  setContentEdiatable() {
    this.editable = true;
  }

  saveEditedContent() {
    this.editable = false;
  }
}
