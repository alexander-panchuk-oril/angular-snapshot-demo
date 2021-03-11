import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentComponent } from './agent.component';

describe('AgentComponent', () => {
  let component: AgentComponent;
  let fixture: ComponentFixture<AgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentComponent);
    component = fixture.componentInstance;
  });

  it('should render h4 before button if LTR layout', () => {
    const agent =  {
      codeName: 'Velvet Thunder',
      agency: 'Alpha Protocol'
    };
    component.agent = agent;
    component.layout = 'ltr';
    fixture.detectChanges();

    const h4 = fixture.debugElement.nativeElement.querySelector('h4');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(h4.nextElementSibling).toEqual(button);
  });

  it('should render button after h4 if LTR layout', () => {
    const agent =  {
      codeName: 'Velvet Thunder',
      agency: 'Alpha Protocol'
    };
    component.agent = agent;
    component.layout = 'ltr';
    fixture.detectChanges();

    const h4 = fixture.debugElement.nativeElement.querySelector('h4');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.previousElementSibling).toEqual(h4);
  });

  it('should render h4 after button if RTL layout', () => {
    const agent =  {
      codeName: 'Velvet Thunder',
      agency: 'Alpha Protocol'
    };
    component.agent = agent;
    component.layout = 'rtl';
    fixture.detectChanges();

    const h4 = fixture.debugElement.nativeElement.querySelector('h4');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(h4.previousElementSibling).toEqual(button);
  });

  it('should render button before h4 if RTL layout', () => {
    const agent =  {
      codeName: 'Velvet Thunder',
      agency: 'Alpha Protocol'
    };
    component.agent = agent;
    component.layout = 'rtl';
    fixture.detectChanges();

    const h4 = fixture.debugElement.nativeElement.querySelector('h4');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.nextElementSibling).toEqual(h4);
  });

  it('should render h4 before button if no layout mode', () => {
    const agent =  {
      codeName: 'Velvet Thunder',
      agency: 'Alpha Protocol'
    };
    component.agent = agent;
    fixture.detectChanges();

    const h4 = fixture.debugElement.nativeElement.querySelector('h4');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(h4.nextElementSibling).toEqual(button);
  });

  it('should render button after h4 if no layout mode', () => {
    const agent =  {
      codeName: 'Velvet Thunder',
      agency: 'Alpha Protocol'
    };
    component.agent = agent;
    fixture.detectChanges();

    const h4 = fixture.debugElement.nativeElement.querySelector('h4');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.previousElementSibling).toEqual(h4);
  });

  it('[snapshot] should render LTR layout', () => {
    const agent =  {
      codeName: 'Velvet Thunder',
      agency: 'Alpha Protocol'
    };
    component.agent = agent;
    component.layout = 'ltr';
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('[snapshot] should render RTL layout', () => {
    const agent =  {
      codeName: 'Velvet Thunder',
      agency: 'Alpha Protocol'
    };
    component.agent = agent;
    component.layout = 'rtl';
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('[snapshot] should render no layout mode', () => {
    const agent =  {
      codeName: 'Velvet Thunder',
      agency: 'Alpha Protocol'
    };
    component.agent = agent;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
