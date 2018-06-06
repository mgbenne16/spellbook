const app = {
  init: function() {
    const form = document.querySelector('form')
    form.addEventListener('submit', ev => {
      this.handleSubmit(ev)
    })
  },

  renderProperty: function(name, value) {
    const el = document.createElement('span')
    el.textContent = value
    el.classList.add(name)
    return el
  },

  renderItem: function(spell) {

    properties = Object.keys(spell)



    const childElements = properties.map(property => {
      return this.renderProperty(property, spell[property])
    })

    const item = document.createElement('li')
    item.classList.add('spell')


    childElements.forEach(el => {
      item.appendChild(el)
    })

    return item
  },

  handleSubmit: function(ev) {
    ev.preventDefault()

    const f = ev.target

    const spell = {
      name: f.spellName.value,
      level: f.level.value
    }

    const item = this.renderItem(spell)

    const list = document.querySelector('#spells')
    list.appendChild(item)

    f.reset()
  },
}

  var spells = {
    
    init: function (spellName, level) {
        this.spellName = spellName;
        this.level = level;
    },
    
    describe: function () {
        var description = this.spellName + " (" + this.level + ")";
        return description;
    }
  }  

app.init()
