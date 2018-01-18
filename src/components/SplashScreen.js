import React, { Component } from 'react';
import anime from 'animejs';

// https://github.com/facebookincubator/create-react-app/pull/3718
/* eslint import/no-webpack-loader-syntax: off */
import SplashSvg from '-!svg-react-loader!../assets/splash.svg';
import './SplashScreen.css';

class SplashScreen extends Component {
  constructor() {
    super();
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
  }

  componentDidMount() {
    const cog1 = document.querySelector('.st0');
    const cog2 = document.querySelector('.st2');
    const center = document.querySelector('.center-circle')
    const title = document.querySelector('.title');
    const svg = document.querySelector('svg');

    anime({
      targets: '.draw-me',
      strokeDashoffset: {
        value: [anime.setDashoffset, 0],
        duration: 3000,
        easing: 'easeInOutSine'
      },
      complete: (anim) => {
        cog1.classList.add("fade-in");
        cog2.classList.add("fade-in");
        center.classList.add("fade-in");
        title.classList.add("show");
        svg.classList.add("filter");
      }
    })
  }

  onAnimationEnd(e) {
    const cog1 = document.querySelector('.st0');
    if (e.nativeEvent.target === cog1 && e.nativeEvent.propertyName === 'transform') {
      setTimeout(() => {
        this.props.onDismiss();
      }, 2000);
    }
  }

  render() {
    return (
      <div className="splashContainer" onClick={this.props.onDismiss}>
        <div className="splash" onTransitionEnd={this.onAnimationEnd}>
          <SplashSvg />
        </div>
      </div>
    )
  }
}

export default SplashScreen;
