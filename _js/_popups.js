/*
* Processo Seletivo Ímpar - Desafio Prático Front-end
* Candidato: ALESSANDRO SOARES DE LIMA
* Data: 30/01/2022
*/
/*
* Render popup and add events
*/
app.render_popup_new_edit = () => {
    let html = `<div id="popup_new_edit">
    <div class="layer"></div>
    <section class="popup_new_card">
        <div class="content">
            <header>
                <img src="_imgs/icone_criar.png">
                <span>Criar card</span>
            </header>
            <form>
                <div class="label_input">
                    <label>DIGITE UM NOME PARA O CARD</label>
                    <input type="text" class="input" placeholder="Digite o título"/>
                </div>
                <div class="label_input btn_inside_input">
                    <label>INCLUA UMA IMAGEM PARA APARECER NO CARD</label>
                    <input type="text" class="input" placeholder="Nenhum arquivo selecionado">
                    <button id="choose_file" class="btn btn_new_card">Escolher arquivo</button>
                </div>
                <div class="container_bt">
                    <button id="btn_send_new_card" class="btn btn_new_card">Criar card</button>
                </div>
            </form>
            <p class="warning">Funcionalidade não implementada!</p>
        </div>
    </section>
</div>`;

    app.id('main').insertAdjacentHTML("beforeend", html);

    app.click(app.id('choose_file'), (ev) => {
        app.qs('#popup_new_edit').remove();
        ev.preventDefault();
    });
    app.click(app.id('btn_send_new_card'), (ev) => {
        app.qs('#popup_new_edit').remove();
        ev.preventDefault();
    });
};

app.render_popup_del = () => {
    let html = `<div id="popup_del">
                    <div class="layer"></div>
                    <section class="popup_del">
                        <div class="content">
                            <div class="close">X</div>
                            <div class="box_icon_popup">
                                <i class="far fa-trash-alt"></i>
                            </div>
                            <h2>Excluir</h2>
                            <p>CERTEZA QUE DESEJA EXCLUIR?</p>
                            <div class="container_bts">
                                <button class="btn_pooup" data-btn_popup_action="delete">Excluir</button>
                                <button class="btn_pooup" data-btn_popup_action="cancel">Cancelar</button>
                            </div>
                            <p class="warning">Funcionalidade não implementada!</p>
                        </div>
                    </section>
                </div>`;
    app.id('main').insertAdjacentHTML("beforeend", html);

    app.click(app.qs('#popup_del .close'), () => {
        console.log('Close');
        app.qs('#popup_del').remove();
    });

    app.click(app.qs('#popup_del [data-btn_popup_action="cancel"]'), () => {
        console.log('Close');
        app.qs('#popup_del').remove();
    });

    app.click(app.qs('#popup_del [data-btn_popup_action="delete"]'), () => {
        console.log('Close');
        app.qs('#popup_del').remove();
    });
};
