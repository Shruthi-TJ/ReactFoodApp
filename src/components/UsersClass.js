import React from "react"
class UsersClass extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count:0,
            count1:1
        };
        console.log(this.props.name + "Child constructor")
    }
    componentDidMount(){
        console.log(this.props.name + "Child Mount")
    }
    render(){
        console.log(this.props.name + "Child Render")
        const {name, location} = this.props
        const {count, count1} = this.state
        return(
            <div>
                <p>{count}</p>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>Count Increase</button>
                <p>{count1}</p>
                <h1>NameClass - {name}</h1>
                <h2>LocationClass - {location}</h2>
            </div>
            
        )
    }
}

export default UsersClass