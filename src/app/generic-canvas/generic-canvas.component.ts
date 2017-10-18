import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-canvas',
  templateUrl: './generic-canvas.component.html',
  styleUrls: ['./generic-canvas.component.scss']
})
export class GenericCanvasComponent implements OnInit {
  seats;
  selectedSeats;
  constructor() { }

  ngOnInit() {
    this.seats = [
      { 'title': 1, selected: false }, { 'title': 2, selected: false }, { 'title': 3, selected: false }, { 'title': 4, selected: false }, { 'title': 5, selected: false },
      { 'title': 6, selected: false }, { 'title': 7, selected: false }, { 'title': 8, selected: false }, { 'title': 9, selected: false }, { 'title': 10, selected: false },
      { 'title': 11, selected: false }, { 'title': 12, selected: false }, { 'title': 13, selected: false }, { 'title': 14, selected: false }, { 'title': 15, selected: false },
    ];

    this.selectedSeats = this.filterOutSeats('selected', true);
  }

  filterOutSeats(property, value) {
    return this.seats.filter(seat => seat[property] === value);
  }

  handleSeatSelection(seat) {
    if (seat.selected) {
      this.selectedSeats = [...this.selectedSeats, seat];
    } else {
      this.selectedSeats = this.filterOutSeats('selected', true);
    }
  }

}
