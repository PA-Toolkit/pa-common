/**
 * Contains all possible object types.
 */
export enum ObjectType {
    Normal = 0,
    Helper = 1,
    Decoration = 2,
    Empty = 3
}

/**
 * Contains all possible object shapes.
 */
export enum Shape {
    Square = 0,
    Circle = 1,
    Triangle = 2,
    ArrowUp = 3,
    Text = 4,
    Hexagon = 5
}

/**
 * Contains all possible options for the Square shape.
 */
export enum SquareOption {
    Solid = 0,
    HollowThick = 1,
    HollowThin = 2
}

/**
 * Contains all possible options for the Circle shape.
 */
export enum CircleOption {
    Solid = 0,
    HollowThick = 1,
    HalfSolid = 2,
    HalfHollow = 3,
    HollowThin = 4,
    QuarterSolid = 5,
    QuarterHollow = 6,
    HalfQuarterSolid = 7,
    HalfQuarterHollow = 8
}

/**
 * Contains all possible options for the Triangle shape.
 */
export enum TriangleOption {
    Solid = 0,
    Hollow = 1,
    RightAngledSolid = 2,
    RightAngledHollow = 3
}

/**
 * Contains all possible options for the Arrow shape.
 */
export enum ArrowOption {
    Normal = 0,
    Head = 1
}

/**
 * Contains all possible options for the Hexagon shape.
 */
export enum HexagonOption {
    Solid = 0,
    HollowThick = 1,
    HollowThin = 2,
    Half = 3,
    HalfHollowThick = 4,
    HalfHollowThin = 5
}

/**
 * Contains all possible object auto kill types.
 */
export enum AutoKillType {
    /**
     * @deprecated This auto kill type is obsolete and will be removed in future versions of Project Arrhythmia.
     */
    NoAutokill = 0,
    LastKeyframe = 1,
    LastKeyframeOffset = 2,
    Fixed = 3,
    SongTime = 4
}

/**
 * Contains all possible object random modes.
 */
export enum RandomMode {
    None = 0,
    Range = 1,
    /**
     * @deprecated This is no longer used and only exists for backwards-compatibility purposes. Please use interval instead.
     */
    Snap = 2,
    Toggle = 3,
    Scale = 4
}

/**
 * Contains all possible keyframe curve types.
 */
export enum Easing {
    Linear = "Linear",
    Instant = "Instant",
    InSine = "InSine",
    OutSine = "OutSine",
    InOutSine = "InOutSine",
    InElastic = "InElastic",
    OutElastic = "OutElastic",
    InOutElastic = "InOutElastic",
    InBack = "InBack",
    OutBack = "OutBack",
    InOutBack = "InOutBack",
    InBounce = "InBounce",
    OutBounce = "OutBounce",
    InOutBounce = "InOutBounce",
    InQuad = "InQuad",
    OutQuad = "OutQuad",
    InOutQuad = "InOutQuad",
    InCirc = "InCirc",
    OutCirc = "OutCirc",
    InOutCirc = "InOutCirc",
    InExpo = "InExpo",
    OutExpo = "OutExpo",
    InOutExpo = "InOutExpo"
}
