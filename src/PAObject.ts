import {AutoKillType, Easing, ObjectType, RandomMode, Shape, SquareOption} from "./Enums";
import KeyframeList from "./KeyframeList";
import {ColorValue, Keyframe, PositionValue, RotationValue, ScaleValue} from "./Keyframe";
import Serializable from "./Serializable";
import ObjectOwner from "./ObjectOwner";

/**
 * Represents an object in Project Arrhythmia.
 */
export default class PAObject implements Serializable {
    /**
     * The object's name.
     */
    name: string = "";

    /**
     * The object's ID.
     */
    id: string;

    /**
     * The ID of this object's parent. Empty string for no parent.
     */
    parentId: string = "";

    /**
     * The object's position parent type. If this value is true, the object's position is not affected by the parent.
     */
    positionParenting: boolean = true;

    /**
     * The object's scale parent type. If this value is true, the object's scale is not affected by the parent.
     */
    scaleParenting: boolean = false;

    /**
     * The object's rotation parent type. If this value is true, the object's rotation is not affected by the parent.
     */
    rotationParenting: boolean = true;

    /**
     * The object's position parent offset. The object's position lags behind the parent the amount of time equals to the value.
     */
    positionParentOffset: number = 0.0;

    /**
     * The object's scale parent offset. The object's scale lags behind the parent the amount of time equals to the value.
     */
    scaleParentOffset: number = 0.0;

    /**
     * The object's position rotation offset. The object's rotation lags behind the parent the amount of time equals to the value.
     */
    rotationParentOffset: number = 0.0;

    /**
     * The object's render depth. Specifies how far away the object should be from the camera.
     */
    renderDepth: number = 15;

    /**
     * The object's type in Project Arrhythmia (Normal, Helper, Decoration, Empty).
     */
    objectType: ObjectType = ObjectType.Normal;

    /**
     * The object's shape in Project Arrhythmia.
     */
    shape: Shape = Shape.Square;

    /**
     * The object's shape option. Use the option enum for this value.
     */
    shapeOption: number = SquareOption.Solid;

    /**
     * The object's text. This value is ignored if object shape is not text.
     */
    text: string = "";

    /**
     * The object's start time. Determines when the object is spawned.
     */
    startTime: number = 0.0;

    /**
     * The object's auto kill type. Determines when the object is killed.
     */
    autoKillType: AutoKillType = AutoKillType.LastKeyframe;

    /**
     * The object's auto kill offset. Determines when the object is killed. Depends on auto kill type.
     */
    autoKillOffset: number = 0.0;

    originX: number = 0.0;
    originY: number = 0.0;

    editorLocked: boolean = false;
    editorCollapse: boolean = false;
    editorBin: number = 0;
    editorLayer: number = 0;

    readonly positionKeyframes: KeyframeList<PositionValue> = new KeyframeList<PositionValue>(() => new PositionValue());
    readonly scaleKeyframes: KeyframeList<ScaleValue> = new KeyframeList<ScaleValue>(() => new ScaleValue());
    readonly rotationKeyframes: KeyframeList<RotationValue> = new KeyframeList<RotationValue>(() => new RotationValue());
    readonly colorKeyframes: KeyframeList<ColorValue> = new KeyframeList<ColorValue>(() => new ColorValue());

    readonly owner: ObjectOwner;

    constructor(name: string, owner: ObjectOwner) {
        this.name = name;
        this.id = owner.getId();
        this.owner = owner;
    }

    /**
     * Gets this object's parent. If there is no parent, returns null.
     */
    get parent(): PAObject | null {
        return this.parentId != "" ? this.owner.getObject(this.parentId) : null;
    }

    /**
     * Sets this object's parent. Pass null for unparent.
     * @param parent The object's parent.
     */
    set parent(parent: PAObject | null) {
        if (parent != null && parent.owner != this.owner) {
            throw new Error("Mismatch owner!");
        }
        this.parentId = parent != null ? parent.id : "";
    }

