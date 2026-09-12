import { IpGeolocationApi2EntityBase } from '../IpGeolocationApi2EntityBase';
import type { IpGeolocationApi2SDK } from '../IpGeolocationApi2SDK';
import type { Control } from '../types';
import type { Entity3, Entity3LoadMatch } from '../IpGeolocationApi2Types';
declare class Entity3Entity extends IpGeolocationApi2EntityBase<Entity3> {
    constructor(client: IpGeolocationApi2SDK, entopts: any);
    make(this: Entity3Entity): Entity3Entity;
    load(this: any, reqmatch?: Entity3LoadMatch, ctrl?: Control): Promise<Entity3Entity>;
}
export { Entity3Entity };
