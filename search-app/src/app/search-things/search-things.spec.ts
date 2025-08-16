import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchThings } from './search-things';

describe('SearchThings', () => {
  let component: SearchThings;
  let fixture: ComponentFixture<SearchThings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchThings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchThings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
