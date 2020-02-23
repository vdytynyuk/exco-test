import React, { Component, lazy, Suspense } from 'react';

import './Home.css';
import playbuzz from '../api/playbuzz';

const ItemsList = lazy(() => import('./ItemsList/ItemsList'));

class Home extends Component {
    state = { items: [] };

    render() {
        return (
            <div className="app">
                <main>
                    <Suspense fallback={'Loading..'}>
                        <ItemsList items={this.state.items} />
                    </Suspense>
                </main>
            </div>
        );
    }

    componentDidMount() {
        this.setState({items: playbuzz.items});
    }
}

export default Home;