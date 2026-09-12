export interface Entity1 {
    asn?: Record<string, any>;
    city?: string;
    continent?: string;
    country: string;
    ip: string;
    location?: Record<string, any>;
    postal?: string;
    subdivision?: string;
}
export interface Entity1LoadMatch {
    field?: string;
}
export interface Entity2 {
}
export interface Entity2CreateData {
    field?: string;
}
export interface Entity3 {
    asn?: Record<string, any>;
    city?: string;
    continent?: string;
    country: string;
    id?: string;
    ip: string;
    location?: Record<string, any>;
    postal?: string;
    subdivision?: string;
}
export interface Entity3LoadMatch {
    id: string;
    field?: string;
}
export interface Info {
    dataSources?: any[];
    lastUpdated?: string;
    version?: string;
}
export interface InfoListMatch {
    dataSources?: any[];
    lastUpdated?: string;
    version?: string;
}
