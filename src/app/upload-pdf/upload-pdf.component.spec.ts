import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPdfComponent } from './upload-pdf.component';

describe('UploadPdfComponent', () => {
  let component: UploadPdfComponent;
  let fixture: ComponentFixture<UploadPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
