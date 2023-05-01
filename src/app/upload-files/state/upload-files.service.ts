import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { UploadFile } from './upload-file.model';
import { UploadFilesStore } from './upload-files.store';

@Injectable({ providedIn: 'root' })
export class UploadFilesService {
  constructor(
    private uploadFilesStore: UploadFilesStore,
    private http: HttpClient
  ) {}

  get() {
    return this.http.get<UploadFile[]>('https://api.com').pipe(
      tap((entities) => {
        this.uploadFilesStore.set(entities);
      })
    );
  }

  add(uploadFile: UploadFile) {
    this.uploadFilesStore.add(uploadFile);
  }

  update(id: ID, uploadFile: Partial<UploadFile>) {
    this.uploadFilesStore.update(id, uploadFile);
  }

  remove(id: ID) {
    this.uploadFilesStore.remove(id);
  }
}
