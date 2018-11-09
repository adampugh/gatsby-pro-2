import React from 'react';

import Layout from '../components/layout';

const AboutPage = ({location}) => (
    <Layout location={location}>
        <div>
            <h1>About Us</h1>
            <p>This is about us text</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, rerum!</p>
        </div>
    </Layout>
);

export default AboutPage;
