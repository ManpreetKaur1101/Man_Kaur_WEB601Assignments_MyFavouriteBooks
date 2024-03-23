import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConetntCardComponent } from './conetnt-card.component';

describe('ConetntCardComponent', () => {
  let component: ConetntCardComponent;
  let fixture: ComponentFixture<ConetntCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConetntCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConetntCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
