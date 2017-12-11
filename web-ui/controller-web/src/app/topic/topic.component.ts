import { Input, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message } from '@stomp/stompjs';

import { Subscription } from 'rxjs/Subscription';
import { StompService } from '@stomp/ng2-stompjs';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input() id: string
  subscribed: boolean
  value: any

  private subscription: Subscription;
  public messages: Observable<Message>;

  constructor(private stompService: StompService) { }

  ngOnInit() {
    this.subscribed = false;

    // Store local reference to Observable
    // for use with template ( | async )
    this.subscribe();
  }

  public subscribe() {
    if (this.subscribed) {
      return;
    }
    // Stream of messages
    this.messages = this.stompService.subscribe('/topic/' + this.id);

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
    this.value = message.body;
    //console.log(message);
  }
}


