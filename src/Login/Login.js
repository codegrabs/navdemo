import React, { Component } from 'react';
import { Text, View , Button } from 'react-native';
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

    render(){
        return (

            <View>
                <Text>Milk process {this.props.milk}</Text>
                <Button title="ADD MILK" onPress={this.addMilk} />
                <Button title="REMOVE MILK" onPress={this.removeMilk} />

                <Text>Curd process {this.props.curd}</Text>
                <Button title="ADD Curd" onPress={this.addCurd} />
                <Button title="REMOVE Curd" onPress={this.removeCurd} />
                <Button title="Clear Curd" onPress={()=>{this.props.clear_curd()}} />


                <Button title="Go to details page" onPress={()=>{
                    this.props.navigation.navigate("Details")
                }} />
            </View>
        );
    }
}

const mapStateToProps=(state)=>({
    milk:state.milk,
    curd:state.curd
})

const mapDispatchToProps=(dispatch)=>({
    add_milk:(value)=>dispatch({type:'add_milk'}),
    remove_milk:(value)=>dispatch({type:'remove_milk'}),
    add_curd:(value)=>dispatch({type:'add_curd',value:value}),
    remove_curd:(value)=>dispatch({type:'remove_curd'}),
    clear_curd:(value)=>dispatch({type:'clean_curd'}),
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);
