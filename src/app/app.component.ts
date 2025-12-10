import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IsActiveMatchOptions, Router, RouterLink, RouterOutlet } from '@angular/router';
import { IgcFormsModule, IGX_CARD_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxDropDownItemComponent, IgxIconButtonDirective, IgxIconComponent, IgxToggleActionDirective } from 'igniteui-angular';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-root',
  imports: [IGX_NAVIGATION_DRAWER_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxDropDownItemComponent, IgxIconButtonDirective, IgxToggleActionDirective, IgxIconComponent, IgxAvatarComponent, IgcFormsModule, IgxButtonDirective, RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public ngModel = 0;

  constructor(
    public router: Router,
  ) {}


  public isActive(path: string): boolean {
    const exactMatch: IsActiveMatchOptions = {
        paths: 'exact',
        matrixParams: 'ignored',
        queryParams: 'ignored',
        fragment: 'ignored'
    }
    return this.router.isActive(path, exactMatch);
  }
}
