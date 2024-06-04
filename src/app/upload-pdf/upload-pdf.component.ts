// @ts-ignore
import { Component,ChangeEvent } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-upload-pdf',
  templateUrl: './upload-pdf.component.html',
  styleUrls: ['./upload-pdf.component.css']
})

export class UploadPdfComponent {
  selectedFile: File | null = null;

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

  }

  discardFile() {
    this.selectedFile = null;
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
}
