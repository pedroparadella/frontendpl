import React from 'react'
import reactDom from 'react-dom'
import App from './App'



const app = App()
const elemento = document.querySelector('#root')
reactDom.render(app, elemento)