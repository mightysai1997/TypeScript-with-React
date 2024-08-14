import { Component } from '@angular/core';

@Component({
  selector: 'app-vulnerable-calculator',
  template: `
    <div>
      <input [(ngModel)]="expression" placeholder="Enter expression" />
      <button (click)="calculate()">Calculate</button>
      <p *ngIf="result !== undefined">Result: {{ result }}</p>
    </div>
  `,
  styles: []
})
export class VulnerableCalculatorComponent {
  expression: string = '';
  result: number | undefined;

  calculate(): void {
    try {
      // Dangerous: Executes any code passed to it as a string
      this.result = eval(this.expression);
    } catch (error) {
      console.error('Error executing code:', error);
      this.result = undefined;
    }
  }
}
