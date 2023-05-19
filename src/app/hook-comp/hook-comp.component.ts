import { Component } from '@angular/core';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-hook-comp',
  templateUrl: './hook-comp.component.html',
  styleUrls: ['./hook-comp.component.scss']
})
export class HookCompComponent {
  faAnglesRight = faAnglesRight;
}
