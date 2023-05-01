import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadFilesService } from './state/upload-files.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss'],
})
export class UploadFilesComponent implements OnInit {
  uploadForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private uploadFilesService: UploadFilesService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.uploadForm = this.formBuilder.group({
      fileName: '',
      file: {},
    });
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const content = String(reader.result).split(',')[1];
        const fileToUpload = {
          fileData: {
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate,
            name: file.name,
            size: file.size,
            type: file.type,
            webkitRelativePath: file.webkitRelativePath,
            status: '',
          },
          content: content,
        };
        this.uploadForm.get('file')?.setValue(fileToUpload);
      };
    }
  }

  submitFile() {
    if (!this.uploadForm.get('fileName')?.value) {
      this.uploadForm
        .get('fileName')
        ?.setValue(this.uploadForm.get('file')?.value.fileData.name);
    }

    this.uploadFilesService.add(this.uploadForm.value);
  }
}
