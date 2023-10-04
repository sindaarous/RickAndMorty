// MyComponent.js
import React, { Component } from 'react';
import { View, TextInput ,TouchableOpacity,Text} from 'react-native';
import { styles } from '../style/style';
import { fetchCharacterData } from '../controller/fetchCharacter'; 
import Popup from './PopUpComponent'; 
class Action extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isPopupVisible:false,
      character:null,
      characterData:'',
      charactereName:'',
      characterImage:''
    };
  }
   renderImage = () => {
    if (this.state.characterImage.length!=0 && this.state.inputValue.length!=0 && this.state.characterData != null) {
return <Popup isVisible={this.isPopupVisible} onClose={this.togglePopup} imageLink={this.state.characterImage} nameCharactere= {this.state.charactereName}/>
    }else{
     console.log("error")
     }
  };
  handleButtonClick = async () => {
    try {
      character = await fetchCharacterData(this.state.inputValue);
    
      this.setState({ isPopupVisible:true  });
      this.setState({ characterData:character  });
      this.setState({ characterImage:character.image  });
      this.setState({ charactereName:character.name  });

     } catch (error) {
    }
  };
 togglePopup = () => {
    this.setState({ isPopupVisible:false  });
    this.setState({ characterImage:''  });
  };
  render() {
    return (
      <View>
        <TextInput
         style={styles.textInput}
          value={this.state.inputValue}
          onChangeText={(inputValue) => this.setState({ inputValue })}
          placeholder="Type a name here..."
        />
         <TouchableOpacity style={styles.button} onPress={this.handleButtonClick}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      {this.renderImage()}
      </View>
    );
  }
}

export default Action;
