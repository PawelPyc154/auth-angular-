import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParamRoutingModule } from './param-routing.module';
import { ParamComponent } from './param.component';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { createTranslateLoader } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [ParamComponent],
  imports: [
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    CommonModule,
    ParamRoutingModule,
  ],
})
export class ParamModule {}
