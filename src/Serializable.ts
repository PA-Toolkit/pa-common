/**
 * An object that can be serialized to json.
 */
export default interface Serializable {
    /**
     * Convert this object to json.
     */
    toJson(): any;

    /**
     * Read a json and apply it to the object.
     * @param json The json.
     */
    fromJson(json: any);
}
