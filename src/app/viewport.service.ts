import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewportService {

  constructor() { }

  // Enable desktop view by setting fixed width
  enableDesktopView() {
    this.setViewport('width=1024');
  }

  // Reset to responsive mobile view
  enableMobileView() {
    this.setViewport('width=device-width, initial-scale=1');
  }

  // Utility method to change viewport meta tag
  private setViewport(content: string) {
    // Find the existing viewport meta tag
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    
    if (viewportMeta) {
      viewportMeta.setAttribute('content', content);
    } else {
      // If there's no viewport meta tag, create a new one
      let meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = content;
      document.head.appendChild(meta);
    }
  }
}
