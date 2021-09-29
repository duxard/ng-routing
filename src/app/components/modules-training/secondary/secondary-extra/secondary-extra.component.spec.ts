import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryExtraComponent } from './secondary-extra.component';

describe('SecondaryExtraComponent', () => {
  let component: SecondaryExtraComponent;
  let fixture: ComponentFixture<SecondaryExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryExtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
