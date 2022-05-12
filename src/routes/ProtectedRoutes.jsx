import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

// import Dashboard from '../components/Dashboard'

import OperarioView from '../views/components/operario/viewList';

import AsistenteView from '../views/components/asistente/viewList'

const ProtectedRoutes = ({ auth, rol, component: Component, ...rest }) => {




    if (auth) {
        switch (rol) {
            case "gerente":
                return <Route {...rest} component={PanelContainter} />
                // break;
            case "invitado":
                return <Route {...rest} component={InvitadoContainer} />
                // break;
            case "supervisor":
                return <Route {...rest} component={SupervisorContainer} />
            case "Administrador":
                return <Route {...rest} component={DashboardLogistica} />
                // break;
            case "usuario":
                return <Route {...rest} component={PanelRequerimientos} />
                // break;
            default:
                return <Redirect to="/login" />
        }
    }


    /*if (auth && rol === 'gerente') {

        return <Route {...rest} component={DashboardView} />

    } else if (auth && rol === 'invitado') {

        return <Route {...rest} component={InvitadoContainer} />

    } else if (auth && rol === 'Administrador') {

        return <Route {...rest} component={DashboardLogistica} />
    }
    else if (auth && rol === 'usuario') {

        return <Route {...rest} component={PanelRequerimientos} />
    }
    else {


        return <Redirect to="/login" />
    }*/

}

const mapStateToProps = state => ({
    auth: state.sessionReducer.token,
    rol: state.sessionReducer.usuario.rol
})

export default connect(mapStateToProps, null)(ProtectedRoutes)
