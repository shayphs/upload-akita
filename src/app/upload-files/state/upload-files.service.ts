import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UploadFile, createUploadFile } from './upload-file.model';
import { UploadFilesStore } from './upload-files.store';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UploadFilesService {
  constructor(
    private uploadFilesStore: UploadFilesStore,
    private http: HttpClient
  ) {}

  get() {
    return this.http.get<any>('http://localhost:3000/file-list').pipe(
      tap((entities) => {
        this.uploadFilesStore.set(entities);
      })
    );
  }

  uploadFile(uploadFile: UploadFile): Observable<UploadFile> {
    return this.http
      .post<UploadFile>('http://localhost:3000/upload-akita-file', uploadFile)
      .pipe(
        tap((value) => {
          if (!!value.status) {
            const uf = createUploadFile(value);
            this.uploadFilesStore.add(uf);
          }
        })
      );
  }
}
