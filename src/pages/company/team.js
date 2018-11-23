import React from 'react';

import Layout from '../../components/layout';
import DoesThisWork from '../../components/doesThisWork';

const TeamPage = () => (
    <Layout>
        <DoesThisWork />
        <div>
            <h1>The Team</h1>
            <p>This is about us text</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, rerum!</p>
        </div>
    </Layout>
);

export default TeamPage;