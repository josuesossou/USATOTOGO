import React from 'react'
import { Route } from 'react-router-dom'
import { Overlay } from '../assets/styles'

export default ({ children, user, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.exist ? (
                    children
                ) : (
                    <div className='h-screen p-16'> 
                        <section></section>
                        hello world
                    </div>
                )
            }
        />
    );
}