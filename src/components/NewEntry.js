import React, { Component } from "react";
import {useParams} from "react-router-dom";

// function getId() {
//     let {id}  = useParams();
//     return id
// }
export default class NewEntry extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            errorMessage: "",
            category: ""
        }
    }
    // executes after render: set the state here
    componentDidMount(){
        let { id } = this.props.match.params;
        let category = this.props.categories[id]
        if(!category){
            return this.setState({errorMessage: "Invalid Category"})
        }else {
            return this.setState({category})
        }
    }

    render() {
        const {errorMessage, category} = this.state
        return (
            <div>
                {errorMessage}
                {/* conditionally render content baserd on category value */}
                {category &&
                // <div>
                    <h1> Make an Entry to {category} Category </h1>
                //     {/* <EntryForm /> */}
                // <div>
                }
            </div>
        )
    }
}