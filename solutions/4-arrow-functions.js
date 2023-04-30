export default (list, callback) => {
    for (let element of list) {
        callback.bind(element)();
    }
};
