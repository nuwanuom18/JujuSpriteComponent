import * as React from 'react';
import * as styles from './PuppySprite.scss'

interface SpriteDetailsProp{
   
    flipped?: boolean;
}
export class PuppySprite extends React.Component<SpriteDetailsProp, SpriteDetailsProp>{
    constructor(props: SpriteDetailsProp){
        super(props);
        this.state = {
            flipped: this.props.flipped,
          
        }
    }
    render(){
        return (
            <div className={styles.character + " "+ (this.state.flipped ? styles.flipped:"")  } >
                
            </div>
        );
    }

    componentDidMount(){
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    componentWillMount(){
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (e:any) => {
        if (e.keyCode == 39){
            this.setState({flipped: true})
        }else if(e.keyCode === 37){
            this.setState({flipped:false})
        }
    }

}