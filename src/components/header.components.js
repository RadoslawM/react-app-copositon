import React, { PureComponent } from 'react';
import '../App.css';

class Header extends PureComponent {
    state = {
        isFixed: true,
    };

    componentDidMount(){
        window.addEventListener('scroll', this.handleHeaderPosition);
    }

    componentDidUpdate() {
        console.log('update', this.state.isFixed);
    }

    
    handleHeaderPosition = () => {
        if(window.scrollY > 600 && !this.state.isFixed) {
            this.setState({isFixed: true});
        } else if(window.scrollY <= 600 && this.state.isFixed) {
            this.setState({isFixed:false});
        }
    };


  render() {
    return (
      <div className={this.state.isFixed ? 'HeaderFixed' : 'Header'}>
        <header>React aplication</header>
      </div>
    );
  }
}

export default Header;