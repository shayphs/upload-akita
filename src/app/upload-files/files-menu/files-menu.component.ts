import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { UploadFilesQuery } from '../state/upload-files.query';
import { Observable } from 'rxjs';
import { UploadFile } from '../state/upload-file.model';

@Component({
  selector: 'app-files-menu',
  templateUrl: './files-menu.component.html',
  styleUrls: ['./files-menu.component.scss'],
})
export class FilesMenuComponent implements OnInit {
  isOpen: boolean = false;
  listFiles$!: Observable<UploadFile[]>;

  constructor(
    private uploadFilesQuery: UploadFilesQuery,
    private elementRef: ElementRef
  ) {}

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  ngOnInit(): void {
    this.listFiles$ = this.uploadFilesQuery.selectAll();
    // this.uploadFilesQuery.selectAll().subscribe((res) => {
    //   console.log(res);
    // });
  }
}
