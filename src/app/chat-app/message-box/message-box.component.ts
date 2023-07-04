import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-box',
  template: `<li class="clearfix">
  <div class="message-data text-right">
      <span class="message-data-time">10:10 AM, Today</span>
      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar">
  </div>
  <div class="message other-message float-right">{{message}}  </div>
</li>
`,
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent {
  @Input() message? :string
}
