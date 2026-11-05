import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUp } from './sign-up/sign-up';
import { SearchMovie } from './search-movie/search-movie';

@Component({
  imports: [RouterOutlet, SignUp, SearchMovie],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('sign-up-challenge');
}
