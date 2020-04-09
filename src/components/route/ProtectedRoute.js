import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from '../auth/auth'

export default function ProtectedRoute({ component: Component, ...res }) {
    return (
        <Route
            {...res}
            render={routeProps => {
                return auth.isAuthenticated
                    ? <Component {...routeProps} />
                    : <Redirect to={
                        {
                            pathname: '/login',
                            state: {
                                from: routeProps.location
                            }
                        }
                    } />
            }}
        />
    )
}

