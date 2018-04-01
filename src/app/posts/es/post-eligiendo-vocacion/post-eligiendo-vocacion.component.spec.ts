import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEligiendoVocacionComponent } from './post-eligiendo-vocacion.component';

describe('PostEligiendoVocacionComponent', () => {
  let component: PostEligiendoVocacionComponent;
  let fixture: ComponentFixture<PostEligiendoVocacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEligiendoVocacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEligiendoVocacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