    toString(): string {
        return JSON.stringify(this.toJson());
    }

    toJson(): any {
        let json: any = {};
        json.name = this.name;
        json.id = this.id;
        if (this.parentId != "") {
            json.p = this.parentId;
        }
        json.pt = (this.positionParenting ? "1" : "0") + (this.scaleParenting ? "1" : "0") + (this.rotationParenting ? "1" : "0");
        json.po = [
            this.positionParentOffset.toString(),
            this.scaleParentOffset.toString(),
            this.rotationParentOffset.toString()
        ];
        json.d = this.renderDepth.toString();
        json.ot = this.objectType.toString();
        json.shape = this.shape.toString();
        json.so = this.shapeOption.toString();
        if (this.text !== "") {
            json.text = this.text;
        }
        json.st = this.startTime.toString();
        json.akt = this.autoKillType.toString();
        json.ako = this.autoKillOffset.toString();

        json.o = {};
        json.o.x = this.originX.toString();
        json.o.y = this.originY.toString();

        json.ed = {};
        json.ed.locked = this.editorLocked ? "true" : "false";
        json.ed.shrink = this.editorCollapse ? "true" : "false";
        json.ed.bin = this.editorBin.toString();
        json.ed.layer = this.editorLayer.toString();

        json.events = {};
        json.events.pos = this.positionKeyframes.toJson();
        json.events.sca = this.scaleKeyframes.toJson();
        json.events.rot = this.rotationKeyframes.toJson();
        json.events.col = this.colorKeyframes.toJson();
        return json;
    }

    fromJson(json: any) {
        this.name = json.name;
        this.id = json.id;

        if (json.p !== undefined) {
            this.parentId = json.p;
        }

        if (json.pt !== undefined) {
            this.positionParenting = json.pt[0] === '1';
            this.scaleParenting = json.pt[1] === '1';
            this.rotationParenting = json.pt[2] === '1';
        }

        if (json.po !== undefined) {
            this.positionParentOffset = Number.parseFloat(json.po[0]);
            this.scaleParentOffset = Number.parseFloat(json.po[1]);
            this.rotationParentOffset = Number.parseFloat(json.po[2]);
        }

        if (json.d !== undefined) {
            this.renderDepth = Number.parseInt(json.d);
        }

        if (json.ot !== undefined) {
            this.objectType = Number.parseInt(json.ot);
        }

        if (json.shape !== undefined) {
            this.shape = Number.parseInt(json.shape);
        }

        if (json.so !== undefined) {
            this.shapeOption = Number.parseInt(json.so);
        }

        if (json.text !== undefined) {
            this.text = json.text;
        }

        if (json.st !== undefined) {
            this.startTime = Number.parseFloat(json.st);
        }

        if (json.akt !== undefined) {
            this.autoKillType = Number.parseInt(json.akt);
        }

        if (json.ako !== undefined) {
            this.autoKillOffset = Number.parseFloat(json.ako);
        }

        if (json.o !== undefined) {
            this.originX = Number.parseFloat(json.o.x);
            this.originY = Number.parseFloat(json.o.y);
        }

        if (json.ed !== undefined) {
            if (json.ed.locked !== undefined) {
                this.editorLocked = json.ed.locked.toString() === "true";
            }
            if (json.ed.shrink !== undefined) {
                this.editorCollapse = json.ed.shrink.toString() === "true";
            }
            if (json.ed.bin !== undefined) {
                this.editorBin = Number.parseInt(json.ed.bin);
            }
            if (json.ed.layer !== undefined) {
                this.editorLayer = Number.parseInt(json.ed.layer);
            }
        }

        if (json.events !== undefined) {
            if (json.events.pos !== undefined) {
                this.positionKeyframes.fromJson(json.events.pos);
            }
            if (json.events.sca !== undefined) {
                this.scaleKeyframes.fromJson(json.events.sca);
            }
            if (json.events.rot !== undefined) {
                this.rotationKeyframes.fromJson(json.events.rot);
            }
            if (json.events.col !== undefined) {
                this.colorKeyframes.fromJson(json.events.col);
            }
        }
    }

