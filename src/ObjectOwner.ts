import PAObject from "./PAObject";

/**
 * An object that can hold Project Arrhythmia objects.
 */
export default interface ObjectOwner {
    /**
     * Gets an object ID.
     */
    getId(): string;

    /**
     * Gets a Project Arrhythmia object from this object.
     * @param id The object ID.
     */
    getObject(id: string): PAObject;
}
