import { Component } from '@angular/core';
import { ViewportService } from './viewport.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portal-web';

  constructor(private viewportService: ViewportService) {
    this.viewportService.enableDesktopView();
  }

  switchToDesktopView() {
    this.viewportService.enableDesktopView();
  }
}
