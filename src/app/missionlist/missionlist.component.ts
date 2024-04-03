import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {
  year: string[] = [];
  colours: string[] = [];
  missions: Mission[] = [];

  constructor(private spacexapiService: SpacexapiService) {}

  ngOnInit(): void {
    this.getMissions();
  }

  getMissions(): void {
    this.spacexapiService.getMissions().subscribe((missions) => {
      this.missions = missions;
    });
  }

  getColours(): void {
    this.spacexapiService.getColours().subscribe((colours) => {
      this.colours = colours;
    });
  }
}
