class Unserialize {
    constructor(string = "") {
        this.string = string;
    }
    process() {
        const string = this.string.substring(this.string.indexOf("?") + 1);
        const parts = string.split("&");
        const params = {};
        for (const part of parts) {
            const [key, value] = part.split("=");
            params[key] = decodeURI(value);
        }
        return params;
    }
}
export default function (string) {
    const unserialize = new Unserialize(string);
    return unserialize.process();
}
