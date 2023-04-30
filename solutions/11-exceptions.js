export class ParseError extends Error {
    constructor(message) {
        super(message);
        this.name = "ParseError";
    }
}


export let parseJson = (Json) => {
    try {
        return JSON.parse(Json);
    } catch {
        throw new ParseError();
    }
};

