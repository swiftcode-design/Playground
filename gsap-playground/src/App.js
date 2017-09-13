import React, { Component } from 'react';
import TweenMax, { TimelineMax } from 'gsap';
import { tl, animateFlash, hamburgerAnime, angularAnime } from './gsap.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false
    }
    this.hamburgerAnime = this.hamburgerAnime.bind(this);
    this.angularAnime = this.angularAnime.bind(this)
  }
  componentDidMount(){
    // tl.to(this.refs.myDiv, 1, {left:100}).to(this.refs.myDiv, 1, {top:50}).to(this.refs.myDiv, 1, {opacity:0.8});
    animateFlash.to(this.refs.myImg, 1, {width: 100})
    // TweenMax.to(this.refs.myDiv,0.5,{opacity: .5})
    // TweenMax.to(this.refs.myImg,1,{height: 150})
  }
  hamburgerAnime(){
    if(this.state.menuOpen){
      hamburgerAnime.to(this.refs.span1, 1, {transform: 'rotate(0)', top: 0})
      .to(this.refs.span3, 1, {transform: 'rotate(0)', top: 0}, '-=1')
      .to(this.refs.span2, 1, {width: 20}, '-=1')
      .to(this.refs.sidenav, 1, {left: -280}, '-=1')
      this.setState({menuOpen: !this.state.menuOpen})
    } else {
      hamburgerAnime.to(this.refs.span1, 1, {transform: 'rotate(135deg)', top: 7})
      .to(this.refs.span3, 1, {transform: 'rotate(-135deg)', top: -7}, '-=1')
      .to(this.refs.span2, 1, {width: 0}, '-=1')
      .to(this.refs.sidenav, 1, {left: 0}, '-=1')
      this.setState({menuOpen: !this.state.menuOpen})
    }
  }
  angularAnime(){
    angularAnime.to(this.refs.angular, 1, {transform: 'rotate(900deg)'})

    // { transform: rotate(0deg); }
    // to { transform: rotate(360deg); }
  }
  render() {
    console.log(TweenMax)
    return (
      <div className='App'>
        <div className="Nav">
          {/* <img onClick={() => animateFlash.to(this.refs.myImg, 1, {height: 180}).to(this.refs.myImg, 1, {height: 80})} ref='myImg' src={ logo } className="App-logo" alt="logo" /> */}
          <div onClick={this.hamburgerAnime} className="hamburger">
            <span ref="span1">&nbsp;</span>
            <span ref="span2">&nbsp;</span>
            <span ref="span3">&nbsp;</span>
          </div>
          <img onClick={() => animateFlash.to(this.refs.myImg, 1, {height: 180, width: 180}).to(this.refs.myImg, 1, {height: 80, width: 80})} ref='myImg' src={ logo } className="App-logo" alt="logo" />
          <div className="hamburger">Learn more!!</div>
        </div>
        <div ref="sidenav" className="sidenav">sidenav</div>
        <div ref='angular' className="jumbotron">
          <img onClick={this.angularAnime}  className="a-logo" src="https://cdn-images-1.medium.com/max/796/1*juPyda3wq9uz_SNFRLuANg@2x.png"></img>
        </div>

      </div>
    );
  }
}

export default App;
