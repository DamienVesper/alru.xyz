// React libraries.
import React from 'react';
import { hot } from 'react-hot-loader';

import '../../public/assets/scss/pages/home.scss';

// import Logo from '../../public/assets/img/logos/splash.png';

/**
 * The landing page of the website.
 */
class Home extends React.Component {
    render = () => {
        return (
            <main className="text-center container">
                <h1 className="my-5">Welcome to the Alru Network!</h1>
                <p className="desc">Reuniting friends, family, and forgotten organizations, we are a community bringing together these scattered groups as one. We&apos;ve also been hosting servers for various different games since November 15, 2020, for the community, and more. Join our Discord to be part of our amazing community today!</p>
                <div className="container mt-5">
                    <button className="gmod-btn btn btn-lg mx-1">Garry's Mod</button>
                    <button className="minecraft-btn btn btn-lg mx-1">Minecraft</button>
                    <button className="fivem-btn btn btn-lg mx-1">FiveM</button>
                </div>
            </main>
        );
    }
}

export default hot(module)(Home);
