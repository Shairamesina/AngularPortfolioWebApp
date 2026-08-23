import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home implements AfterViewInit {
  
  @ViewChild('audioPlayer')
  audioPlayer!: ElementRef<HTMLAudioElement>;

  isPlaying = false;
  currentTime = 0;
  duration = 0;


  ngAfterViewInit(): void {
    this.tryAutoplay();
  }


  private async tryAutoplay(): Promise<void> {
    try {
      await this.audioPlayer.nativeElement.play();

      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }


  async toggleMusic(): Promise<void> {
    const audio = this.audioPlayer.nativeElement;

    if (audio.paused) {
      await audio.play();

      this.isPlaying = true;
    } else {
      audio.pause();

      this.isPlaying = false;
    }
  }


  updateProgress(): void {
    this.currentTime =
      this.audioPlayer.nativeElement.currentTime;
  }


  loadMetadata(): void {
    this.duration =
      this.audioPlayer.nativeElement.duration;
  }


  seekSong(event: Event): void {
    const input = event.target as HTMLInputElement;

    const time = Number(input.value);

    this.audioPlayer.nativeElement.currentTime = time;

    this.currentTime = time;
  }


  onSongEnded(): void {
    this.isPlaying = false;
    this.currentTime = 0;
  }


  formatTime(seconds: number): string {
    if (!Number.isFinite(seconds)) {
      return '0:00';
    }

    const minutes = Math.floor(seconds / 60);

    const remainingSeconds =
      Math.floor(seconds % 60)
        .toString()
        .padStart(2, '0');

    return `${minutes}:${remainingSeconds}`;
  }
}
