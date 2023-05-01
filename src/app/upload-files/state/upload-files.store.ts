import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { UploadFile } from './upload-file.model';

export interface UploadFilesState extends EntityState<UploadFile> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'upload-files' })
export class UploadFilesStore extends EntityStore<UploadFilesState> {
  constructor() {
    super();
  }
}
