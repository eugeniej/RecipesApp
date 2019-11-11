import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView  } from 'react-native';
import { Card, ListItem, Button, Icon, SearchBar } from 'react-native-elements';
import _ from 'lodash';

// import Header Component
import Header1 from './Header'


export default class Recipes extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            search: '',
            foodList : []
        };
    }
    
    async componentDidMount() {
    
    const data = await fetch(`https://www.food2fork.com/api/search?key=5cb0e281cef3688d9a2628eb7e16df17`)
    const body = await data.json()
    
    this.setState({
        foodList:  body.recipes
    })
  
}



updateSearch = text => {
    this.setState({ search : text ,});
    console.log('text', text)
};


clear = () => {
    this.state.search.clear();
  };


async SearchFilterFunction(text) {
const data = await fetch(`https://www.food2fork.com/api/search?key=5cb0e281cef3688d9a2628eb7e16df17`)
const body = await data.json()

this.setState({
    foodList:  body.recipes
})

//passing the inserted text in textinput
const newData = this.state.foodList.filter(function(item) {
//applying filter for the inserted text in search bar
const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
const textData = text.toUpperCase();
return itemData.indexOf(textData) > -1;
});

this.setState({
    foodList: newData,
    search:text,
});
}


render(){

const searchRecipes = this.state.search;
console.log('searchRecipes ---->',searchRecipes)

    return(
        <View style={{ flex: 1}}>
            <Header1/>

            <View style={styles.searchBar}>
                <SearchBar
                containerStyle={{
                    width : 340,
                    height : 60
                }}
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={this.state.search}
                
                />
                <Button
                color='#fff'
                buttonStyle = {
                    {
                        backgroundColor: '#5d5d5d',
                        height : 60
                    }
                }
                title='Ok' 
                onPress={()=> this.SearchFilterFunction(this.state.search)}/>
            </View>


            <ScrollView style={{flex:1}}
            contentContainerStyle={{justifyContent:'center',alignItems:'center'}}>
                {
                    this.state.foodList.map((item,i) => (
                        <Card
                        key={i}
                        style={styles.cardResult}>
                            <View>
                                <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={{ uri: item.image_url}}
                                />
                                <Text style={styles.name}>{item.title}</Text>
                                <Text style={styles.infos}>By {item.publisher}</Text>
                                <Text style={styles.infos}>Rank : {item.social_rank}</Text>
                    
                            </View>
                            <Button
                            color='#fff'
                            buttonStyle = {
                                {
                                    backgroundColor: '#e6a400',
                                    borderRadius : 5
                                }
                            }
                            title='Découvrir' 
                            onPress={() => this.props.navigation.navigate('RecipesDetails', {itemId : item.recipe_id})}/>
                        </Card>
                    ))
                }
            </ScrollView>
        </View>
    );
}
}

const styles = StyleSheet.create({
    searchBar : {
        flexDirection : 'row',
        width : '200%',
        backgroundColor : '#5d5d5d',
        height : 60
    },
    View : {
        alignItems : 'center',
        justifyContent : 'center',
    },
    image : {
        width : '100%',
        height : 150,
        marginBottom : 10
    },
    name : {
        textAlign : 'center',
        fontSize : 22,
        marginTop : 5,
        marginBottom : 10,
        color : '#5d5d5d'
    },
    buttonHome : {
        width : 90,
    },
    infos : {
        textAlign : 'center',
        fontSize : 14,
        color : '#c9d1d3',
        marginBottom : 10
    }
})