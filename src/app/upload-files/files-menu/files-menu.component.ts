import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-menu',
  templateUrl: './files-menu.component.html',
  styleUrls: ['./files-menu.component.scss'],
})
export class FilesMenuComponent implements OnInit {
  isOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
