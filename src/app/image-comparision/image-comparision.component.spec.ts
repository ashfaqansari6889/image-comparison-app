import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageComparisionComponent } from './image-comparision.component';

describe('ImageComparisionComponent', () => {
  let component: ImageComparisionComponent;
  let fixture: ComponentFixture<ImageComparisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageComparisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
