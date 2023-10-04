import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:20,
  },
  container: {
    paddingBottom:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagelocale:{
     width: 200,
      height: 110 ,
      marginTop:100,
      marginBottom:20,},

  textInput: {
    width: 200,
    height: 40,
    borderWidth: 1,
    marginBottom:20,
    borderColor: '#5D3FD3',
    borderRadius: 20, 
    paddingLeft: 10, 
  },
  button: {
    backgroundColor: '#5D3FD3', // Change to your desired button background color
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Change to your desired text color
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonContainer: {
    
    position: 'absolute',
    top: 10, // Adjust this value to control the vertical positioning
    right: 10, // Adjust this value to control the horizontal positioning
    padding: 10,
    borderRadius: 5,
    
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Grey overlay with 50% opacity
    justifyContent: 'center',
    alignItems: 'center',
  },
centeredView: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
modalView: {
backgroundColor: 'white',
borderRadius: 10,
padding: 20,
alignItems: 'center',
},
textPopUp:{
    fontSize: 20,
    marginTop:50,
    marginBottom:20
},

});