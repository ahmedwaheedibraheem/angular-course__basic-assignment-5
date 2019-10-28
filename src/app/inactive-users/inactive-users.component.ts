import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private activityService: ActivityService) {}

  ngOnInit() {
    this.activityService.inactiveUsersSubject.subscribe(
      users => (this.users = users)
    );
  }

  onSetToActive(id: number) {
    this.activityService.onSetToActive(id);
  }
}
