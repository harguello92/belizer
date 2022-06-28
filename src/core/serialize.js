class Serialize {
    constructor(object) {
        this.object = object;
    }
    process() {
        return Object.entries(this.object)
            .map(([key, value]) => `${key}=${encodeURI(value)}`)
            .join("&");
    }
}
export default function (object) {
    const serializer = new Serialize(object);
    return serializer.process();
}
