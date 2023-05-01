import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UploadFilesStore, UploadFilesState } from './upload-files.store';

@Injectable({ providedIn: 'root' })
export class UploadFilesQuery extends QueryEntity<UploadFilesState, any> {
  constructor(protected override store: UploadFilesStore) {
    super(store);
  }
}
