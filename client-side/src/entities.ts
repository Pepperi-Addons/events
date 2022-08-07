import { NgComponentRelation } from "@pepperi-addons/papi-sdk";
import { IAddonBlockLoaderDialogOptions } from "@pepperi-addons/ngx-lib/remote-loader";

import { EventInterceptor, LogicBlock } from "shared";

export interface HostEvent {
    PossibleEvents: EventData[];
    PossibleFields: string[];
    AddonUUID: string;
    Group: string;
}

export interface EventData {
    EventKey: string;
    EventFilter: string;
    SupportField: boolean;
}

export interface CreateFormData {
    Events: EventData[];
    Fields: string[];
    AddonUUID: string;
    Group: string;
    CurrentEvents: Map<string, EventInterceptor[]>
}

export interface LogicBlockEditorOptions extends IAddonBlockLoaderDialogOptions {
    block: LogicBlock;
}

export interface LogicBlockRelation extends NgComponentRelation {
    BlockExecutionRelativeURL: string;
}

export type ActionType = 'Add' | 'Edit' | 'Delete';

export interface ActionClickedEventData {
    ActionType: ActionType,
    ItemKey?: string
}


