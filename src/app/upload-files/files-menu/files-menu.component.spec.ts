import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesMenuComponent } from './files-menu.component';

describe('FilesMenuComponent', () => {
  let component: FilesMenuComponent;
  let fixture: ComponentFixture<FilesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilesMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
