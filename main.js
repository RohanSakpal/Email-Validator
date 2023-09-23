let resultCont = document.getElementById('resultCont');
let submitBtn = document.getElementById('submitBtn');



submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let key = 'ema_live_rohanmmVS9vhffoNUxpvpP7hqKZu04vdfIngm9QSY8Wsakpal40';
    let email = document.getElementById("username").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

    let res = await fetch(url);
    let result = await res.json();

    let str = ``;
    for (key of Object.keys(result)) {
        str = str + `<div>${key}: ${result[key]}</div>`
    }

    resultCont.innerHTML = str;
})