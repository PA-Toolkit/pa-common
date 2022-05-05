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
     * @param parentId The object ID.
     */
    getObject(parentId: string): PAObject;
}
