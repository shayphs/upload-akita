import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { UploadFilesModule } from './upload-files/upload-files.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    UploadFilesModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
