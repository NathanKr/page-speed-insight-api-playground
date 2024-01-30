import IFromRoot from "./i-from-root";

export interface IPsiSampleDb{
    fromRoot : IFromRoot;
    url : string;
    created : number; // -- number ms from 1970 
}