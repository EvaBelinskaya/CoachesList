import React,{Component} from 'react';
import PropTypes from 'prop-types';

class UserPicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
        };
    }

    onErrorHandler = (e) => {
    this.setState({
        isError:true
    });
    };

    render () {
        const {isError} = this.state;
        const {src, firstName, lastName, style, className} = this.props;
        return (
            (isError || !src)
            ?
                <span style={style} >{`${firstName.charAt(0)} ${lastName.charAt(0)}`}</span>
                :
                <img style={style} className={className} src={src} alt="user picture" onError={this.onErrorHandler} />
        );
    }

}

UserPicture.defaultProps = {
    src: '',
    style: {},
    className:'',
};

UserPicture.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};


export default UserPicture;