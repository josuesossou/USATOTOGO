import React from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { Link } from 'react-router-dom'
import { RedButton, ButtonLink, NavLists, Text } from '../assets/styles'
import { observer } from 'mobx-react';

Amplify.configure(awsconfig);

export default observer(({ userStore }) => {
    const [loader, setLoader] = React.useState(true)

    React.useEffect(() => {
        Hub.listen('auth', ({ payload: { event, data } }) => {
            switch (event) {
                case 'signIn':
                case 'cognitoHostedUI':
                    getUser()
                    break;
                case 'signOut':
                    userStore.setUser = null;
                    break;
                case 'signIn_failure':
                case 'cognitoHostedUI_failure':
                    console.log('Sign in failure', data);
                    break;
            }
        });

        getUser()
    }, []);

    async function getUser() {
        try {
            const userData = await Auth.currentAuthenticatedUser();
            userStore.setUser = userData.attributes
            setLoader(false)
        }
        catch (e) {
            userStore.setUser = null
            setLoader(false)
        }
    }
    
    return loader ? (
        <div></div>
    ) : (
        <div className="w-screen flex h-16 shadow-md fixed bg-white z-50">
            <div className="flex-2 bg-yellow-400">
                <p>Logo</p> 
            </div>
            <NavLists>
                <Link to='/'>
                    <ButtonLink>Accueil</ButtonLink>
                </Link>
                

                {
                    userStore.exist ? (
                        <>
                            <ButtonLink className='cursor-default border-none'>
                                {userStore.getUser.email}
                            </ButtonLink>
                            <ButtonLink onClick={() => Auth.signOut()}>
                                Déconnexion
                            </ButtonLink>
                        </>
                    ) : (
                        <>
                            {/* <ButtonLink onClick={() => Auth.federatedSignIn()}>
                                Login
                            </ButtonLink> */}
                            <RedButton onClick={() => Auth.federatedSignIn()}>
                                Commencer
                            </RedButton>
                        </>
                    )
                }
           
            </NavLists>
        </div>
    )
})