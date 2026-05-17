import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing.component').then((m) => m.LandingComponent),
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./layout/app-shell/app-shell.component').then((m) => m.AppShellComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'tool-recommendation',
        loadComponent: () =>
          import('./features/tool-recommendation/tool-recommendation.component').then(
            (m) => m.ToolRecommendationComponent
          ),
      },
      {
        path: 'erp-integration',
        loadComponent: () =>
          import('./features/erp-integration/erp-integration.component').then(
            (m) => m.ErpIntegrationComponent
          ),
      },
      {
        path: 'analytics',
        loadComponent: () =>
          import('./features/analytics/analytics.component').then((m) => m.AnalyticsComponent),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
