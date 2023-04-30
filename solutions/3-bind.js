export default (object, func) => {
    return (...args) => {
        object["\\"] = func;
        let resource = obj["\\"](...args);
        delete object["\\"];
        return resource;
    };
};
