import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UploadFile, createUploadFile } from './upload-file.model';
import { UploadFilesStore } from './upload-files.store';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UploadFilesService {
  constructor(
    private uploadFilesStore: UploadFilesStore,
    private http: HttpClient
  ) {}

  get() {
    return this.http.get<any>(`${environment.serverUrl}/file-list`).pipe(
      tap((entities) => {
        this.uploadFilesStore.set(entities);
      })
    );
  }

  uploadFile(uploadFile: UploadFile): Observable<UploadFile> {
    return this.http
      .post<UploadFile>(`${environment.serverUrl}/upload-akita-file`, uploadFile)
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
