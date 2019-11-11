import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { Button } from 'react-native-elements';

export default class Home extends React.Component{
    render(){
        return(
            <ImageBackground source={require('../assets/burgers.jpg')} style={{width: '100%', height: '100%',flex:1}}>
                <View style={{
                    alignItems : 'center',
                    justifyContent : 'center',

                }}>
                    <View className="homeTitle" style={styles.homeTitle}>
                        <Text className="homeText" style={styles.homeText}>Les Recettes de Génie</Text>
                    <Button
                    style={styles.buttonHome}
                        title="C'est parti !"
                        color = '#fff'
                        buttonStyle = {
                            {
                                backgroundColor: '#FF2E00',
                                borderRadius : 5
                            }
                        }
                        onPress={() => this.props.navigation.navigate('Recipes')}
                    />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({

    homeTitle : {
        alignItems : 'center',
        justifyContent : 'center',
        height : '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.70)',
        width : '100%',
    },
    homeText : {
        color : '#fff',
        fontWeight : '500',
        fontSize : 30,
        fontStyle : 'italic',
        marginBottom : 40
    },
    buttonHome : {
        width : 230
    }

})