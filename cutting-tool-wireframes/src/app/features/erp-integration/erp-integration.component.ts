import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { WORK_ORDERS } from '../../shared/mock-data/work-orders';
import { WorkOrder } from '../../shared/models';

@Component({
  selector: 'app-erp-integration',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatIconModule, MatButtonModule, MatChipsModule, MatDividerModule, MatTabsModule],
  templateUrl: './erp-integration.component.html',
  styleUrl: './erp-integration.component.scss',
})
export class ErpIntegrationComponent {
  readonly workOrders = WORK_ORDERS;
  readonly columns = ['woNumber', 'component', 'qty', 'material', 'due', 'status', 'action'];
  selected = signal<WorkOrder | null>(WORK_ORDERS[0]);

  select(wo: WorkOrder) {
    this.selected.set(wo);
  }

  statusClass(status: string) {
    return status.toLowerCase().replace(' ', '-');
  }
}
