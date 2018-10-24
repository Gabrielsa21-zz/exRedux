import { BUTTON } from '../actions/buttonAction';

const initialState = {
    bnt: null
}
export default function (state = initialState, action) {
    console.log("reducer")
    switch (action.type) {
        case BUTTON: {
            return {...state, bnt: 'teste'}
        }
        default: return state;
    }
}

//reducer é meio complicado de explicar mas nada mais do que
//vc reclarar o valor e onde vc colocar bnt 
//o resultado vai ser sempre o msm