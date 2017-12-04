import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/Client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { SettngsService } from '../../services/settngs.service'; 
import { Settings } from '../../models/Settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: Settings;

  constructor(
    public settingsService: SettngsService,
    public flashMessagesService: FlashMessagesService,
    public router: Router
  ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings()
  }
  onSubmit(){
    this.settingsService.changeSettings(this.settings)
    this.flashMessagesService.show('Settings saved', {
      cssClass:'alert-danger', timeout: 4000
    });
    this.router.navigate(['/settings']);
  }
}
