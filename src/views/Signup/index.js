import React, { Component } from 'react';
import { Text, View , Button, AsyncStorage,SafeAreaView,TextInput} from 'react-native';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state={
        form:{
            email:'',
            password:'',
            cpassword:'',
            name:'',
            mobile:'',
        },
        submitButton:true,
    }
  }
  loginMe=()=>{
    let form=this.state.form;
    console.log('form: ',form);
    // return true;
    if(form.email!='' && form.password!=''){
        // this.props.make_login();
        // call api
        alert('successfull register');

        AsyncStorage.setItem('islogin','1').then(v=>{
            console.log('v: ',v);
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

  render() {
    return (
      <View>
            <TextInput onChangeText={(v)=>{
                    this.updateForm(v,'name')
                }} 
                placeholder="please enter name"
                style={{color:'black',fontSize:22,backgroundColor:'pink',width:'80%',marginVertical:10}}
                onSubmitEditing={()=>{
                    this.emailRef.focus();
                }}
                />
               
            <TextInput onChangeText={(v)=>{
                    this.updateForm(v,'email')
                }} 
                placeholder="email"
                style={{color:'black',fontSize:22,backgroundColor:'pink',width:'80%'}}
                keyboardType="email-address"
                ref={this.emailRef}
                onSubmitEditing={()=>{
                    this.passwordRef.focus();
                }}
                />
                <TextInput onChangeText={(v)=>{
                    this.updateForm(v,'password')
                }} 
                placeholder="password"
                style={{color:'black',fontSize:22,backgroundColor:'pink',width:'80%',marginVertical:30}}
                secureTextEntry={true}
                ref={this.passwordRef}

                />
                <TextInput onChangeText={(v)=>{
                    this.updateForm(v,'cpassword')
                }} 
                placeholder="confirm password"
                style={{color:'black',fontSize:22,backgroundColor:'pink',width:'80%',marginVertical:0}}
                secureTextEntry={true}
                />
                   <TextInput onChangeText={(v)=>{
                    this.updateForm(v,'mobile')
                }} 
                placeholder="mobile"
                style={{color:'black',fontSize:22,backgroundColor:'pink',width:'80%',marginVertical:10}}
                keyboardType="numeric"
                onSubmitEditing={()=>{
                    this.loginMe();
                }}
                />
                <Button style={{fontSize:23,paddingVerticle:10}} disabled={this.state.submitButton} title="Register" onPress={this.loginMe} />
      </View>
    );
  }
}
