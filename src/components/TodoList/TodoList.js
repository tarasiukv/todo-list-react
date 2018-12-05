import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: {},
            showAllItems: true,
            showCompletedItems: false,
            showUncompletedItems: false
        };

        this.showAllItems = this.showAllItems.bind(this);
        this.showCompletedItems = this.showCompletedItems.bind(this);
        this.showUncompletedItems = this.showUncompletedItems.bind(this);
    }

    showAllItems() {
        this.setState({
            showAllItems: true,
            showCompletedItems: false,
            showUncompletedItems: false
        });
    }

    showCompletedItems() {
        this.setState({
            showAllItems: false,
            showCompletedItems: true,
            showUncompletedItems: false
        });
    }

    showUncompletedItems() {
        this.setState({
            showAllItems: false,
            showCompletedItems: false,
            showUncompletedItems: true
        });
    }
    render() {
        const { items, deleteItem, changeCompletedStatus} = this.props;
        const { showAllItems, showCompletedItems, showUncompletedItems } = this.state;
        return (
            <>
                <div className="ui buttons" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'space-between'
                }}>
                    <button
                        className="ui button"
                        onClick={this.showAllItems}
                    >
                        All
                    </button>
                    <button
                        className="negative ui button"
                        onClick={this.showUncompletedItems}
                    >
                        Doing
                    </button>
                    <button
                        className="positive ui button"
                        onClick={this.showCompletedItems}
                    >
                        Done
                    </button>
                </div>
                {
                    items.length === 0 ? (
                         <div className='ui message red'>
                             <h5 className="ui header center aligned">There are no items</h5>
                         </div>

                    ) : (
                        <>
                            {
                                showAllItems === true &&
                                items.map(
                                item =>  <TodoItem
                                    key={item._id}
                                    item={item}
                                    deleteItem={deleteItem}
                                    changeCompletedStatus={changeCompletedStatus}
                                />
                            )
                            }

                            {
                                showCompletedItems === true &&
                                    items.map(
                                    item => item.isCompleted === true && <TodoItem
                                        key={item._id}
                                        item={item}
                                        deleteItem={deleteItem}
                                        changeCompletedStatus={changeCompletedStatus}
                                    />
                            )}

                            {
                                showUncompletedItems === true &&
                                items.map(
                                    item => item.isCompleted === false && <TodoItem
                                        key={item._id}
                                        item={item}
                                        deleteItem={deleteItem}
                                        changeCompletedStatus={changeCompletedStatus}
                                    />
                                )}
                        </>
                    )
                }
            </>
        );


    }
}

TodoList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    deleteItem: PropTypes.func,
    changeCompletedStatus: PropTypes.func
};

export default TodoList;