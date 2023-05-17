import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmsService } from '../sms.service';
import { SMS } from '../sms-models/sms.model';

@Component({
  selector: 'app-sms-details',
  templateUrl: './sms-details.component.html',
  styleUrls: ['./sms-details.component.css']
})
export class SmsDetailsComponent implements OnInit {
  sms: SMS | null = null;

  constructor(
    private route: ActivatedRoute,
    private smsService: SmsService
  ) {}

  ngOnInit(): void {
    this.loadSMS();
  }

  loadSMS(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.smsService.getSMS(id).subscribe(
        (sms) => {
          this.sms = sms;
        },
        (error) => {
          console.log('An error occurred while loading SMS details:', error);
        }
      );
    }
  }

  getStatus(recipients: any[]): string {
    const allDelivered = recipients.every((recipient) => recipient.deliveryStatus === 'Delivered');
    return allDelivered ? 'Delivered' : 'Pending';
  }
}
