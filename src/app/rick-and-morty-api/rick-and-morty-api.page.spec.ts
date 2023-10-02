import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RickAndMortyApiPage } from './rick-and-morty-api.page';

describe('RickAndMortyApiPage', () => {
  let component: RickAndMortyApiPage;
  let fixture: ComponentFixture<RickAndMortyApiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RickAndMortyApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
