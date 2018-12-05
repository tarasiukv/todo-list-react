import React from "react";
import PropTypes from "prop-types";
class FormInlineMessage extends React.Component {

    render() {
        const { content } = this.props;
        return (
            <span style={{
                color: "#9f3A38"
            }}>{content}</span>
        )
    }
}

FormInlineMessage.propTypes = {
    content: PropTypes.string
};

FormInlineMessage.DefaultProps = {
    content: ""
};

export default FormInlineMessage;