import React ,{ Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

class Index extends Component{
    constructor(props){
        super(props);
        this.state ={student:[]};
    }
    componentDidMount(){
        axios.get('http://localhost:4000/student')
        .then(response=>{
            this.setState({student:response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }
    tabRow(){
        return this.state.student.map(function(object,i){
            return <TableRow obj={object} key={i} />;
        });
    }
    render(){
        return(
            <div>
                <h3 align="center">Student List</h3>
                <table className="table table-striped" style={{ marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Person</th>
                            <th>Items</th>
                            <th>Mobile No</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Index