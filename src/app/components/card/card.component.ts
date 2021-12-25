import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../../models/card.interface';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  panelOpenState = false;
  card!: Card;

  constructor(
    private cardsService: CardsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    this.cardsService.getCardById(identifier!).subscribe((card) => {
      if (!card) {
        return this.router.navigateByUrl('/');
      }
      this.card = card.data;
    });
  }
}
