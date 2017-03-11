// constants and utils
import * as ReducerNames from '../../constants/ReducerNames';

const ${NAME}Reducer = (state = initialState, action) => {
    if (action.payload &&
        action.payload.target_reducer &&
        action.payload.target_reducer != ReducerNames.${NAME}Reducer)
        return state;
    switch (action.type) {
        default: {
        
        }
    }
    return state;
}

export default ${NAME}Reducer;