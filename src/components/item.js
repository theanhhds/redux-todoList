import React from 'react';
import { connect } from 'react-redux';
import { actRemoveItemById } from '../redux/actions/todoAction';

class Item extends React.Component{
    render(){
        const {item} = this.props;

        const removeItem = (id) => {
            this.props.removeItemById(id);
        }

        return(
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><span>{item.isCompleted?"Yes":"No"}</span></td>
                <td>{item.isShowed?
                        <span className="w3-btn w3-red" onClick={()=>{removeItem(item.id)}}>Done</span>:
                        <span>Archived</span>}
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        removeItemById : id => {
            dispatch(actRemoveItemById(id));
        }
    }
}

export default connect(null, mapDispatchToProps)(Item);