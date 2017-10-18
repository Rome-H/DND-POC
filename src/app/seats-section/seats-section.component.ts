import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seats-section',
  templateUrl: './seats-section.component.html',
  styleUrls: ['./seats-section.component.scss']
})
export class SeatsSectionComponent implements OnInit {
  @Input() seats;
  @Output() triggerSeatSelection = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  handleSeatSelection(seat) {
    seat.selected = !seat.selected;
    this.triggerSeatSelection.emit(seat);
  }

}
