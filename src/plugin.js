const OlaMundo = {}

OlaMundo.install = function (Vue, options) {
  Vue.ola = () => {
    console.log('Olá  mundo do Vue com método global')
  }

  Vue.prototype.$ola = (options) => {
    console.log('Olá mundo do Vue com método de instância')
  }

  Vue.directive('ola', {
    bind (el, binding, vnode, oldVnode) {
      el.innerHTML = 'texto do plugin'
    }
  })

  Vue.mixin({
    created: () => {
      console.log('created executado pelo plugin')
    }
  })
}

export default OlaMundo