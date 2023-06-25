import { Component } from '@angular/core';
import { newReleases } from '../../mocks/newReleases.db';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.scss']
})
export class NewReleasesComponent {

  newReleases = newReleases

}
