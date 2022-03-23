import React , {Component} from "react"

class Test extends Component {
constructor (props){
    super(props)
    this.state={
        name:"unknown",
        counter: 0,
    };
} 
change = () =>this.setState(( this.state.name="unknown" ? { name: "Ela"} : { name:"unknown"}));
Plus =  () => this.setState({ counter: this.state.counter + 1 });
componentDidMount(){
    console.log("Hello didmount");
}
componentDidUpdate(){
    console.log("Hello update");
}
componentWillUnmount(){
    console.log("bye");
}
render(){
    console.log("Hello render");

    return(
        <div>
            <button onClick={this.change}>changer le nom</button>


         <h1>{this.state.name}</h1>
<button onClick={this.Plus}>+</button>
<h3>count:{this.state.counter}</h3>
{/* <button onClick={this.Minus}>-</button> */}


        </div>
    )
}
}
export default Test;