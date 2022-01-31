/*
* Processo Seletivo Ímpar - Desafio Prático Front-end
* Candidato: ALESSANDRO SOARES DE LIMA
* Data: 30/01/2022
*/
/*
* Ger data of weather and render popup show mouseover
*/
let weather = {};
weather.token = "42d3ee999bc4bb80cb7bf566e5f763ce";
weather.city = "São Paulo";
weather.state = "BR-SP";
weather.url_base = "http://api.openweathermap.org/data/2.5/weather?q=";

weather.get_temperature = () => {
    app.get(`${weather.url_base}${weather.city},${weather.state}&units=metric&lang=pt_br&appid=${weather.token}`, (data) => {
        if (data.status === 200)
            weather.render_popup(JSON.parse(data.data));
    });
}

weather.render_popup = (data) => {
    let html = `<section class="popup_weather">
                    <header>
                        <h1>${data.name}</h1>
                        <p id="wt_country"></p>
                    </header>
                    <div class="content">
                        <img id="wt_icon_weather" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                        <p class="description">${data.weather[0].description}</p>
                        <h2 class="temp"><strong>${data.main.temp}º</strong> <span>Hoje</span></h2>
                        <p class="min_max"><i class="fas fa-caret-down"></i><span>${data.main.temp_min}º</span> <i class="fas fa-caret-up"></i><span>${data.main.temp_max}º</span></p>
                    </div>
                </section>`;
    app.id('main').insertAdjacentHTML("beforeend", html);

    app.mouseover(app.qs('.weather i'), (el) => {
        app.qs('.popup_weather').style.display = 'flex';
    });

    app.mouseout(app.qs('.weather i'), (el) => {
        app.qs('.popup_weather').style.display = 'none';
    });
};

weather.init = () => {
    weather.get_temperature();
};

