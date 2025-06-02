import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuienesomosPage } from './quienesomos.page';

describe('QuienesomosPage', () => {
  let component: QuienesomosPage;
  let fixture: ComponentFixture<QuienesomosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienesomosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
