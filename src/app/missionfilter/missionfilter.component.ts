import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent implements OnInit {
  missions: any[] = [];
  filteredMissions: any[] = [];
  years: number[] = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]; // Add more years as needed

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getLaunches();
  }

  getLaunches(): void {
    this.http.get<any[]>('https://api.spacexdata.com/v3/launches').subscribe(data => {
      this.missions = data;
      this.filteredMissions = data; // Initially, all missions are displayed
    });
  }

  filterByYear(year: number): void {
    this.filteredMissions = this.missions.filter(mission => mission.launch_year === year.toString());
  }

  filterByLaunch(success: boolean): void {
    this.filteredMissions = this.missions.filter(mission => mission.launch_success === success);
  }

  filterByLand(success: boolean): void {
    this.filteredMissions = this.missions.filter(mission => {
      return mission.rocket.first_stage.cores.some((core: any) => core.land_success === success);

    });
  }
}
