import React from 'react';
import { Link } from 'react-router-dom'
import { RedButton, ButtonLink } from '../assets/styles'

export default () => {
    return (
        <div className="w-screen flex h-16 shadow-md fixed bg-white z-50">
            <div className="flex-2 bg-yellow-400">
                <p>Logo</p> 
            </div>
            <div className="flex-1 flex justify-end items-center pr-6">
                <ButtonLink>
                    Login
                </ButtonLink>
                <RedButton>
                    Get Started
                </RedButton>
            </div>
        </div>
    )
}