import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ALTERNATIVE_TOOLS, MACHINES, MATERIALS, RECOMMENDED_TOOL } from '../../shared/mock-data/tools';
import { Tool } from '../../shared/models';

@Component({
  selector: 'app-tool-recommendation',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatChipsModule,
    MatDividerModule,
    MatTooltipModule,
  ],
  templateUrl: './tool-recommendation.component.html',
  styleUrl: './tool-recommendation.component.scss',
})
export class ToolRecommendationComponent {
  readonly materials = MATERIALS;
  readonly machines = MACHINES;

  material = signal<string>(MATERIALS[2]);
  operation = signal<'Turning' | 'Milling' | 'Drilling'>('Turning');
  machine = signal<string>(MACHINES[0]);
  surfaceFinish = signal<number>(1.6);
  toolDiameter = signal<number>(12);

  loading = signal(false);
  result = signal<Tool | null>(null);
  alternatives = signal<Tool[]>([]);

  getRecommendation() {
    this.loading.set(true);
    this.result.set(null);
    this.alternatives.set([]);
    setTimeout(() => {
      this.result.set(RECOMMENDED_TOOL);
      this.alternatives.set(ALTERNATIVE_TOOLS);
      this.loading.set(false);
    }, 1200);
  }

  clear() {
    this.result.set(null);
    this.alternatives.set([]);
  }
}
