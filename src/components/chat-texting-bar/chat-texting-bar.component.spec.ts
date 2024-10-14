import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTextingBarComponent } from './chat-texting-bar.component';

describe('ChatTextingBarComponent', () => {
  let component: ChatTextingBarComponent;
  let fixture: ComponentFixture<ChatTextingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatTextingBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatTextingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
