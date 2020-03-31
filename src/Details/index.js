import React from 'react';
import { Text, View } from 'react-native';
import { connect } from "react-redux";
const Details = (props) => (
    <View>
        <Text>Details</Text>
<Text>milk {props.milk}</Text>
<Text>curd {props.curd}</Text>
    </View>
);

const mapStateToProps=(state)=>{
    // console.log('state: ',state);
    return ({
    milk:state.milk,
    curd:state.curd
})
}

export default connect(mapStateToProps)(Details);
