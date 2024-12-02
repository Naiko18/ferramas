import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciotallerPage } from './iniciotaller.page';

describe('IniciotallerPage', () => {
  let component: IniciotallerPage;
  let fixture: ComponentFixture<IniciotallerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciotallerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
