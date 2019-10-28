import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private activityService: ActivityService) {}

  ngOnInit() {
    this.activityService.activeUsersSubject.subscribe(
      users => (this.users = users)
    );
  }

  onSetToInactive(id: number) {
    this.activityService.onSetToInactive(id);
  }
}
