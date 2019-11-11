import React from 'react';
import { Icon, Input, Header, ListItem} from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class Header1 extends React.Component {
  constructor(props){
    super(props);
    };


  render(){


    return (
      <Header
        leftComponent={<Icon fontSize={36} color="white" name='menu' />}
        centerComponent={{text: "Les Recettes de Génie", style: {color: '#fff', fontSize: 18}}}
        rightComponent={{ icon: 'share', color: '#fff' }}
        backgroundColor="#FF2E00"
      >
      </Header>
  );
 }
}
export default withNavigation(Header1);