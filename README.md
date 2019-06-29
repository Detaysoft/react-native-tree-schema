# react-native-tree-schema
Tree component for React.js apps.

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
import React from 'react'
import Root from 'react-tree-schema'

const Tree = () => (
  <Root childNodes={[
    { 
      name: 'React Team',
      opened: true ,
      childNodes: [
        { 
          name: 'Team Leader', 
          childNodes: [
            { name: 'Abdurrahman EKER' },
          ]
        },
        {
          name: 'Developers', 
          childNodes: [
            { name: 'Kübra TURAN' },
            { name: 'Reyhan ÜNAL' },
            { name: 'Osman PEKAYDIN' },
          ]
        },
      ]
    }
  ]}/>
)
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
