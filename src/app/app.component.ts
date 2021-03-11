import { Component, OnInit } from '@angular/core';
import { ISecretAgent } from './shared/interfaces/ISecretAgent.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public layout: 'rtl' | 'ltr' = 'ltr';
  public agents: ISecretAgent[] = [
    {
      codeName: 'Velvet Thunder',
      agency: 'Alpha Protocol'
    },
    {
      codeName: 'Wet Blanket',
      agency: 'F.I.R.M.'
    },
    {
      codeName: 'Soft Hummer',
      agency: 'Section 31'
    },
    {
      codeName: 'Sidewinter',
      agency: 'DXS'
    },
    {
      codeName: 'Dizzy Rider',
      agency: 'The Agency'
    }
  ];

  ngOnInit() {
  }

  public swapLayout() {
    this.layout = this.layout === 'rtl' ? 'ltr' : 'rtl';
  }

  public sortByName(): ISecretAgent[] {

    return this.agents.sort((a, b) => a.codeName.localeCompare(b.codeName));
  }
}
