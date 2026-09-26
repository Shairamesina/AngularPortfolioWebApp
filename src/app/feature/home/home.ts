import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit {

  @ViewChild('audioPlayer')
  audioPlayer!: ElementRef<HTMLAudioElement>;


  isPlaying = false;

  currentTime = 0;

  duration = 0;


  ngAfterViewInit(): void {

    /*
      Attempt autoplay.

      Some browsers, especially Safari/Chrome mobile,
      may block autoplay with sound until the user
      interacts with the page.
    */

    this.tryAutoplay();

  }


  private async tryAutoplay(): Promise<void> {

    const audio = this.audioPlayer.nativeElement;

    try {

      await audio.play();

      this.isPlaying = true;

    } catch {

      // Autoplay was blocked by the browser.
      this.isPlaying = false;

    }

  }


  async toggleMusic(): Promise<void> {

    const audio = this.audioPlayer.nativeElement;


    if (audio.paused) {

      try {

        await audio.play();

        this.isPlaying = true;

      } catch {

        this.isPlaying = false;

      }

    } else {

      audio.pause();

      this.isPlaying = false;

    }

  }


  updateProgress(): void {

    const audio = this.audioPlayer.nativeElement;

    this.currentTime = audio.currentTime;

  }


  loadMetadata(): void {

    const audio = this.audioPlayer.nativeElement;

    this.duration = audio.duration || 0;

  }


  seekSong(event: Event): void {

    const input = event.target as HTMLInputElement;

    const time = Number(input.value);

    const audio = this.audioPlayer.nativeElement;

    audio.currentTime = time;

    this.currentTime = time;

  }


  formatTime(seconds: number): string {

    if (!Number.isFinite(seconds)) {

      return '0:00';

    }


    const minutes =
      Math.floor(seconds / 60);


    const remainingSeconds =
      Math.floor(seconds % 60)
        .toString()
        .padStart(2, '0');


    return `${minutes}:${remainingSeconds}`;

  }

}