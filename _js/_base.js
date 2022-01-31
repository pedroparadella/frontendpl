/*
* Processo Seletivo Ímpar - Desafio Prático Front-end
* Candidato: ALESSANDRO SOARES DE LIMA
* Data: 28/01/2022
*/

const app = {};
(() => {
    app.log     = (data) => console.log(data);
    app.id      = (el) => document.getElementById(el);
    app.qs      = (el) => document.querySelector(el);
    app.qsAll   = (el) => document.querySelectorAll(el);
    app.event   = (el, ev, call) => el.addEventListener(ev, call, false);
    app.click   = (el, call) => app.event(el, "click", call);
    app.mouseover = (el, call) => app.event(el, "mouseover", call);
    app.mouseout = (el, call) => app.event(el, "mouseout", call);

    app.get = (url, call) => {
        app.app_get(url).then(data => {
            call(data);
        });
    }

    app.app_get = async (url) => {
        const res = await fetch(url, {cache: "no-cache", credentials: "same-origin"});
        const data = await res.text();
        return { data: data, status:res.status};
    }
})();