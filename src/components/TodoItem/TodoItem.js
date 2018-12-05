import React from 'react';
import PropTypes from 'prop-types';
import S from './TodoItem.module.css';
import cx from 'classnames';


class TodoItem extends  React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { item, deleteItem, changeCompletedStatus } = this.props;
        const isCompletedBtnClass = cx({
            'ui large close link icon': item.isCompleted,
            'ui large check circle icon': !item.isCompleted,
    });
        return (
                <div className="ui divided items">
                    <div className={S.item}>
                        <div className="content">
                            <h2 className={S.header}>{ item.name }</h2>
                            <h4 className={S.header}>{
                                item.isCompleted ? (
                                    'done') : ('doing')

                            }</h4>
                            <div className={S.extra}>
                                <div className="ui buttons">
                                    <button
                                        className="ui button"
                                        onClick={() => changeCompletedStatus(item._id)}
                                    >
                                        <i className={isCompletedBtnClass}></i>
                                    </button>
                                    <div className="or"/>
                                    <button
                                        className="ui positive button"
                                        onClick={() => deleteItem(item)}
                                    >Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>);
    }

}

    TodoItem.propTypes = {
        item: PropTypes.shape({
            _id: PropTypes.number,
            name: PropTypes.string,
            isCompleted: PropTypes.bool
        }),
        deleteItem: PropTypes.func,
        changeCompletedStatus: PropTypes.func
    };

    export default TodoItem;

