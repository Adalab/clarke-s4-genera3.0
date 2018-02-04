import React from 'react';
import ButtonFont from './../../images/text.svg';
import ButtonPalette from './../../images/paint-palette.svg';
import ButtonTheme from './../../images/menu.svg';

class ChoseeColor extends React.Component {

	constructor(props){
		super(props);
		this.HandleClickMenu = this.HandleClickMenu.bind(this);

		this.state={
			visible:false,
		}
	}
	HandleClickMenu(event){
		event.preventDefault();
		this.setState({
			visible:!this.state.visible
		})
	}

  render () {
    return (

				<li className="creation__design__options-colour" >
					<img className="img-design" src={ButtonPalette} title="color" alt="color" onClick ={this.HandleClickMenu} />
					<ul className={`design-colours ${this.state.visible ? 'visible' : 'no-visible'}`}>
						<li className="colour" onClick = {this.props.onClickGreenLime} data-colour-class="red-green-lime" >
							<div className="red"></div>
							<div className="green"></div>
							<div className="lime"></div>
						</li>
						<li className="colour" onClick = {this.props.onClickBlueLime}  data-colour-class="black-blue-lime">
							<div className="black"></div>
							<div className="blue"></div>
							<div className="lime"></div>
						</li>
						<li className="colour" onClick = {this.props.onClickPinkGrey} data-colour-class="black-pink-grey">
							<div className="black"></div>
							<div className="pink"></div>
							<div className="grey"></div>
						</li>
					</ul>
				</li>


    );
  }
}

export default ChoseeColor;