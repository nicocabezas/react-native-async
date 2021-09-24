import React from "react";
import { Text, View, FlatList } from 'react-native'

class App extends React.Component {
  constructor() 
  {
    super();
    this.state ={
      data: []
    }
  }

  componentDidMount() {
    this.apiCall();
  }
  async apiCall() 
  {
    let resp =await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
    let respJson= await resp.json()
    //console.warn(respJson)
    this.setState({data:respJson.results})
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 50, padding: 50, backgroundColor:'red' }}>API POKEMON</Text>
        <FlatList
        data={this.state.data}
        renderItem={({item}) =>
        <Text style= {{fontSize: 20, backgroundColor: 'yellow', margin:5}}>{item.name}</Text>
      }
        />
      </View>
    )
  }
}

export default App;