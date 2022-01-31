/*
* Processo Seletivo Ímpar - Desafio Prático Front-end
* Candidato: ALESSANDRO SOARES DE LIMA
* Data: 30/01/2022
*/
/*
* Setpoints
*/
app.number_guess_max    = 16;
app.url_base_res        = `https://pokeapi.co/api/v2/`;
app.url_init_res        = `${app.url_base_res}pokemon?limit=${app.number_guess_max}&offset=0`;
//
app.urls_imgs           = {};
app.total_load_card     = 0;
app.container_card      = app.id('container_card');
/*
* Request data of API
* Check status
*/
app.get_request = (url_request, call) => {
    app.get(url_request, (data) => {
        if (data.status === 200) call(JSON.parse(data.data));
    });
};
/*
* Render item on HTML template box
* Add total_load_card to count itens
*/
app.render_box_init = (data) => {
    let html = `<div id="card_${data.id}" class="box_item">
                    <div class="box_img_card">
                         <img src="${app.urls_imgs[data.id][0]}">
                    </div>
                    <span class="line"></span>
                    <p class="text_box_item">${data.name}</p>
                         <div class="box_item_bts">
                              <button class="btn_box_card" data-btn_box_item="del"><img src="_imgs/icon-trash.png"> Excluir</button>
                              <button class="btn_box_card" data-btn_box_item="edit"><img src="_imgs/icon-edit.png"> Editar</button>
                         </div>
                </div>`;

    app.container_card.insertAdjacentHTML("beforeend", html);
    app.total_load_card++;
    app.id('total_load_card').innerHTML = app.total_load_card;
};
/*
* Process of data received API - id, name and images PokeAPI
* Add in object "data_render" and call fc render
*/
app.data_process = (data) => {
    let data_render = {},
        imgs = [];
    data_render.id = data.id;
    data_render.name = data.name;
    imgs.push(data.sprites.front_default);
    delete data.sprites.front_default;
    Object.values(data.sprites).forEach(el => {
        if (typeof (el) === 'string') imgs.push(el);
    });
    app.urls_imgs[data.id] = imgs;
    app.render_box_init(data_render);
}
/*
* Get PokeAPI data by ID
* Get url next loader pagination
*/
app.get_data_box_item = (data) => {
    let results = data.results;
    app.url_next = data.next;
    results.forEach(el => {
        app.get_request(el.url, (data) => {
            app.data_process(data);
        });
    });
};
/*
* Change images
* Trigger event on mouse hover on name pokemon
*/
app.change_imgs = (id) => {
    let imgs_number = app.urls_imgs[id].length,
        i = 0;
    app.time_change_img = setInterval(() => {
        app.qs(`#card_${id} img`).src = app.urls_imgs[id][i];
        i++;
        if (i >= imgs_number) i = 0;
    }, 1000);
}
/*
* Search pokemon by ID or name
*/
app.search = (data) => {
    app.get_request(`${app.url_base_res}pokemon/${data}`, (data) => {
        app.container_card.innerHTML = "";
        app.data_process(data);
    });
    app.total_load_card = 0;
    app.applied_query = true;
};
//
app.validate_search = (data) => {
    let is_number;
    if (data === "") return false;

    is_number = parseInt(data);
    if (typeof is_number === "number" && is_number > 0) {
        app.search(is_number);
        return false;
    }
    if (data.match(/^[A-Za-z]+$/) !== null) {
        app.search(data.toLowerCase());
        return false;
    }
};
/*
* Init request and add events
*/
app.init = () => {
    let url;
    app.get_request(app.url_init_res, (data) => {
        app.get_data_box_item(data);
    });

    app.click(app.id('btn_load_card'), () => {
        url = app.url_next;
        if (app.applied_query) {
            url = app.url_init_res;
            app.applied_query = false;
            app.total_load_card = 0;
            app.container_card.innerHTML = "";
        }
        app.get_request(url, (data) => {
            app.get_data_box_item(data);
        });
    });

    app.click(app.id('btn_search'), () => {
        app.validate_search(app.id('input_search').value);
    });

    app.click(app.id('btn_new_card'), (ev) => {
        app.render_popup_new_edit();
    });

    app.mouseover(app.container_card, (el) => {
        if (el.target.className === 'text_box_item') {
            app.change_imgs(el.target.parentNode.id.split('_')[1]);
        }
    });

    app.mouseout(app.container_card, (el) => {
        let id;
        if (el.target.className === 'text_box_item') {
            clearInterval(app.time_change_img);
            id = el.target.parentNode.id.split('_')[1];
            app.qs(`#card_${id} img`).src = app.urls_imgs[id][0];
        }
    });

    app.click(app.container_card, (el) => {
        if (el.target.className === 'btn_box_card') {
            if (el.target.dataset.btn_box_item === "del")
                app.render_popup_del();
            if (el.target.dataset.btn_box_item === "edit")
                app.render_popup_new_edit();
        }
    });

    weather.init();
};
app.init();