import { Easing, RandomMode } from "./Enums";
import Serializable from "./Serializable";
export interface KeyframeValue {
    readJson(json: any): any;
    writeJson(json: any): any;
    readRandomJson(json: any): any;
    writeRandomJson(json: any): any;
}
export declare class PositionValue implements KeyframeValue {
    x: number;
    y: number;
    readJson(json: any): void;
    writeJson(json: any): void;
    readRandomJson(json: any): void;
    writeRandomJson(json: any): void;
}
export declare class ScaleValue implements KeyframeValue {
    x: number;
    y: number;
    readJson(json: any): void;
    writeJson(json: any): void;
    readRandomJson(json: any): void;
    writeRandomJson(json: any): void;
}
export declare class RotationValue implements KeyframeValue {
    value: number;
    readJson(json: any): void;
    writeJson(json: any): void;
    readRandomJson(json: any): void;
    writeRandomJson(json: any): void;
}
export declare class ColorValue implements KeyframeValue {
    value: number;
    readJson(json: any): void;
    writeJson(json: any): void;
    readRandomJson(json: any): void;
    writeRandomJson(json: any): void;
}
export declare type KeyframeValueFactory<T extends KeyframeValue> = () => T;
export declare class Keyframe<T extends KeyframeValue> implements Serializable {
    time: number;
    value: T;
    easing: Easing;
    randomMode: RandomMode;
    randomValue: T;
    randomInterval: number;
    constructor(valueFactory: KeyframeValueFactory<T>);
    toString(): string;
    toJson(): any;
    fromJson(json: any): void;
}
