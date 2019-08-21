import Navigator from '../components/Nav';
import React from 'react';

const Home = ({ Component }) => {
    
    return (
        <>
            <Navigator>
                <Component />
            </Navigator>
        </>
    );
};

export default Home;