    /**
     * Pushes a position keyframe into the object's position keyframe array.
     * @param time The keyframe time
     * @param x The keyframe's x component
     * @param y The keyframe's y component
     * @param easing The keyframe's easing
     * @param randomMode The keyframe's random mode
     * @param randomX The keyframe's random x component
     * @param randomY The keyframe's random y component
     * @param randomInterval The keyframe's random interval
     */
    pushPosition(time: number, x: number, y: number, easing: Easing = Easing.Linear, randomMode?: RandomMode, randomX?: number, randomY?: number, randomInterval?: number) {
        let kf: Keyframe<PositionValue> = new Keyframe<PositionValue>(() => new PositionValue());
        kf.time = time;
        kf.value.x = x;
        kf.value.y = y;
        kf.easing = easing;
        kf.randomMode = randomMode !== undefined ? randomMode : RandomMode.None;
        kf.randomValue.x = randomX !== undefined ? randomX : 0.0;
        kf.randomValue.y = randomY !== undefined ? randomY : 0.0;
        kf.randomInterval = randomInterval !== undefined ? randomInterval : 0.0;
        this.positionKeyframes.push(kf);
    }

    /**
     * Pushes a scale keyframe into the object's scale keyframe array.
     * @param time The keyframe time
     * @param x The keyframe's x component
     * @param y The keyframe's y component
     * @param easing The keyframe's easing
     * @param randomMode The keyframe's random mode
     * @param randomX The keyframe's random x component
     * @param randomY The keyframe's random y component
     * @param randomInterval The keyframe's random interval
     */
    pushScale(time: number, x: number, y: number, easing: Easing = Easing.Linear, randomMode?: RandomMode, randomX?: number, randomY?: number, randomInterval?: number) {
        let kf: Keyframe<ScaleValue> = new Keyframe<ScaleValue>(() => new ScaleValue());
        kf.time = time;
        kf.value.x = x;
        kf.value.y = y;
        kf.easing = easing;
        kf.randomMode = randomMode !== undefined ? randomMode : RandomMode.None;
        kf.randomValue.x = randomX !== undefined ? randomX : 0.0;
        kf.randomValue.y = randomY !== undefined ? randomY : 0.0;
        kf.randomInterval = randomInterval !== undefined ? randomInterval : 0.0;
        this.scaleKeyframes.push(kf);
    }

    /**
     * Pushes a rotation keyframe into the object's rotation keyframe array.
     * @param time The keyframe time
     * @param value The keyframe's value
     * @param easing The keyframe's easing
     * @param randomMode The keyframe's random mode
     * @param randomValue The keyframe's random value
     * @param randomInterval The keyframe's random interval
     */
    pushRotation(time: number, value: number, easing: Easing = Easing.Linear, randomMode?: RandomMode, randomValue?: number, randomInterval?: number) {
        let kf: Keyframe<RotationValue> = new Keyframe<RotationValue>(() => new RotationValue());
        kf.time = time;
        kf.value.value = value;
        kf.easing = easing;
        kf.randomMode = randomMode !== undefined ? randomMode : RandomMode.None;
        kf.randomValue.value = randomValue !== undefined ? randomValue : 0.0;
        kf.randomInterval = randomInterval !== undefined ? randomInterval : 0.0;
        this.rotationKeyframes.push(kf);
    }

    /**
     * Pushes a color keyframe into the object's color keyframe array.
     * @param time The keyframe time
     * @param value The keyframe's value
     * @param easing The keyframe's easing
     */
    pushColor(time: number, value: number, easing: Easing = Easing.Linear) {
        let kf: Keyframe<ColorValue> = new Keyframe<ColorValue>(() => new ColorValue());
        kf.time = time;
        kf.value.value = value;
        kf.easing = easing;
        this.colorKeyframes.push(kf);
    }
}
