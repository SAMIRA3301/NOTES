const input1 = document.getElementById("input_1")
const btn1 = document.getElementById("button_1")
const list = document.getElementById("lists")

btn1.onclick = function () {
    if (!input1.value) {
        return
    }
    // list.innerHTML =
    list.insertAdjacentHTML("beforeend",
         `            
        <li id="list_el">
            <span id="title_res">${input1.value}</span>
            <div id="list">
                <button id="btn_ok">ok</button>
                <button  id="btn_no">del</button>
            </div>
        </li>`
    )
    input1.value=''
}

