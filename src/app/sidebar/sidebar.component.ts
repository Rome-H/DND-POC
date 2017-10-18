import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() selectedSeats;
  selectedSeatTitles;
  constructor() { }

  ngOnInit() {
    this.selectedSeatTitles = this.parseTitleToString(this.selectedSeats);
  }

  ngOnChanges(changes) {
    if (changes.selectedSeats) {
      this.selectedSeatTitles = this.parseTitleToString(changes.selectedSeats.currentValue);
    }
  }

  parseTitleToString(seats) {
    const seatTitlesArr = seats.map(seat => seat.title);
    return seatTitlesArr.join(', ');
  }

}
