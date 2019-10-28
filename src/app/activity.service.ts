import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private activeUsers = ['Max', 'Anna'];
  private inactiveUsers = ['Chris', 'Manu'];
  private actionNo = 0;

  activeUsersSubject = new BehaviorSubject<string[]>(this.activeUsers);
  inactiveUsersSubject = new BehaviorSubject<string[]>(this.inactiveUsers);
  actionNoSubject = new BehaviorSubject<number>(this.actionNo);

  constructor() {}

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.postAction();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.postAction();
  }

  private postAction() {
    this.actionNo++;
    this.actionNoSubject.next(this.actionNo);
    this.activeUsersSubject.next(this.activeUsers);
    this.inactiveUsersSubject.next(this.inactiveUsers);
  }
}
