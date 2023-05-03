import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UploadFilesQuery } from '../state/upload-files.query';
import { UploadFilesService } from '../state/upload-files.service';
import { Observable } from 'rxjs';
import { UploadFile } from '../state/upload-file.model';

@Component({
  selector: 'app-files-menu',
  templateUrl: './files-menu.component.html',
  styleUrls: ['./files-menu.component.scss'],
})
export class FilesMenuComponent implements OnInit {
  isOpen: boolean = false;
  listFiles$: Observable<UploadFile[]> = this.uploadFilesQuery.selectAll();

  constructor(
    private uploadFilesQuery: UploadFilesQuery,
    private uploadFilesService: UploadFilesService,
    private elementRef: ElementRef
  ) {}

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  ngOnInit(): void {
    this.uploadFilesService.get().subscribe();
  }

  downloadFile(fileName: string) {
    window.open(`${environment.serverUrl}/my-files/${fileName}`, '_blank');
  }
}
