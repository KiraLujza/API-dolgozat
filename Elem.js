export default class Elem{
#obj = {}
#pElem
#index
    constructor(obj,pElem){
        this.#obj = obj,
        this.#pElem = pElem;
        this.megjelenit();
        this.OKgomb = this.#pElem.querySelector(".elem:last-child #gomba");
        this.inputElem = this.#pElem.querySelector(".elem:last-child #input");
        this.ok();
        
      
    }
    megjelenit(){
        let html = ` <div class="elem"> 
         <h3>Gépeld be a megfelelő alakot!</h3>
         ${this.#obj.mondat}
            <ul>
                <li>${this.#obj.valasztas[0]}</li>
                <li>${this.#obj.valasztas[1]}</li>
                <li>${this.#obj.valasztas[2]}</li>
                <li>${this.#obj.valasztas[3]}</li>
            </ul>
        <p>(${this.#obj.alap})</p>
         <input type="text" id="input">
        <button id="gomba">OK</button>   
                    </div> `
       
         this.#pElem.insertAdjacentHTML("beforeend", html);
         
         
    }
    ok() {
        this.OKgomb.addEventListener("click", () => {
          const userInput = this.inputElem.value.trim();
          const isCorrect = userInput === this.#obj.valasztas[0];
          const event = new CustomEvent("ok", { detail: isCorrect });
          window.dispatchEvent(event);
        });
      }
    
}