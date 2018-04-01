import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAventuraComienzaComponent } from './post-aventura-comienza.component';

describe('PostAventuraComienzaComponent', () => {
  let component: PostAventuraComienzaComponent;
  let fixture: ComponentFixture<PostAventuraComienzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAventuraComienzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAventuraComienzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
