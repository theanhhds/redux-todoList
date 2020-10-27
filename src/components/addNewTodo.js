import React from 'react';
import { connect } from 'react-redux';
import { actAddNewItem } from '../redux/actions/todoAction';

class AddNewToDo extends React.Component{
    constructor(){
        super();
        this.state = {
            input_name: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.addNew = this.addNew.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addNew(){
        let newItem = {
            id: this.props.list.length,
            name: this.state.input_name,
            isCompleted: false,
            isShowed: true
        };
        this.props.addNewTodo(newItem);

        this.setState({input_name: ''});
    }

    render(){
        return(
            <tr>
                <td>{this.props.list.length}</td>
                <td>
                    <input  type="text" 
                            name="input_name" 
                            onChange={this.handleChange} 
                            value={this.state.input_name}/>
                </td>
                <td></td>
                <td>
                    <button className="w3-btn w3-green" onClick={this.addNew}>Add</button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.todo.todo_list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewTodo: newItem => {
            dispatch(actAddNewItem(newItem));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewToDo);
// export {AddNewToDo};