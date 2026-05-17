import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { ALERTS, RECENT_RECOMMENDATIONS } from '../../shared/mock-data/analytics';
import { KpiCard } from '../../shared/models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  readonly kpis: KpiCard[] = [
    { label: 'Active Work Orders', value: '24', delta: '+3 this week', trend: 'up', icon: 'assignment' },
    { label: 'Tools Procured (MTD)', value: '186', delta: '+12% vs last month', trend: 'up', icon: 'inventory_2' },
    { label: 'Avg Tool Life vs Target', value: '+10.5%', delta: 'Above target', trend: 'up', icon: 'timeline' },
    { label: 'Downtime Hours Saved', value: '48 h', delta: 'this month', trend: 'up', icon: 'savings' },
  ];

  readonly recent = RECENT_RECOMMENDATIONS;
  readonly alerts = ALERTS;

  readonly displayedColumns = ['time', 'material', 'operation', 'tool', 'confidence'];

  readonly quickLinks = [
    { label: 'Get a Tool Recommendation', icon: 'precision_manufacturing', route: '/app/tool-recommendation', color: 'primary' },
    { label: 'View Work Orders', icon: 'hub', route: '/app/erp-integration', color: 'accent' },
    { label: 'Open Analytics', icon: 'insights', route: '/app/analytics', color: 'primary' },
  ];
}
