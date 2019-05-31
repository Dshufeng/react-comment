const INC = 'INC';
const DEC = 'DEC';

const tiger = 10000;

export function offerReducer(state, action) {
    if (!state) {
        state = { tiger }
    }
    switch (action.type) {
        case INC:
            return {
                tiger: state.tiger + 100
            }
        case DEC:
            return {
                tiger: state.tiger - 100
            }
        default:
            return state;
    }
}

// action 
export const increase = () => {
    return { type: INC }
}
export const decrease = () => {
    return { type: DEC }
}