import { IpGeolocationApi2EntityBase } from '../IpGeolocationApi2EntityBase';
import type { IpGeolocationApi2SDK } from '../IpGeolocationApi2SDK';
import type { Control } from '../types';
import type { Entity2, Entity2CreateData } from '../IpGeolocationApi2Types';
declare class Entity2Entity extends IpGeolocationApi2EntityBase<Entity2> {
    constructor(client: IpGeolocationApi2SDK, entopts: any);
    make(this: Entity2Entity): Entity2Entity;
    create(this: any, reqdata?: Entity2CreateData, ctrl?: Control): Promise<Entity2Entity>;
}
export { Entity2Entity };
