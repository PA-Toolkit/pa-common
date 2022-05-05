import { AutoKillType, Shape, ObjectType } from "./Enums";
import KeyframeList from "./KeyframeList";
import { ColorValue, PositionValue, RotationValue, ScaleValue } from "./Keyframe";
import Serializable from "./Serializable";
import ObjectOwner from "./ObjectOwner";
/**
 * Represents an object in Project Arrhythmia.
 */
export default class PAObject implements Serializable {
    /**
     * The object's name.
     */
    name: string;
    /**
     * The object's ID.
     */
    id: string;
    /**
     * The ID of this object's parent. Empty string for no parent.
     */
    parentId: string;
    /**
     * The object's position parent type. If this value is true, the object's position is not affected by the parent.
     */
    positionParenting: boolean;
    /**
     * The object's scale parent type. If this value is true, the object's scale is not affected by the parent.
     */
    scaleParenting: boolean;
    /**
     * The object's rotation parent type. If this value is true, the object's rotation is not affected by the parent.
     */
    rotationParenting: boolean;
    /**
     * The object's position parent offset. The object's position lags behind the parent the amount of time equals to the value.
     */
    positionParentOffset: number;
    /**
     * The object's scale parent offset. The object's scale lags behind the parent the amount of time equals to the value.
     */
    scaleParentOffset: number;
    /**
     * The object's position rotation offset. The object's rotation lags behind the parent the amount of time equals to the value.
     */
    rotationParentOffset: number;
    /**
     * The object's render depth. Specifies how far away the object should be from the camera.
     */
    renderDepth: number;
    /**
     * The object's type in Project Arrhythmia (Normal, Helper, Decoration, Empty).
     */
    objectType: ObjectType;
    /**
     * The object's shape in Project Arrhythmia.
     */
    shape: Shape;
    /**
     * The object's shape option. Use the option enum for this value.
     */
    shapeOption: number;
    /**
     * The object's text. This value is ignored if object shape is not text.
     */
    text: string;
    /**
     * The object's start time. Determines when the object is spawned.
     */
    startTime: number;
    /**
     * The object's auto kill type. Determines when the object is killed.
     */
    autoKillType: AutoKillType;
    /**
     * The object's auto kill offset. Determines when the object is killed. Depends on auto kill type.
     */
    autoKillOffset: number;
    originX: number;
    originY: number;
    editorLocked: boolean;
    editorCollapse: boolean;
    editorBin: number;
    editorLayer: number;
    readonly positionKeyframes: KeyframeList<PositionValue>;
    readonly scaleKeyframes: KeyframeList<ScaleValue>;
    readonly rotationKeyframes: KeyframeList<RotationValue>;
    readonly colorKeyframes: KeyframeList<ColorValue>;
    readonly owner: ObjectOwner;
    constructor(name: string, owner: ObjectOwner);
    /**
     * Gets this object's parent. If there is no parent, returns null.
     */
    get parent(): PAObject | null;
    /**
     * Sets this object's parent. Pass null for unparent.
     * @param parent The object's parent.
     */
    set parent(parent: PAObject | null);
    toString(): string;
    toJson(): any;
    fromJson(json: any): void;
}
