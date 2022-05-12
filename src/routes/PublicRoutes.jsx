import React from 'react'
import { Route, Redirect } from 'react-router-dom'

//redux
import { connect } from 'react-redux'

const PublicRoutes = ({ auth, rol, component: Component, ...rest }) => {


    if (auth && rol === 'Administrador') {
        return < Redirect to="/dashboard" />

    } else if (auth && rol === "operario") {

        return <Redirect to="/operario" />
    } else if (auth && rol === "asistente") {

        return <Redirect to="/asistente" />
    }
    else {

        return <Route {...rest} component={Component} />
    }
}

const mapStateToProps = state => ({
    auth: state.sessionReducer.token,
    rol: state.sessionReducer.usuario.rol
})

export default connect(mapStateToProps, null)(PublicRoutes)
