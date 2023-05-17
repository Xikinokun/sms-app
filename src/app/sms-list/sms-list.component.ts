import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmsService } from '../sms.service';
import { SMS } from '../sms-models/sms.model';

@Component({
  selector: 'app-sms-list',
  templateUrl: './sms-list.component.html',
  styleUrls: ['./sms-list.component.css']
})
export class SmsListComponent implements OnInit {
  smsList: SMS[] = [];

  constructor(private smsService: SmsService,
              private router: Router) {}

  ngOnInit(): void {
    this.loadSMSList();
  }

  viewDetails(smsId: string) {
    this.router.navigate(['/sms', smsId]);
  }

  loadSMSList(): void {
    this.smsService.getAllSMS().subscribe(
      (smsList) => {
        console.log('SMSLIST', smsList)
        this.smsList = smsList;
      },
      (error) => {
        console.log('An error occurred while loading SMS list:', error);
      }
    );
  }

  getStatus(recipients: any[]): string {
    const allDelivered = recipients.every((recipient) => recipient.deliveryStatus === 'Delivered');
    return allDelivered ? 'Delivered' : 'Pending';
  }
}
