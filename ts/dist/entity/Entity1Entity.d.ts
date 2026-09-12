import { IpGeolocationApi2EntityBase } from '../IpGeolocationApi2EntityBase';
import type { IpGeolocationApi2SDK } from '../IpGeolocationApi2SDK';
import type { Control } from '../types';
import type { Entity1, Entity1LoadMatch } from '../IpGeolocationApi2Types';
declare class Entity1Entity extends IpGeolocationApi2EntityBase<Entity1> {
    constructor(client: IpGeolocationApi2SDK, entopts: any);
    make(this: Entity1Entity): Entity1Entity;
    load(this: any, reqmatch?: Entity1LoadMatch, ctrl?: Control): Promise<Entity1Entity>;
}
export { Entity1Entity };
