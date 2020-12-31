import * as React from 'react';
import * as styles from './jujuspritecomponent.scss';

interface Child {
    name?: string;
}

export class Julian extends React.Component<Child, {}> {
  render() {
    return (
        <h2 className={styles.myName}>
        <p>My name is: {this.props.name}</p>
        </h2>
    );
  }
}

