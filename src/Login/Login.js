import React, { Component } from 'react';
import { Text, View , Button, AsyncStorage } from 'react-native';
import {connect} from "react-redux";

class Login extends Component{
    constructor(props){
        super(props);
        // this.state={
        //     movieList:[],
        // }
    }
    addMilk=()=>{
        this.props.add_milk();
        // this.setState({milk:this.state.milk+1})
    }
    removeMilk=()=>{
        this.props.remove_milk();
        // this.setState({milk:this.state.milk-1})
    }
    addCurd=()=>{
        this.props.add_curd(3);
        // this.setState({Curd:this.state.Curd+1})
    }
    removeCurd=()=>{
        this.props.remove_curd();
        // this.setState({milk:this.state.milk-1})
    }

    loginMe=()=>{
        this.props.make_login();
        AsyncStorage.setItem('islogin','1').then(v=>{
            console.log('v: ',v);
        // this.props.navigation.navigate("Home");
            
        }).catch(err=>console.error('err: ',err)
        )
    }

    render(){
        return (

            <View>
                <Button title="Login" onPress={this.loginMe} />
            </View>
        );
    }
}

const mapStateToProps=(state)=>({
    islogin:state.islogin
})

const mapDispatchToProps=(dispatch)=>({
    make_login:(value)=>dispatch({type:'make_login'}),
    // add_milk:(value)=>dispatch({type:'add_milk'}),
    // remove_milk:(value)=>dispatch({type:'remove_milk'}),
    // add_curd:(value)=>dispatch({type:'add_curd',value:value}),
    // remove_curd:(value)=>dispatch({type:'remove_curd'}),
    // clear_curd:(value)=>dispatch({type:'clean_curd'}),
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);
