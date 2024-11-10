import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizarlibroPage } from './visualizarlibro.page';

describe('VisualizarlibroPage', () => {
  let component: VisualizarlibroPage;
  let fixture: ComponentFixture<VisualizarlibroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarlibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
