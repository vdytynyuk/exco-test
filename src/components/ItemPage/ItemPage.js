import React, { Component } from 'react';

class ItemPage extends Component {
    state = {
        id: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.setState(() => ({ id }));
        // forced update playbuzz elements
        if (window['Playbuzz']) window['Playbuzz'].render();
    }

    render() {
        return (
            <div>
                <div className="playbuzz" data-id={ this.state.id } data-show-share="false" data-show-info="false" data-comments="false"></div>
            </div>
        );
    };
}

export default ItemPage;