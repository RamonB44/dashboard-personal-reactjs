import { LOGIN, VERIFICAR_USUARIO, LOGOUT } from '../actionTypes/actionTypes'
import { sessionLogin } from '../../services/login/session'
import { verificarUsuario } from '../../dashboard/services/verificarUsuario'

export const sessionLoginAction = (responseService) => async dispatch => {
    dispatch({ type: LOGIN, success: responseService });
    dispatch(verificarUsuarioAction);    
}

export const verificarUsuarioAction = async (dispatch) => {

    const usuario = await verificarUsuario()

    dispatch({ type: VERIFICAR_USUARIO, usuario: usuario })
}

export const logoutAction = async (dispatch) => {
    dispatch({ type: LOGOUT, auth: false })
}