import React from 'react';
import { View } from 'react-native';

import { Icon } from 'react-native-elements';
import { Root } from 'react-native-tree-view';

class App extends React.Component {

  Icon(color= 'red') {
    return (
      <Icon
        color={color}
        name='person'/>
    )
  }
  render() {
    return (
      <View>
        <Root childNodes={[
          {
            name: 'React Team',
            opened: true ,
            childNodes: [
              {
                name: 'Team Leader',
                icon: this.Icon('#c3352c'),
                onLongPress: () => {console.log("nabıyon yaa")},
                childNodes: [
                  { name: 'Abdurrahman EKER',
                    icon: this.Icon('#45a5c9'),
                  },
                ]
              },
              {
                name: 'Developers',
                icon: this.Icon('#f8bc40'),
                childNodes: [
                  {
                    name: 'Kübra TURAN' ,
                    icon: this.Icon('#45a5c9'),
                  },
                  {
                    name: 'Reyhan ÜNAL' ,
                    icon: this.Icon('#45a5c9'),
                  },
                  {
                    name: 'Hamza Kürşat ŞİMŞEK' ,
                    icon: this.Icon('#45a5c9'),
                  },
                  {
                    name: 'Osman PEKAYDIN' ,
                    icon: this.Icon('#45a5c9'),
                  },
                  {
                    name: 'Aydın Emre ESEN(Yardımcı Talebe:))' ,
                    icon: this.Icon('#45a5c9'),
                  },
                ]
              },
            ]
          }
        ]}/>
      </View>
    )
  }
}

export default App;