import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Card, ListItem, Button, Icon, SearchBar } from 'react-native-elements';

// import Header Component
import Header1 from './Header'

export default class RecipesDetails extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            foodListDetails : []
        };
    }


     async componentDidMount() {
        const key = this.props.navigation.getParam('itemId');
        console.log('key id------>', key)
        const data = await fetch(`https://www.food2fork.com/api/get?key=5cb0e281cef3688d9a2628eb7e16df17&rId=${key}`)
        const body = await data.json()
        console.log('body Details---->', body)
        console.log('length of the result from the API dans page RecipesDetails: ',body.recipe.length)
        
        this.setState({
            foodListDetails:  body.recipe
        })
        console.log('this.state.foodList dans page RecipesDetails------->', this.state.foodList)
    }

    render(){
        return(
            <View style={{ flex: 1}}>
            <Header1/>

                <View style={{ flex: 1}}>
                    <Text style={styles.title}>{this.state.foodListDetails.title}</Text>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{ uri: this.state.foodListDetails.image_url}}
                        />
                    <ScrollView style={{flex:1}}
                    contentContainerStyle={{justifyContent:'center',alignItems:'center'}}>
                    <View className='backgroundIngredients' style={styles.backgroundIngredients}>
                        <Text style={styles.h2}>Ingrédients</Text>
                    </View>
                    <View className='backgroundIngredientsDescription' style={styles.backgroundIngredientsDescription}>
                        <Text style={styles.name}>{this.state.foodListDetails.ingredients}</Text>
                        <Text style={styles.infos}>By {this.state.foodListDetails.publisher}</Text>
                        <Text style={styles.infos}>Rank : {this.state.foodListDetails.social_rank}</Text>
                        <Text style={styles.source}>{this.state.foodListDetails.source_url}</Text>
                    </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title : {
        fontSize : 22,
        fontWeight : '400',
        color : 'black',
        textAlign : 'center',
        marginTop : 30,
        marginBottom : 30
    },
    View : {
        alignItems : 'center',
        justifyContent : 'center',
    },
    image : {
        width : '100%',
        height : 200,
        paddingBottom : 10
    },
    h2 : {
        fontSize : 22,
        color : '#fff',
        textAlign : 'center',
        paddingTop : 10
    },
    name : {
        textAlign : 'center',
        fontSize : 18,
        margin : 20,
        color : '#fff'
    },
    buttonHome : {
        width : 90,
    },
    backgroundIngredients : {
        backgroundColor : '#FF2E00',
        width : '100%',
        height : 50
    },
    backgroundIngredientsDescription : {
        backgroundColor : '#5d5d5d',
        width : '100%',
        alignItems : 'center',
        justifyContent : 'center'
    },
    infos : {
        textAlign : 'center',
        fontSize : 14,
        color : '#c9d1d3'
    },
    source : {
        textAlign : 'center',
        fontSize : 12,
        color : '#c9d1d3',
        marginTop : 10,
        marginBottom : 10
    }
})