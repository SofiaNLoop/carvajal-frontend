import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishcontentComponent } from './wishcontent.component';

describe('WishcontentComponent', () => {
  let component: WishcontentComponent;
  let fixture: ComponentFixture<WishcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
