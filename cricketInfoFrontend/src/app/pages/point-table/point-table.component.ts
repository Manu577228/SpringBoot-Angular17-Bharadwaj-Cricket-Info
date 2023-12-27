import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css',
})
export class PointTableComponent implements OnInit {
  pointTable: any;
  tableHeading: any;
  isHovered = false;

  onMouseEnter(): void {
    this.isHovered = true;
  }

  onMouseLeave(): void {
    this.isHovered = false;
  }

  getRowClass(teamIndex: number): string {
    return this.isHovered && teamIndex <= 4
      ? 'bg-green-200'
      : teamIndex > 4
      ? 'bg-red-400'
      : '';
  }

  constructor(private _api: ApiCallService) {}

  ngOnInit(): void {
    this._api.getPointTable().subscribe({
      next: (data) => {
        this.pointTable = data;
        // console.log(this.pointTable);
        this.tableHeading = [...this.pointTable[0]];
        // console.log(this.tableHeading);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
