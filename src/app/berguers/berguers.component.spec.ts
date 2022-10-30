import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerguersComponent } from './berguers.component';

describe('BerguersComponent', () => {
  let component: BerguersComponent;
  let fixture: ComponentFixture<BerguersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerguersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerguersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
