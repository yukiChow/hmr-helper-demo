import { NgModule, NgModuleRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexLayoutComponent } from '../../component/index-layout/index-layout.component';
import { HomepageComponent } from '../../component/homepage/homepage.component';
import { IndexHeaderComponent } from '../../component/index-header/index-header.component';
import { IndexFooterComponent } from '../../component/index-footer/index-footer.component';
import { HmrModuleHelper } from 'src/app/hmr-module-helper';

@NgModule({
  declarations: [IndexLayoutComponent, HomepageComponent, IndexHeaderComponent, IndexFooterComponent],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule {
  constructor(moduleRef: NgModuleRef<IndexModule>) {
    HmrModuleHelper.enableHmrRouterNgModule(module, moduleRef);
  }
}

HmrModuleHelper.enableHmrNodeModule(module);

