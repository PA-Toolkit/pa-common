(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.PACommon = {}));
})(this, (function (exports) { 'use strict';

    /**
     * Contains all possible object types.
     */
    exports.ObjectType = void 0;
    (function (ObjectType) {
        ObjectType[ObjectType["Normal"] = 0] = "Normal";
        ObjectType[ObjectType["Helper"] = 1] = "Helper";
        ObjectType[ObjectType["Decoration"] = 2] = "Decoration";
        ObjectType[ObjectType["Empty"] = 3] = "Empty";
    })(exports.ObjectType || (exports.ObjectType = {}));
    /**
     * Contains all possible object shapes.
     */
    exports.Shape = void 0;
    (function (Shape) {
        Shape[Shape["Square"] = 0] = "Square";
        Shape[Shape["Circle"] = 1] = "Circle";
        Shape[Shape["Triangle"] = 2] = "Triangle";
        Shape[Shape["ArrowUp"] = 3] = "ArrowUp";
        Shape[Shape["Text"] = 4] = "Text";
        Shape[Shape["Hexagon"] = 5] = "Hexagon";
    })(exports.Shape || (exports.Shape = {}));
    /**
     * Contains all possible options for the Square shape.
     */
    exports.SquareOption = void 0;
    (function (SquareOption) {
        SquareOption[SquareOption["Solid"] = 0] = "Solid";
        SquareOption[SquareOption["HollowThick"] = 1] = "HollowThick";
        SquareOption[SquareOption["HollowThin"] = 2] = "HollowThin";
    })(exports.SquareOption || (exports.SquareOption = {}));
    /**
     * Contains all possible options for the Circle shape.
     */
    exports.CircleOption = void 0;
    (function (CircleOption) {
        CircleOption[CircleOption["Solid"] = 0] = "Solid";
        CircleOption[CircleOption["HollowThick"] = 1] = "HollowThick";
        CircleOption[CircleOption["HalfSolid"] = 2] = "HalfSolid";
        CircleOption[CircleOption["HalfHollow"] = 3] = "HalfHollow";
        CircleOption[CircleOption["HollowThin"] = 4] = "HollowThin";
        CircleOption[CircleOption["QuarterSolid"] = 5] = "QuarterSolid";
        CircleOption[CircleOption["QuarterHollow"] = 6] = "QuarterHollow";
        CircleOption[CircleOption["HalfQuarterSolid"] = 7] = "HalfQuarterSolid";
        CircleOption[CircleOption["HalfQuarterHollow"] = 8] = "HalfQuarterHollow";
    })(exports.CircleOption || (exports.CircleOption = {}));
    /**
     * Contains all possible options for the Triangle shape.
     */
    exports.TriangleOption = void 0;
    (function (TriangleOption) {
        TriangleOption[TriangleOption["Solid"] = 0] = "Solid";
        TriangleOption[TriangleOption["Hollow"] = 1] = "Hollow";
        TriangleOption[TriangleOption["RightAngledSolid"] = 2] = "RightAngledSolid";
        TriangleOption[TriangleOption["RightAngledHollow"] = 3] = "RightAngledHollow";
    })(exports.TriangleOption || (exports.TriangleOption = {}));
    /**
     * Contains all possible options for the Arrow shape.
     */
    exports.ArrowOption = void 0;
    (function (ArrowOption) {
        ArrowOption[ArrowOption["Normal"] = 0] = "Normal";
        ArrowOption[ArrowOption["Head"] = 1] = "Head";
    })(exports.ArrowOption || (exports.ArrowOption = {}));
    /**
     * Contains all possible options for the Hexagon shape.
     */
    exports.HexagonOption = void 0;
    (function (HexagonOption) {
        HexagonOption[HexagonOption["Solid"] = 0] = "Solid";
        HexagonOption[HexagonOption["HollowThick"] = 1] = "HollowThick";
        HexagonOption[HexagonOption["HollowThin"] = 2] = "HollowThin";
        HexagonOption[HexagonOption["Half"] = 3] = "Half";
        HexagonOption[HexagonOption["HalfHollowThick"] = 4] = "HalfHollowThick";
        HexagonOption[HexagonOption["HalfHollowThin"] = 5] = "HalfHollowThin";
    })(exports.HexagonOption || (exports.HexagonOption = {}));
    /**
     * Contains all possible object auto kill types.
     */
    exports.AutoKillType = void 0;
    (function (AutoKillType) {
        /**
         * @deprecated This auto kill type is obsolete and will be removed in future versions of Project Arrhythmia.
         */
        AutoKillType[AutoKillType["NoAutokill"] = 0] = "NoAutokill";
        AutoKillType[AutoKillType["LastKeyframe"] = 1] = "LastKeyframe";
        AutoKillType[AutoKillType["LastKeyframeOffset"] = 2] = "LastKeyframeOffset";
        AutoKillType[AutoKillType["Fixed"] = 3] = "Fixed";
        AutoKillType[AutoKillType["SongTime"] = 4] = "SongTime";
    })(exports.AutoKillType || (exports.AutoKillType = {}));
    /**
     * Contains all possible object random modes.
     */
    exports.RandomMode = void 0;
    (function (RandomMode) {
        RandomMode[RandomMode["None"] = 0] = "None";
        RandomMode[RandomMode["Range"] = 1] = "Range";
        /**
         * @deprecated This is no longer used and only exists for backwards-compatibility purposes. Please use interval instead.
         */
        RandomMode[RandomMode["Snap"] = 2] = "Snap";
        RandomMode[RandomMode["Toggle"] = 3] = "Toggle";
        RandomMode[RandomMode["Scale"] = 4] = "Scale";
    })(exports.RandomMode || (exports.RandomMode = {}));
    /**
     * Contains all possible keyframe curve types.
     */
    exports.Easing = void 0;
    (function (Easing) {
        Easing["Linear"] = "Linear";
        Easing["Instant"] = "Instant";
        Easing["InSine"] = "InSine";
        Easing["OutSine"] = "OutSine";
        Easing["InOutSine"] = "InOutSine";
        Easing["InElastic"] = "InElastic";
        Easing["OutElastic"] = "OutElastic";
        Easing["InOutElastic"] = "InOutElastic";
        Easing["InBack"] = "InBack";
        Easing["OutBack"] = "OutBack";
        Easing["InOutBack"] = "InOutBack";
        Easing["InBounce"] = "InBounce";
        Easing["OutBounce"] = "OutBounce";
        Easing["InOutBounce"] = "InOutBounce";
        Easing["InQuad"] = "InQuad";
        Easing["OutQuad"] = "OutQuad";
        Easing["InOutQuad"] = "InOutQuad";
        Easing["InCirc"] = "InCirc";
        Easing["OutCirc"] = "OutCirc";
        Easing["InOutCirc"] = "InOutCirc";
        Easing["InExpo"] = "InExpo";
        Easing["OutExpo"] = "OutExpo";
        Easing["InOutExpo"] = "InOutExpo";
    })(exports.Easing || (exports.Easing = {}));

    class PositionValue {
        readJson(json) {
            this.x = Number.parseFloat(json.x);
            this.y = Number.parseFloat(json.y);
        }
        writeJson(json) {
            json.x = this.x.toString();
            json.y = this.y.toString();
        }
        readRandomJson(json) {
            this.x = Number.parseFloat(json.rx);
            this.y = Number.parseFloat(json.ry);
        }
        writeRandomJson(json) {
            json.rx = this.x.toString();
            json.ry = this.y.toString();
        }
    }
    class ScaleValue {
        readJson(json) {
            this.x = Number.parseFloat(json.x);
            this.y = Number.parseFloat(json.y);
        }
        writeJson(json) {
            json.x = this.x.toString();
            json.y = this.y.toString();
        }
        readRandomJson(json) {
            this.x = Number.parseFloat(json.rx);
            this.y = Number.parseFloat(json.ry);
        }
        writeRandomJson(json) {
            json.rx = this.x.toString();
            json.ry = this.y.toString();
        }
    }
    class RotationValue {
        readJson(json) {
            this.value = Number.parseFloat(json.x);
        }
        writeJson(json) {
            json.x = this.value.toString();
        }
        readRandomJson(json) {
            this.value = Number.parseFloat(json.rx);
        }
        writeRandomJson(json) {
            json.rx = this.value.toString();
        }
    }
    class ColorValue {
        readJson(json) {
            this.value = Number.parseInt(json.x);
        }
        writeJson(json) {
            json.x = Math.floor(this.value).toString();
        }
        readRandomJson(json) {
            throw new Error("Color keyframe can not be randomized!");
        }
        writeRandomJson(json) {
            throw new Error("Color keyframe can not be randomized!");
        }
    }
    class Keyframe {
        constructor(valueFactory) {
            this.time = 0.0;
            this.easing = exports.Easing.Linear;
            this.randomMode = exports.RandomMode.None;
            this.randomInterval = 0.0;
            this.value = valueFactory();
            this.randomValue = valueFactory();
        }
        toString() {
            return JSON.stringify(this.toJson());
        }
        toJson() {
            let json = {};
            json.t = this.time.toString();
            this.value.writeJson(json);
            if (this.easing !== exports.Easing.Linear) {
                json.ct = this.easing;
            }
            if (this.randomMode !== exports.RandomMode.None) {
                json.r = this.randomMode.toString();
                this.randomValue.writeRandomJson(json);
                json.rz = this.randomInterval.toString();
            }
            return json;
        }
        fromJson(json) {
            this.time = Number.parseFloat(json.t);
            this.value.readJson(json);
            if (json.ct !== undefined) {
                this.easing = json.ct;
            }
            if (json.r !== undefined) {
                this.randomMode = Number.parseInt(json.r);
                this.randomValue.readRandomJson(json);
                this.randomInterval = Number.parseFloat(json.rz);
            }
        }
    }

    /**
     * A class that holds keyframes.
     */
    class KeyframeList {
        constructor(valueFactory) {
            /**
             * The keyframes stored in this object.
             */
            this.keyframes = [];
            this.valueFactory = valueFactory;
        }
        /**
         * Gets how many keyframes are in the list.
         */
        get length() {
            return this.keyframes.length;
        }
        /**
         * Pushes a keyframe into this keyframe list.
         * @param keyframes The keyframe
         */
        push(keyframe) {
            return this.keyframes.push(keyframe);
        }
        /**
         * Pops and returns the last keyframe in the list.
         */
        pop() {
            return this.keyframes.pop();
        }
        toString() {
            return JSON.stringify(this.toJson());
        }
        toJson() {
            let json = [];
            for (let keyframe of this.keyframes) {
                json.push(keyframe.toJson());
            }
            return json;
        }
        fromJson(json) {
            this.keyframes.length = 0;
            for (let kfJson of json) {
                let kf = new Keyframe(this.valueFactory);
                kf.fromJson(kfJson);
                this.keyframes.push(kf);
            }
        }
    }

    /**
     * Represents an object in Project Arrhythmia.
     */
    class PAObject {
        constructor(name, owner) {
            /**
             * The object's name.
             */
            this.name = "";
            /**
             * The ID of this object's parent. Empty string for no parent.
             */
            this.parentId = "";
            /**
             * The object's position parent type. If this value is true, the object's position is not affected by the parent.
             */
            this.positionParenting = true;
            /**
             * The object's scale parent type. If this value is true, the object's scale is not affected by the parent.
             */
            this.scaleParenting = false;
            /**
             * The object's rotation parent type. If this value is true, the object's rotation is not affected by the parent.
             */
            this.rotationParenting = true;
            /**
             * The object's position parent offset. The object's position lags behind the parent the amount of time equals to the value.
             */
            this.positionParentOffset = 0.0;
            /**
             * The object's scale parent offset. The object's scale lags behind the parent the amount of time equals to the value.
             */
            this.scaleParentOffset = 0.0;
            /**
             * The object's position rotation offset. The object's rotation lags behind the parent the amount of time equals to the value.
             */
            this.rotationParentOffset = 0.0;
            /**
             * The object's render depth. Specifies how far away the object should be from the camera.
             */
            this.renderDepth = 15;
            /**
             * The object's type in Project Arrhythmia (Normal, Helper, Decoration, Empty).
             */
            this.objectType = exports.ObjectType.Normal;
            /**
             * The object's shape in Project Arrhythmia.
             */
            this.shape = exports.Shape.Square;
            /**
             * The object's shape option. Use the option enum for this value.
             */
            this.shapeOption = exports.SquareOption.Solid;
            /**
             * The object's text. This value is ignored if object shape is not text.
             */
            this.text = "";
            /**
             * The object's start time. Determines when the object is spawned.
             */
            this.startTime = 0.0;
            /**
             * The object's auto kill type. Determines when the object is killed.
             */
            this.autoKillType = exports.AutoKillType.LastKeyframe;
            /**
             * The object's auto kill offset. Determines when the object is killed. Depends on auto kill type.
             */
            this.autoKillOffset = 0.0;
            this.originX = 0.0;
            this.originY = 0.0;
            this.editorLocked = false;
            this.editorCollapse = false;
            this.editorBin = 0;
            this.editorLayer = 0;
            this.positionKeyframes = new KeyframeList(() => new PositionValue());
            this.scaleKeyframes = new KeyframeList(() => new ScaleValue());
            this.rotationKeyframes = new KeyframeList(() => new RotationValue());
            this.colorKeyframes = new KeyframeList(() => new ColorValue());
            this.name = name;
            this.id = owner.getId();
            this.owner = owner;
        }
        /**
         * Gets this object's parent. If there is no parent, returns null.
         */
        get parent() {
            return this.parentId != "" ? this.owner.getObject(this.parentId) : null;
        }
        /**
         * Sets this object's parent. Pass null for unparent.
         * @param parent The object's parent.
         */
        set parent(parent) {
            if (parent != null && parent.owner != this.owner) {
                throw new Error("Mismatch owner!");
            }
            this.parentId = parent != null ? parent.parentId : "";
        }
        toString() {
            return JSON.stringify(this.toJson());
        }
        toJson() {
            let json = {};
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
        fromJson(json) {
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
    }

    exports.Utils = void 0;
    (function (Utils) {
        function randInt(max) {
            return Math.floor(Math.random() * max);
        }
        Utils.randInt = randInt;
        /**
         * Creates a random ID.
         * @return 16-character long ID string
         */
        function randId() {
            const idChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*_+{}|:<>?,./;'[]▓▒░▐▆▉☰☱☲☳☴☵☶☷►▼◄▬▩▨▧▦▥▤▣▢□■¤ÿòèµ¶™ßÃ®¾ð¥œ⁕(◠‿◠✿)";
            let id = "";
            for (let i = 0; i < 16; i++) {
                id += idChars[randInt(idChars.length)];
            }
            return id;
        }
        Utils.randId = randId;
    })(exports.Utils || (exports.Utils = {}));

    exports.ColorValue = ColorValue;
    exports.Keyframe = Keyframe;
    exports.KeyframeList = KeyframeList;
    exports.PAObject = PAObject;
    exports.PositionValue = PositionValue;
    exports.RotationValue = RotationValue;
    exports.ScaleValue = ScaleValue;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
