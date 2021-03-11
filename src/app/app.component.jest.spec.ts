import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AgentComponent } from './agent/agent.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FontAwesomeModule
      ],
      declarations: [
        AppComponent,
        AgentComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should sort agents by name', () => {
    const sortedAgents = fixture.componentInstance.sortByName();
    expect(sortedAgents).toEqual([
      {
        codeName: 'Dizzy Rider',
        agency: 'The Agency'
      },
      {
        codeName: 'Sidewinter',
        agency: 'DXS'
      },
      {
        codeName: 'Soft Hummer',
        agency: 'Section 31'
      },
      {
        codeName: 'Velvet Thunder',
        agency: 'Alpha Protocol'
      },
      {
        codeName: 'Wet Blanket',
        agency: 'F.I.R.M.'
      }
    ]);
  });

  it('[snapshot] should sort agents by name', () => {
    const sortedAgents = component.sortByName();
    expect(sortedAgents).toMatchSnapshot();
  });
});
