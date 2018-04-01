import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostChoosingVocationComponent } from './post-choosing-vocation.component';

describe('PostChoosingVocationComponent', () => {
  let component: PostChoosingVocationComponent;
  let fixture: ComponentFixture<PostChoosingVocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostChoosingVocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostChoosingVocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
