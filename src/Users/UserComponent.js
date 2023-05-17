import React from "react";
import UserService from "./UserService";
import './UserComponent.css';

class UserComponent extends React.Component{


    constructor(props){
        super(props)

        this.state = {


            users: []

        }

    }

    componentDidMount(){

        UserService.getUsers().then((response)=>{
            this.setState({users: response.data})
        });

    }

    render(){

        return(

            <div>

                <table className="userTable">

                    <tbody>
                        {
                            this.state.users.map(
                                user=>
                                <tr key = {user.id}>
                                    <td id="userTable_userName">{user.userName}</td>
                                    <td id="userTable_userImage"><img id="profileImage" src={user.image} width={40} height={40} alt='Profile Image'></img></td>
                                    
                                </tr>
                                
                            )
                            
                        }
 
                    </tbody>

                </table>

            </div>


        )


    }


}

export default UserComponent;