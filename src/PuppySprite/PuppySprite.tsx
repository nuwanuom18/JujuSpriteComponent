import * as React from 'react';
import * as styles from './PuppySprite.scss'

interface SpriteDetailsProp{
    flippedy?:boolean;
    flipped?: boolean;
}
export class PuppySprite extends React.Component<SpriteDetailsProp, SpriteDetailsProp>{
    constructor(props: SpriteDetailsProp){
        super(props);
        this.state = {
            flipped: this.props.flipped,
            flippedy: this.props.flippedy,
        }
    }
    render(){
        return (
            <div className={styles.character + " "+ (this.state.flipped ? styles.flipped:"") +(this.state.flippedy ? styles.flippedy:"") } >
                
            </div>
        );
    }
}