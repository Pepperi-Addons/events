import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';

import { PepAddonService } from '@pepperi-addons/ngx-lib';
import { PepButtonModule } from '@pepperi-addons/ngx-lib/button';
import { PepDialogModule } from '@pepperi-addons/ngx-lib/dialog';
import { PepSelectModule } from '@pepperi-addons/ngx-lib/select';
import { PepRemoteLoaderModule } from '@pepperi-addons/ngx-lib/remote-loader';
import { PepTopBarModule } from '@pepperi-addons/ngx-lib/top-bar';
import { PepDraggableItemsModule } from '@pepperi-addons/ngx-lib/draggable-items';
import { PepCheckboxModule } from '@pepperi-addons/ngx-lib/checkbox';

import { PepGenericListModule } from '@pepperi-addons/ngx-composite-lib/generic-list';

import { config } from '../addon.config';

import { EventsComponent } from './index';
import { CreateEventComponent } from '../create-event/create-event.component'
import { EventsListComponent } from '../events-list/events-list.component'
import { EditEventComponent } from '../edit-event/edit-event.component'
import { BlockConfigurationLoaderComponent } from '../edit-event/block-configuration-loader/block-configuration-loader.component'
import { BlockEditorComponent } from '../edit-event/block-editor/block-editor.component';

import { BlockConfigurationLoaderService } from '../services/block-configuration-loader-service'
import { EventsService } from '../services/events-service'
import { BlocksService } from '../services/blocks-service'
import { UtilitiesService } from '../services/utilities-service';
import { PepTextboxModule } from '@pepperi-addons/ngx-lib/textbox';



export const routes: Routes = [
    {
        path: '',
        component: EventsComponent
    }
];

@NgModule({
    declarations: [
        EventsComponent,
        CreateEventComponent,
        BlockConfigurationLoaderComponent,
        EditEventComponent,
        EventsListComponent,
        BlockEditorComponent,
    ],
    imports: [
        CommonModule,
        PepGenericListModule,
        PepButtonModule,
        PepDialogModule,
        PepSelectModule,
        PepRemoteLoaderModule,
        PepTopBarModule,
        PepDraggableItemsModule,
        PepCheckboxModule,
        PepTextboxModule,
        MatDialogModule,
        DragDropModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (addonService: PepAddonService) =>
                    PepAddonService.createMultiTranslateLoader(addonService, ['ngx-lib', 'ngx-composite-lib'], config.AddonUUID),
                deps: [PepAddonService]
            }, isolate: false
        }),
        RouterModule.forChild(routes)
    ],
    exports: [EventsComponent],
    providers: [
        TranslateStore,
        EventsService,
        BlockConfigurationLoaderService,
        BlocksService,
        UtilitiesService
        // Add here all used services.
    ]
})
export class EventsModule {
    constructor(
        translate: TranslateService,
        private pepAddonService: PepAddonService
    ) {
        this.pepAddonService.setDefaultTranslateLang(translate);
    }
}
