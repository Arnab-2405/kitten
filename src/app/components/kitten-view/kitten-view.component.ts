import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitten-view',
  templateUrl: './kitten-view.component.html',
  styleUrls: ['./kitten-view.component.css'],
})
export class KittenViewComponent {
  message = 'Will you go out with me?';
  gifSrc = 'https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif';

  onYesClick() {
    this.message = 'Yay, see you soon';
    this.gifSrc = 'https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif';
  }

  onNoHover() {
    const noBtn = document.querySelector('.no-btn') as HTMLElement;
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
  }
}
