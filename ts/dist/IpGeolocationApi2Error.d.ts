import { Context } from './Context';
declare class IpGeolocationApi2Error extends Error {
    isIpGeolocationApi2Error: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { IpGeolocationApi2Error };
