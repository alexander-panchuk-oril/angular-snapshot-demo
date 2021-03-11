import { Component, Input, OnInit } from '@angular/core';
import { ISecretAgent } from '../shared/interfaces/ISecretAgent.interface';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {

  @Input()
  public layout: 'ltr' | 'rtl';

  @Input()
  public agent: ISecretAgent;

  constructor() { }

  ngOnInit(): void {
  }

}
