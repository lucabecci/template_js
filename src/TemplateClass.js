const templatesList = require("./TemplateTypes")

class TemplateClass {
  #global_file = null
  #global_libraries = null
  #template =  null
  constructor(){
    this.#template = null   
  }
  init(template = null){
    if(!template) {
      global.error = {error: true, message: "Invalid template"}
      return 
    }
    this.#template = template 
  }
  create(){
    for (t of templatesList) {
    }
  }

  select(){
    for
  }
}
