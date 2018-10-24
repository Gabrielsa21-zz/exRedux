export const BUTTON = 'BUTTON';
//exportamos o msm para o reducer 


export function callActionButton(bnt) {
    console.log("action")
    //agora q entramos na actions, retornamos um type
    return function (dispatch) {
        dispatch({
            type: BUTTON,
            bnt: bnt
        })
    }
}

