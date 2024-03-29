import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private session: SessionService) { }

  public isSignedIn() {
    return !!this.session.accessToken;
  }

  public doSignIn(accessToken: string, name: string) {
    if ((!accessToken) || (!name)) {
      return;
    }
    this.session.setAccessToken(accessToken);
    // this.session.accessToken = accessToken;
    this.session.name = name; // leave it as an exercise
  }

  public doSignOut() {
    this.session.setAccessToken(null);
    // this.session.accessToken = null;
    this.session.name = null;
  }

}
