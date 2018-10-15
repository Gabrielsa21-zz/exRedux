import { BUTTON } from '../actions/buttonAction';

const initialState = {
    bnt: 'teste do botao'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case BUTTON:
        return {...state, bnt: action.bnt}
    }}

//reducer é meio complicado de explicar mas nada mais do que
//vc reclarar o valor e onde vc colocar bnt 
//o resultado vai ser sempre o msm