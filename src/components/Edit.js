import React ,{ Component } from 'react';
import axios from 'axios';
class Edit extends Component{
    constructor(props){
        super(props);
        this.onChangePersonName =this.onChangePersonName.bind(this);
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeMobileNo=this.onChangeMobileNo.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            person_name:'',
            Item_name:'',
            MobileNo:''
        }
    }
    componentDidMount(){
        axios.get('http://localhost:4000/student/edit/'+this.props.match.params.id)
        .then(response=>{
            this.setState({
                person_name:response.data.person_name,
                Item_name:response.data.Item_name,
                MobileNo:response.data.MobileNo
            });
        })
        .catch(function(error){
            console.log(error);
        })
    }
    onChangePersonName(e){
        this.setState({
            person_name:e.target.value
        });
    }
    onChangeItemName(e){
        this.setState({
            Item_name:e.target.value
        });
    }
    onChangeMobileNo(e){
        this.setState({
            MobileNo:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            person_name:this.state.person_name,
            Item_name:this.state.Item_name,
            MobileNo:this.state.MobileNo
        };
        axios.post('http://localhost:4000/student/update/'+this.props.match.params.id,obj)
        .then(res=>console.log(res.data));

        this.props.history.push('/index');
    }
    render(){
        return(
            <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Item_name}
                      onChange={this.onChangeItemName}
                      />
                </div>
                <div className="form-group">
                    <label>GST Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.MobileNo}
                      onChange={this.onChangeMobileNo}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
        );
    }
}
export default Edit