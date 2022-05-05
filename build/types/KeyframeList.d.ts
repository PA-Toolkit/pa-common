import { Keyframe, KeyframeValue, KeyframeValueFactory } from "./Keyframe";
import Serializable from "./Serializable";
/**
 * A class that holds keyframes.
 */
export default class KeyframeList<T extends KeyframeValue> implements Serializable {
    /**
     * The keyframes stored in this object.
     */
    readonly keyframes: Keyframe<T>[];
    private readonly valueFactory;
    constructor(valueFactory: KeyframeValueFactory<T>);
    /**
     * Gets how many keyframes are in the list.
     */
    get length(): number;
    /**
     * Pushes a keyframe into this keyframe list.
     * @param keyframes The keyframe
     */
    push(keyframe: Keyframe<T>): number;
    /**
     * Pops and returns the last keyframe in the list.
     */
    pop(): Keyframe<T>;
    toString(): string;
    toJson(): any;
    fromJson(json: any): void;
}
