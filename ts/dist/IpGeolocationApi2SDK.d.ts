import { Entity1Entity } from './entity/Entity1Entity';
import { Entity2Entity } from './entity/Entity2Entity';
import { Entity3Entity } from './entity/Entity3Entity';
import { InfoEntity } from './entity/InfoEntity';
export type * from './IpGeolocationApi2Types';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { IpGeolocationApi2EntityBase } from './IpGeolocationApi2EntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class IpGeolocationApi2SDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Entity1(entopts?: Record<string, any>): Entity1Entity;
    Entity2(entopts?: Record<string, any>): Entity2Entity;
    Entity3(entopts?: Record<string, any>): Entity3Entity;
    Info(entopts?: Record<string, any>): InfoEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): IpGeolocationApi2SDK;
    tester(testopts?: any, sdkopts?: any): IpGeolocationApi2SDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof IpGeolocationApi2SDK;
export { stdutil, config, BaseFeature, IpGeolocationApi2EntityBase, IpGeolocationApi2SDK, SDK, };
