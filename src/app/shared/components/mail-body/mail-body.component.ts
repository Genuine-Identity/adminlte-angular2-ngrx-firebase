import { Component, Input, OnInit, Output, EventEmitter, ElementRef, Injectable, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationCancel, Event, NavigationEnd, NavigationError, NavigationStart } from "@angular/router";
import { SkillService } from '../../../core/services/application/skill.service';
import { UserService } from '../../../core/services/application/user.service';
import { User } from '../../../shared/models/user';
import { Message } from '../../../shared/models/message';
import { LocalStorageService } from '../../../core/services/helpers/local-storage.service';
import { MessageService } from '../../../core/services/application/message.service'; 

@Component({
  selector: 'app-mail-body',
  templateUrl: './mail-body.component.html',
  styleUrls: ['./mail-body.component.css'],
})
export class MailBodyComponent implements OnInit {
  breadcrumb: any;
  private message: Message;
  private user: User;
  private id: number;
  private submitted = false;
  private userDetailsForm: FormGroup;
  skillIds: any[]

  constructor(
    private userService: UserService,
    private localStorage: LocalStorageService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.route)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .subscribe((event) => {
        this.breadcrumb = event.data._value;
      });
  }

  ngOnInit() {
    this.bindUserDetails();
    this.bindDetails();
  }
  bindUserDetails() {
    this.user = JSON.parse(this.localStorage.getItem("userSession"));
  }
  bindDetails() {

    this.route.params.subscribe(params => {
      console.log("params['id']")
      console.log(params['id'])
      if (params['id']) {
        this.messageService.getMessageById(params['id']).subscribe((message: Message) => {
          this.message = message;
        });
      }
    });
  }
  onDelete(id: any) {
    this.submitted = true;
    this.message.toType = "Trash";
    this.message.fromType = "Trash";
    console.log(this.breadcrumb.mode);
    this.messageService.update(this.message, (
      this.breadcrumb.mode === "inbox"
      || this.breadcrumb.mode === "trash"
      || this.breadcrumb.mode === "junk") ? "i" : "s"
    )
      .subscribe(
        data => {

          if (this.breadcrumb.mode === "inbox") {
            this.router.navigate(['/mail/inbox']);
          }
          if (this.breadcrumb.mode === "trash") {
            this.router.navigate(['/mail/trash']);
          }
          if (this.breadcrumb.mode === "junk") {
            this.router.navigate(['/mail/junk']);
          }
          if (this.breadcrumb.mode === "sent") {
            this.router.navigate(['/mail/sent']);
          }
        },
        error => {
          console.log(error);
        }
      );
  }
} 