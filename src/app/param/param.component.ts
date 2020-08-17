import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.scss'],
})
export class ParamComponent {
  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe(({ lang }) => {
      console.log(lang);
      translate.use(lang);
    });
  }
}
