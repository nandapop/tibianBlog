import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdventureBeginsComponent } from './post-adventure-begins.component';

describe('PostAdventureBeginsComponent', () => {
  let component: PostAdventureBeginsComponent;
  let fixture: ComponentFixture<PostAdventureBeginsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAdventureBeginsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAdventureBeginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
