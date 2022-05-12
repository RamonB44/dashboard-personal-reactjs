import { LOGIN, LOGOUT, VERIFICAR_USUARIO } from '../actionTypes/actionTypes'

//cuando se haga refresh en el navegador mantener el token
const token = localStorage.getItem('token');
const usuario = JSON.parse(localStorage.getItem('usuario'));



const initialState = token ?
    { token, usuario: { id: usuario.id, rol: usuario.rol, nombrePersonal: usuario.nombrePersonal } }
    : { token: false, usuario: { id: '', rol: '', nombrePersonal: '' } }

export const sessionReducer = (state = initialState, action) => {


    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                token: localStorage.getItem('token')

            }
        case VERIFICAR_USUARIO:
            return {
                ...state,
                usuario: {
                    id: action.usuario.idUsuario,
                    rol: action.usuario.nombreRol,
                    nombrePersonal: action.usuario.nombrePersonalUsuario
                }
            }
        case LOGOUT:
            return {
                ...state,
                token: false,
                usuario: {
                    id: '',
                    rol: ''
                }
            }

        default:
            return state
    }
}