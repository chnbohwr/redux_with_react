const delayMiddleware = store => next => action => {
    if (action.delay) {
        return setTimeout(() => {
            next(action);
        }, action.delay * 1000);
    } else {
        next(action);
    }
}
export default delayMiddleware;
