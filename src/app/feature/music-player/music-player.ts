import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-music-player',
  imports: [],
  templateUrl: './music-player.html',
  styleUrl: './music-player.scss'
})
export class MusicPlayer implements AfterViewInit {

  @ViewChild('audioPlayer')
  audioPlayer!: ElementRef<HTMLAudioElement>;
  isPlaying = false;

  
  ngAfterViewInit(): void {
    this.tryAutoplay();
  }

  private async tryAutoplay(): Promise<void> {
    const audio = this.audioPlayer.nativeElement;

    try {
      await audio.play();
    } catch {
      this.isPlaying = false;
    }
  }

  async toggleMusic(): Promise<void> {
    const audio = this.audioPlayer.nativeElement;

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        this.isPlaying = false;
      }
    } else {
      audio.pause();
    }
  }

  onPlay(): void {
    this.isPlaying = true;
  }

  onPause(): void {
    this.isPlaying = false;
  }

}