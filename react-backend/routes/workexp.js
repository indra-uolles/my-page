const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    return res.json([
        {
            dates: "Январь 2015 — по настоящее время",
            timeinterval: "2 года 5 месяцев",
            place: "Идинайди",
            placedetails: "Москва, www.idinaidi.ru",
            position: "фронтэнд-разработчик",
            duties: "<p>Участие в разработке веб-сервисов idinaidi.ru (недвижимость), komesto.ru (коммерческая недвижимость).</p><p>Основной стек: Ruby on Rails, SASS, CoffeeScript, клиентский фреймворк Pieces от Evil Martians, jQuery. Также работала с менеджером очередей Sidekiq и поисковым движком Elasticsearch.</p>"
        },
        {
            dates: "Январь 2015 — по настоящее время",
            timeinterval: "2 года 5 месяцев",
            place: "Идинайди!",
            placedetails: "Москва, www.idinaidi.ru",
            position: "фронтэнд-разработчик",
            duties: "<p>Участие в разработке веб-сервисов idinaidi.ru (недвижимость), komesto.ru (коммерческая недвижимость).</p><p>Основной стек: Ruby on Rails, SASS, CoffeeScript, клиентский фреймворк Pieces от Evil Martians, jQuery. Также работала с менеджером очередей Sidekiq и поисковым движком Elasticsearch.</p>"
        }
    ]);
});

module.exports = router;