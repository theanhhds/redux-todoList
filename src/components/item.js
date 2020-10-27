import React from 'react';
import { connect } from 'react-redux';

class Item extends React.Component{
    render(){
        const {item} = this.props;
        return(
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.isCompleted?"Yes":"No"}</td>
                <td>{item.isShowed?"Yes":"No"}</td>
            </tr>
        );
    }
}

export {Item};