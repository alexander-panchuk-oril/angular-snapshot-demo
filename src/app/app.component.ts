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
      codeName: 'Velvet Thunder'
    },
    {
      codeName: 'Wet Blanket'
    },
    {
      codeName: 'Soft Hummer'
    },
    {
      codeName: 'Sidewinter'
    }
  ];

  ngOnInit() {}

  public swapLayout() {
    this.layout = this.layout === 'rtl' ? 'ltr' : 'rtl';
  }

  public sortByName(): ISecretAgent[] {
    return this.agents.sort((a, b) => a.codeName.localeCompare(b.codeName));
  }
}
