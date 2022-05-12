import { MODAL_EDIT_SEDE } from '../actionTypes/actionTypes'

const initialState = {
    modal: false
}

export const ModalEditReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODAL_EDIT_SEDE:
            return {
                ...state,
                modal: true
            }

        default:
            return state
    }
}