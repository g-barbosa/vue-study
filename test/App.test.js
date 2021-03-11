//import test from 'ava'
//import App from './../src/App.vue'
//import { mount } from 'avoriaz'
const test = require('ava')
const App = require('./../src/App.vue')
const mount = require('avoriaz')

var componente = mount.mount(App.default)
console.log(componente)
test('total sendo iniciado com valor 0', t => {
  t.is( componente.data().total, 0 )
})

test('subtraindo um numero do total', t => {
  let button = componente.find('button')[0]
  button.trigger('click')
  t.is( componente.data().total, -1 )
})

test('somando um numero do total', t => {
  let button = componente.find('button')[1]
  button.trigger('click')
  t.is( componente.data().total, 1 )
})