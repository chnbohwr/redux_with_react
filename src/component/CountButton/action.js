export const TYPES = {
    CLICKEVENT: 'CLICKEVENT'
};

export function clickAction(count = 1, delay = 0) {
    return{
        type: CLICKEVENT,
        count,
        delay
    };
}
