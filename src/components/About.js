import { Component } from "react"
import Users from "./Users"
import UsersClass from "./UsersClass"
import React from "react"
class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent Constructor")
    }
    componentDidMount(){
        console.log("Parent Mount")
    }
    render(){
        console.log("Parent Render")
        return(
            <div>
                <h1>This is about us</h1>
                {/**<Users name={"Shruthi TJ"} location={"Mysore"}/>*/}
                <UsersClass name={"First  child"}  location={"first"}/>
                <UsersClass name={"Second child"}  location={"second"}/>
            </div>
        )
    }
}
export default About