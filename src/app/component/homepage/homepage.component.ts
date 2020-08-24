import { Component, OnInit } from '@angular/core';
import { MasterEventService } from '../../service/master-event.service';

@Component( {
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: [ './homepage.component.css' ]
} )
export class HomepageComponent implements OnInit {
  statewise: any;
  displayedColumns: string[] = ['state', 'confirmed', 'active', 'recovered', 'death'];

  displayComments = false;

  constructor (
    private masterEventService: MasterEventService
  ) { }

  ngOnInit (): void {
    this.masterEventService.getConfig().subscribe( ( data: any ) => {
      console.log( data.statewise );
      this.statewise = data.statewise;
    });
  }
}
