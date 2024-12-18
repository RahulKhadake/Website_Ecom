import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSayingComponent } from './client-saying.component';

describe('ClientSayingComponent', () => {
  let component: ClientSayingComponent;
  let fixture: ComponentFixture<ClientSayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientSayingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientSayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
