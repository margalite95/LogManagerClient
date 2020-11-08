import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLogComponent } from './get-log.component';

describe('GetLogComponent', () => {
  let component: GetLogComponent;
  let fixture: ComponentFixture<GetLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
