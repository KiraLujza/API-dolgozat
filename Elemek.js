import Elem from "./Elem.js";

export default class Elemek{
    #lista = []
    #pElem
    constructor(lista,pElem){
        this.#lista = lista;
        this.#pElem = pElem; 
        this.megjelenit()
    }

    megjelenit(){
        this.#pElem.innerHTML = "";
        for (let index = 2; index < this.#lista.length; index++) {
          const element = this.#lista[index];
          new Elem(element,this.#pElem);
        }
   }
   okEvent() {
    window.addEventListener("ok", (event) => {
        
      this.#lista[event.detail].state = true;
      this.megjelenit()
      console.log(this.#lista)
    });
  }
}