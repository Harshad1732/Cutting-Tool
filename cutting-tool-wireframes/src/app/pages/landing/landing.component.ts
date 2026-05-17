import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

interface Feature {
  icon: string;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  highlight?: boolean;
}

interface FlowStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

interface ImpactStat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule, MatCardModule, MatChipsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  readonly problems: string[] = [
    'Complex tool selection across material grade, machine parameters & operation type',
    'Over-dependence on distributor recommendations',
    'Lack of standardization across tool specifications',
    'No integration between shopfloor requirements and procurement',
    'Frequent tool failures and unplanned machine downtime',
    'Inflated cost per component due to wrong tool choices',
  ];

  readonly features: Feature[] = [
    {
      icon: 'precision_manufacturing',
      title: 'Engineering-Driven Tool Recommendation Engine',
      badge: 'Core Differentiator',
      description:
        'AI-driven engine that maps workpiece, operation and machine to the optimal cutting tool plus recommended speed, feed and depth.',
      bullets: [
        'Inputs: material, operation, machine, finish target',
        'Outputs: optimal insert / drill / end mill with parameters',
        'Confidence-scored recommendations',
      ],
      highlight: true,
    },
    {
      icon: 'hub',
      title: 'ERP + Shopfloor Integration',
      badge: 'Workflow-Native',
      description:
        'Auto-fetches work orders, BOM and tool consumption history. Procurement starts from actual production need, not manual request.',
      bullets: ['Work order awareness', 'BOM auto-fetch', 'Tool consumption history'],
    },
    {
      icon: 'storefront',
      title: 'Distributor-Enabled Procurement Layer',
      badge: 'Ecosystem-Friendly',
      description:
        'Multiple authorised distributors, real-time availability and price comparison — strengthens distributor participation without disrupting existing relationships.',
      bullets: ['Authorised distributor network', 'Real-time availability', 'Transparent price comparison'],
    },
    {
      icon: 'insights',
      title: 'Learning & Optimization Engine',
      badge: 'Adaptive AI',
      description:
        'Continuous feedback loop on tool life, failures and rejections — recommendations improve with every shift.',
      bullets: ['Tool life tracking', 'Failure pattern analysis', 'Self-improving recommendations'],
    },
  ];

  readonly differentiation = [
    { typical: 'Marketplace-driven', us: 'Engineering + workflow-driven' },
    { typical: 'Focus on price', us: 'Focus on performance + productivity' },
    { typical: 'External to operations', us: 'Embedded inside ERP / shopfloor' },
    { typical: 'Static catalog', us: 'AI-driven adaptive system' },
  ];

  readonly flow: FlowStep[] = [
    { step: 1, icon: 'assignment', title: 'Work Order Created', description: 'A work order is created inside the connected ERP system.' },
    { step: 2, icon: 'manufacturing', title: 'Operations Identified', description: 'The platform identifies the required machining operations from the routing.' },
    { step: 3, icon: 'smart_toy', title: 'AI Recommends Tools', description: 'Optimal tools and cutting parameters are recommended.' },
    { step: 4, icon: 'verified', title: 'Compatibility Validated', description: 'The selection is validated against machine capability and stock.' },
    { step: 5, icon: 'local_shipping', title: 'Distributor Options Shown', description: 'Authorised distributors, availability and prices are surfaced.' },
    { step: 6, icon: 'shopping_cart_checkout', title: 'Order Placed', description: 'The user confirms — procurement happens in a single click.' },
    { step: 7, icon: 'autorenew', title: 'Feedback Loop', description: 'Performance data feeds back to improve future recommendations.' },
  ];

  readonly impact: ImpactStat[] = [
    { value: '25–40%', label: 'Improvement in tool selection accuracy' },
    { value: '↓ Downtime', label: 'Significant reduction in machine downtime' },
    { value: 'Faster', label: 'Procurement cycle time' },
    { value: '↑ Utilization', label: 'Improved tool utilization' },
    { value: 'Transparent', label: 'Pricing & availability for MSMEs' },
  ];

  readonly targetUsers = [
    'CNC Machine Shops',
    'Precision Component Manufacturers',
    'Auto / Aerospace Suppliers',
    'Tool Room Engineers',
    'Procurement Teams',
  ];
}
