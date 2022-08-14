import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import {APIResponse, Game} from '../models/batatinha.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  games!: Game[];

  constructor(private httpService:HttpService) { this.getGames(); };


  getGames():void {
    this.httpService.getAllGames().subscribe((res:APIResponse<Game>) => {
     this.games = res.results;
     console.log(res.results)
    })
  }
}
