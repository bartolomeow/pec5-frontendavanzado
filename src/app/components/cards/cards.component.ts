import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.interface';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  cards: Card[] = [];
  public load: boolean;
  

  constructor(private cardsService: CardsService) {
    this.load = false;
  }

  ngOnInit(): void {
    this.cardsService.get50Cards().subscribe((cards) => {
      this.cards = cards.data;
      this.load = true;
    });
    
  }
}
