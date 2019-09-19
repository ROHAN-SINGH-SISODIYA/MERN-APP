import React ,{ Component } from 'react';
import axios from 'axios';

class Create extends Component{
    constructor(props){
        super(props);
        this.onChangePersonName=this.onChangePersonName.bind(this);
        this.onChangeItemName=this.onChangeItemName.bind(this);
        this.onChangeMobileNo=this.onChangeMobileNo.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        
        this.state={
            person_name:'',
            Item_name:'',
            MobileNo:''
        }

    }

    onChangePersonName(e){
        this.setState({
            person_name:e.target.value
        })
    }

    onChangeItemName(e){
        this.setState({
            Item_name:e.target.value
        })
    }

    onChangeMobileNo(e){
        this.setState({
            MobileNo:e.target.value
        })
    }
    
    onSubmit(e)
    {
        e.preventDefault();
        console.log(`The values are ${this.state.person_name}, ${this.state.Item_name}, and ${this.state.MobileNo}`)
        const obj ={
            person_name:this.state.person_name,
            Item_name:this.state.Item_name,
            MobileNo:this.state.MobileNo
        };
        axios.post('http://localhost:4000/student/add',obj)
        .then(res=>console.log(res.data));
        
        this.setState({
            person_name:'',
            Item_name:'',
            MobileNo:''
        })
    }

    render(){
        return(
            <div style={{marginTop: 10}}>
                <h3>Add New Item</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Person Name:  </label>
                        <input
                         type="text"
                         className="form-control"
                         value={this.state.person_name}
                         onChange={this.onChangePersonName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Item Name: </label>
                        <input
                         type="text"
                         className="form-control"
                         value={this.state.Item_name}
                         onChange={this.onChangeItemName}
                         />
                    </div>
                    <div className="form-group">
                        <label>Mobile Number: </label>
                        <input 
                         type="text"
                         className="form-control"
                         value={this.state.MobileNo}
                         onChange={this.onChangeMobileNo}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}
export default Create