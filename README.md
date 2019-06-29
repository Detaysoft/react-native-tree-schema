# react-native-tree-schema
Tree component for React Native apps.

![native-tree](https://user-images.githubusercontent.com/30048977/60381527-dacd4600-9a5e-11e9-8305-69bbd305c5e7.gif)
# Install

```javascript

npm install react-native-tree-schema

```
# Architecture
![image (1)](https://user-images.githubusercontent.com/30048977/56694176-cd0de400-66ee-11e9-9984-6ef9846e7090.png)

# Components

## Root Component

```javascript
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
                onLongPress: () => {console.log("React is wonderful :) ")},
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
```
#### Root props
| prop | default | type | description |
| ---- | ---- | ---- | ---- |
| name | none | string | Node title |
| childNodes | none | array | Node items |
| opened | false | boolean | visible nodes of the noden  |
| icon | none | object | icon of node |
| onPress | none | function | Node on press |
| onLongPress | none | function | Node on long press |


### Child Node Item
| prop | default | type | description |
| ---- | ---- | ---- | ---- |
| name | none | string | Node title |
| childNodes | none | array | Node items |
| opened | false | boolean | visible nodes of the noden  |
| icon | none | object | icon of node |
| onPress | none | function | Node on press |
| onLongPress | none | function | Node on long press |
