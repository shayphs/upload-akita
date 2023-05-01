import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { FilesMenuComponent } from './upload-files/files-menu/files-menu.component';

@NgModule({
  declarations: [AppComponent, UploadFilesComponent, FilesMenuComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
