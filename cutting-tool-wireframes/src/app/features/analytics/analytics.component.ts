import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import {
  LineChartModule,
  BarChartModule,
  PieChartModule,
} from '@swimlane/ngx-charts';
import {
  FAILURE_BY_GRADE,
  REJECTION_REASONS,
  TOOL_LIFE_TREND,
  TOOL_UTILIZATION,
} from '../../shared/mock-data/analytics';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
    LineChartModule,
    BarChartModule,
    PieChartModule,
  ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent {
  readonly toolLifeTrend = TOOL_LIFE_TREND;
  readonly failureByGrade = FAILURE_BY_GRADE;
  readonly rejectionReasons = REJECTION_REASONS;
  readonly utilization = TOOL_UTILIZATION;

  readonly utilColumns = ['toolCode', 'expected', 'actual', 'utilisation', 'status'];

  readonly brandScheme = {
    domain: ['#e63946', '#2e7d32', '#f59e0b', '#1976d2', '#9333ea', '#0891b2'],
  } as any;

  readonly redScheme = {
    domain: ['#e63946', '#ff8a80', '#ffcdd2'],
  } as any;

  readonly kpis = [
    { label: 'Avg Tool Life', value: '420', unit: 'parts', delta: '+10.5% vs target', icon: 'timeline', tone: 'good' },
    { label: 'Failure Rate', value: '2.8', unit: '%', delta: '−0.6 pp this month', icon: 'bug_report', tone: 'good' },
    { label: 'Rejection Rate', value: '1.2', unit: '%', delta: '−0.2 pp this month', icon: 'block', tone: 'good' },
    { label: 'Feedback Points', value: '142', unit: 'this month', delta: 'AI model retrained', icon: 'psychology', tone: 'neutral' },
  ];

  utilStatusClass(s: string) {
    if (s.includes('Above')) return 'above';
    if (s.includes('On')) return 'on';
    return 'below';
  }
}
