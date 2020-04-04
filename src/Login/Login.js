import React, { Component } from 'react';
import { Text, View , Button,TextInput, AsyncStorage,SafeAreaView} from 'react-native';
import {connect} from "react-redux";

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            form:{
                email:'',
                password:''
            },
            submitButton:true,
        }
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
        let form=this.state.form;
        console.log('form: ',form);
        // return true;
        if(form.email!='' && form.password!=''){
            this.props.make_login();
            AsyncStorage.setItem('islogin','1').then(v=>{
                console.log('v: ',v);
            // this.props.navigation.navigate("Home");
                
            }).catch(err=>console.error('err: ',err)
            )
        }else{
            alert('please enter correct value');

        }

        
    }
    updateForm=(v,filed)=>{
            let form=this.state.form;
            form[filed]=v;
            let submitButton=false;
            Object.entries(form).forEach(
                ([key, value]) => {
                    if(value==''){
                        submitButton=true;
                    }
                }
            );

            this.setState({form,submitButton});

    }

    render(){
        return (
            <SafeAreaView>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <TextInput onChangeText={(v)=>{
                    this.updateForm(v,'email')
                }} 
                placeholder="email"
                style={{color:'black',fontSize:22,backgroundColor:'pink',width:'80%'}}
                />
                <TextInput onChangeText={(v)=>{
                    this.updateForm(v,'password')
                }} 
                placeholder="password"
                style={{color:'black',fontSize:22,backgroundColor:'pink',width:'80%',marginVertical:30}}
                secureTextEntry={true}
                />
                <Button style={{fontSize:23,paddingVerticle:10}} disabled={this.state.submitButton} title="Login" onPress={this.loginMe} />

                <Button style={{fontSize:23,paddingVerticle:10}}  title="Register" onPress={()=>{
                    this.props.navigation.navigate('Signup')
                }} />

            </View>
            </SafeAreaView>
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
