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
      const { index, isCorrect } = event.detail;
      this.#lista[index].state = isCorrect;
      if (this.#lista[index].state = isCorrect){
        this.#pElem.innerHTML += "<p>✅</p>";
      }else{
        this.#pElem.innerHTML += "<p>❌</p>";
      }
      this.megjelenit();
      console.log(this.#lista);
    });
  }
  
}