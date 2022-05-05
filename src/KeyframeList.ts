import {Keyframe, KeyframeValue, KeyframeValueFactory} from "./Keyframe";
import Serializable from "./Serializable";

/**
 * A class that holds keyframes.
 */
export default class KeyframeList<T extends KeyframeValue> implements Serializable {
    /**
     * The keyframes stored in this object.
     */
    readonly keyframes: Keyframe<T>[] = [];

    private readonly valueFactory: KeyframeValueFactory<T>

    constructor(valueFactory: KeyframeValueFactory<T>) {
        this.valueFactory = valueFactory;
    }

    /**
     * Gets how many keyframes are in the list.
     */
    get length(): number {
        return this.keyframes.length;
    }

    /**
     * Pushes a keyframe into this keyframe list.
     * @param keyframes The keyframe
     */
    push(keyframe: Keyframe<T>): number {
        return this.keyframes.push(keyframe);
    }

    /**
     * Pops and returns the last keyframe in the list.
     */
    pop(): Keyframe<T> {
        return this.keyframes.pop();
    }

    toString(): string {
        return JSON.stringify(this.toJson());
    }

    toJson(): any {
        let json = [];
        for (let keyframe of this.keyframes) {
            json.push(keyframe.toJson());
        }
        return json;
    }

    fromJson(json: any) {
        this.keyframes.length = 0;
        for (let kfJson of json) {
            let kf: Keyframe<T> = new Keyframe<T>(this.valueFactory);
            kf.fromJson(kfJson);
            this.keyframes.push(kf);
        }
    }
}