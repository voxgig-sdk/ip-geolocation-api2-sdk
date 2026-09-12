import { IpGeolocationApi2EntityBase } from '../IpGeolocationApi2EntityBase';
import type { IpGeolocationApi2SDK } from '../IpGeolocationApi2SDK';
import type { Control } from '../types';
import type { Info, InfoListMatch } from '../IpGeolocationApi2Types';
declare class InfoEntity extends IpGeolocationApi2EntityBase<Info> {
    constructor(client: IpGeolocationApi2SDK, entopts: any);
    make(this: InfoEntity): InfoEntity;
    list(this: any, reqmatch?: InfoListMatch, ctrl?: Control): Promise<InfoEntity[]>;
}
export { InfoEntity };
