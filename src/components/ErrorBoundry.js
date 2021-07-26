import React, { Component } from 'react';

class ErrorBoundry extends Component {
   
//    Build the error state condition
    constructor(props) {
       super(props);
       this.state = {
           hasError: false,
        }
   }
//    if this method has trigged, then it must set the state 
   componentDidCatch(error, info){
       this.setState({ hasError: true })
   }
//    Look the code, if find an error, then should return an error message to the user 
    render() {
        const {hasError} = this.state;
        if(hasError){
        return (
            <div>
                <h1>Wow... something wrong happened!!</h1>                
            </div>
        );}
        // if cannot catch any error return the children (doens't matter what this children is)
        return this.props.children;
    }
}

export default ErrorBoundry;