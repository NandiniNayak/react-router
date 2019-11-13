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
        let {id} = props.match.params;
        console.log(id);
    }
    // componentDidMount() {
    //     // console.log(this.props)
    //     const { id } = this.props.match.params
    //     console.log(id)
    // }

    render() {
        // let id = getId;
    
        return (
            <div>
                <h1> Make an Entry to Food Category </h1>
            </div>
        )
    }
}