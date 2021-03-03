import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerificationcodePage } from './verificationcode.page';

describe('VerificationcodePage', () => {
  let component: VerificationcodePage;
  let fixture: ComponentFixture<VerificationcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationcodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerificationcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
