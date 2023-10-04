import axios from "axios";

export const fetchCharacterData = async (characterName) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${characterName}`
    );
    
    const character = response.data.results[0];
    return character;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return "Error API EndPoint ."
    } else {
      return "Error occurred while checking API status: " + error.message;
    }
  }
};
