import { Component } from "react";
import { render } from "react-dom";

    class Record extends Component
    {
        constructor(props){
            super(props);
        }
        render(){
            return(
                    <table border={1}>
                        <thead>
                            <tr>
                                <td>id</td>
                                <td>name</td>
                                <td>email</td>
                                <td>password</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.props.record.map((val)=>{
                                    return(
                               
                                        <tr key={val}>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>{val.password}</td>
                                    </tr>
                                    )
                                })
                            }
                            </tbody>
                    </table>
            )
        }
    }


export default Record;