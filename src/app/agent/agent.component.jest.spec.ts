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

  it('should renader h4 ', () => {
    const agent =  {
      codeName: 'Velvet Thunder',
      agency: 'Alpha Protocol'
    };
    component.agent = agent;
    fixture.detectChanges();

    const h4 = fixture.debugElement.nativeElement.querySelector('h4');
    expect(h4.innerHTML).toEqual('Velvet Thunder');
  });

  it('should render button ', () => {
    const agent =  {
      codeName: 'Velvet Thunder',
      agency: 'Alpha Protocol'
    };
    component.agent = agent;
    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.innerHTML).toEqual('Hire');
  });

  it('should render h4 before button', () => {
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

  it('should render button after h4', () => {
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

  it('[snapshot] should renders markup to snapshot', () => {
    const agent =  {
      codeName: 'Velvet Thunder',
      agency: 'Alpha Protocol'
    };
    component.agent = agent;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
