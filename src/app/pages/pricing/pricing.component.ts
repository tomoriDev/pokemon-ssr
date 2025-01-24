import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  styleUrl: './pricing.component.scss',
  templateUrl: './pricing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingComponent {}
