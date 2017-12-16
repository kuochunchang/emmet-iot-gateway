import { Input, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message } from '@stomp/stompjs';

import { Subscription } from 'rxjs/Subscription';
import { StompService } from '@stomp/ng2-stompjs';


import { TopicUpdateRequest, TopicModel } from './topic-models';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})


export class TopicComponent implements OnInit {
  @Input() subject: string
  @Input() topic: TopicModel
  subscribed: boolean
  value: any
  online: string
  controllable: boolean;

  subscription: Subscription;
  public messages: Observable<Message>;

  @Input() onoff: boolean

  constructor(private stompService: StompService) { }

  ngOnInit() {
    this.onoff = false;
    this.subscribed = false;
    this.online = "offline"
    this.controllable = this.topic.update !== undefined;
    // Store local reference to Observable
    // for use with template ( | async )
    this.subscribe();
    console.log("-->" + this.onoff)
  }

  public onUpdateRequestEmmit($event) {
    this.onoff = !this.onoff;
    let request: TopicUpdateRequest;
    request = { subject: this.subject, timestamp: Date.now() / 1000|0 ,topic: this.topic.id, value: String(this.onoff) }

    this.stompService.publish(this.topic.update, JSON.stringify(request));

    console.log(this.onoff)
  }

  public subscribe() {
    if (this.subscribed) {
      return;
    }
    // Stream of messages
    this.messages = this.stompService.subscribe('/topic/' + this.topic.status);

    // Subscribe a function to be run on_next message
    this.subscription = this.messages.subscribe(this.on_next);
    this.subscribed = true;
  }


  public unsubscribe() {
    if (!this.subscribed) {
      return;
    }

    // This will internally unsubscribe from Stomp Broker
    // There are two subscriptions - one created explicitly, the other created in the template by use of 'async'
    this.subscription.unsubscribe();
    this.subscription = null;
    this.messages = null;

    this.subscribed = false;
  }

  /** Consume a message from the _stompService */
  public on_next = (message: Message) => {

    // Log it to the console
    let msgBody = JSON.parse(message.body);
    this.value = msgBody.value;
    this.online = msgBody.online ? "online" : "offine"

    if (this.controllable) {
      this.onoff = this.value == 'true' ? true : false
    }
    //console.log(this.value);
    console.log(message);
  }


}


