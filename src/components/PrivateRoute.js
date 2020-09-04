import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Auth } from 'aws-amplify';
import { Loader } from '../assets/styles'

export default ({ children, user, ...rest }) => {
    const [loader, setLoader] = React.useState(true)

    React.useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await Auth.currentAuthenticatedUser();
                user.setUser = userData.attributes
                setLoader(false)
            }
            catch (e) {
                user.setUser = null
                setLoader(false)
            }
        };
        fetchUser();
    }, [])

    return (
        <Route
            {...rest}
            render={({ location }) => (
                loader ? (
                    <div className='h-screen flex justify-center items-center'>
                        <Loader />
                    </div>
                ) : (
                    user.exist ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/auth",
                                state: { from: location }
                            }}
                      />
                    )
                )
            )}
        />
    );
}