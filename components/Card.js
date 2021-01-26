import React from 'react';
import {View, StyleSheet} from 'react-native';
const Card = props => {
    return(
    <View style={{...styles.card1,...props.style}}>{props.childern}</View>
    );
};
const styles = StyleSheet.create({
    card1:{
        elevation:5,
        backgroundColor:'#ffffff',
        padding:20,
        borderRadius:10
    }
});
export default Card; 