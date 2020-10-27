import React from 'react';
import { connect } from 'react-redux';
import { Item } from './item';
import AddNewToDo from './addNewTodo';

class TodoList extends React.Component{
    renderTodoList = () =>{
        return this.props.list.map((item, index) => {
            return(
               <Item item = {item} />
            );
        });
    }

    render(){
        return(
            <div className="w3-content">
                <table className="w3-table">
                    <tr><th>ID</th><th>Name</th><th>Completed?</th><th>Action</th></tr>
                    {this.renderTodoList()}
                    <AddNewToDo />
                </table>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return { list: state.todo.todo_list }
}

export default connect(mapStateToProps, null)(TodoList);