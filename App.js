import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/Store/store';
import { init } from './src/SQLite';
import { useEffect } from 'react';


export default function App() {
  
  // ESTE USE EFFECT SE SE GENERA AL PRINCIPIO
  useEffect(()=> {   
    init()
      .then((result)=> { 
        console.log(result);
      })
      .catch(err => { 
        console.log(err.message);
    })
  }, [])
  
  const [fontsLoaded] = useFonts({
    'Josefin': require('./src/Assets/Fonts/Josefin_Sans/JosefinSans-Regular.ttf'), 
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Navigator/>
      
    </Provider>
  );
}