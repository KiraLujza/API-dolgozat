export default class Elem{
#obj = {}
#pElem
#index
    constructor(obj,pElem){
        this.#obj = obj,
        this.#pElem = pElem;
        this.megjelenit();
        this.OKgomb = this.#pElem.querySelector(".elem:last-child #gomba");
        this.inputElem = this.#pElem.querySelector(".elem:last-child")
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
        console.log(this.#obj)
         this.#pElem.insertAdjacentHTML("beforeend", html);
         console.log(html)
         
    }
    ok(){
        this.OKgomb.addEventListener("click", () => {
            console.log(this.#index)
          const e = new CustomEvent("ok", { detail:jjj==ddd})
          window.dispatchEvent(e)
        })
      }
    
}