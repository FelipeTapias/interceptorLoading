import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptoServiceComponent } from './intercepto-service.component';

describe('InterceptoServiceComponent', () => {
  let component: InterceptoServiceComponent;
  let fixture: ComponentFixture<InterceptoServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterceptoServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
