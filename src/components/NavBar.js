import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import Burger from './/burger'
import '../styles/navBar.scss'

class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {classSet: 2}
    }

    componentDidMount() {
        window.addEventListener('resize', (event) => {
            this.setState({classSet : 2})
        });
    }

    handleClick = () => {
        console.log('Click')
        if(this.state.classSet === 2 || this.state.classSet === 1)
            this.setState({classSet : 0})
        else
            this.setState({classSet : 1})
    }

    render(){

        const classSet = this.state.classSet;

        return (
            <div className='nav-bar'>
            <div className='logo'>juliosoto</div>
            <ul className={`
                nav-menu
                ${classSet === 0 ? 'nav-active with-trans' : ''}
                ${classSet === 1 ? 'with-trans' : ''}
                `}>
                <li>
                <Link to="/" onClick={this.handleClick}>Home</Link>
                </li>
                <li>
                <Link to="/contact" onClick={this.handleClick}>Contact</Link>
                </li>
                <li>
                <Link to="/projects" onClick={this.handleClick}>Projects</Link>
                </li>
                <li>
                <Link to="/about" onClick={this.handleClick}>About</Link>
                </li>
            </ul>
            <Burger classSet={this.state.classSet} onClick={this.handleClick}/>
            </div>
        )
    }
}

export default NavBar;