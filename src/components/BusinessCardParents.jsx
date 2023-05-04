import React from "react";
import BusinessCardDisplay from "./BusinessCardDisplay";
import BusinessCardForm from "./BusinessCardForm";


export default class BusinessCardParent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            editNode: false

        }
    }


    updateName = (newName) =>  {
        this.setState({
            name: newName
        });
    }

    updateEmail = (newEmail) =>  {
        this.setState({
            email: newEmail
        });
    }

    updateState = (stateKey, newValue) => {
        this.state({
            [stateKey]: newValue

        });
    }

    render() {
        if (this.state.editNode){
            // show the form
            return(
                <div>
                    Show the form here Too!!
                </div>
            );
        
        }  else{
                // show the read opnly data
                return (
                    <div>
                    <BusinessCardDisplay name ={this.state.name}  email={this.state.email}/>
                    <button onClick={toggleEditMode}></button>
                    </div>
                );
        }
    }
}