import React from 'react';
import PropTypes from 'prop-types';
import UserPicture from "../UserPicture";
import ColorHash from 'color-hash';
import styles from './CoachCard.module.css';
import classNames from 'classnames';
import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';

const colorHash = new ColorHash();

function CoachCard(props) {
    const {coach:{firstName, lastName, profilePicture, level, isSelected}} = props;
    const fullName = `${firstName} ${lastName}`;
    const imgStyle = {
        backgroundColor:colorHash.hex(fullName)
    };

    const onClick = () => {
      props.setSelected(props.index);
    };

return (
    <div className={styles.container}>
        <div className={classNames(styles.userPictureWrapper, styles.centerAlign)} style={imgStyle}>
    <UserPicture
        className={styles.userPicture}
        lastName={lastName}
        firstName={firstName}
        src={profilePicture}
    />
        </div>
    <div className={styles.userInfoWrapper}>
        <div className={styles.fullName}>{fullName}</div>
        <div className={styles.level}>Level {level}</div>
    </div>
        <div onClick={onClick}
            className={classNames(styles.checkBox, styles.centerAlign, {[styles.checked]: isSelected})}>
            <Icon path={mdiCheck} color={'white'} size={'75%'}/>
        </div>
    </div>


);
}

CoachCard.defaultProps = {};

CoachCard.propTypes = {
    coach: PropTypes.shape({
        firstName:PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        profilePicture: PropTypes.string,
        level: PropTypes.number.isRequired
    })
};

export default CoachCard;