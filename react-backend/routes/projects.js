const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    return res.json([
        {
            "id": 1,
            "title": "100 фактов о Крыме",
            "place": "ЗАО «Аргументы и Факты»",
            "img": "https://cdn-images-1.medium.com/max/800/1*-2CkjRAK_4_V7TYsBWaK5w.jpeg",
            "desc": "Этот спецпроект заказало АиФ Министерство культуры. На его страницах поместилось 100 фактов о культурных достижениях (книгах, фильмах и т.д.), связанных с тем или иным городом Крыма (всего 20 городов).",
            "link": "https://medium.com/@dushkinanatalia/100-%D1%84%D0%B0%D0%BA%D1%82%D0%BE%D0%B2-%D0%BE-%D0%BA%D1%80%D1%8B%D0%BC%D0%B5-7e690e0122c2",
            "tags": ["CSS", "JavaScript"]
        },
        {
            "id": 2,
            "title": "«Поехали!» Спецпроект ко Дню Космонавтики",
            "place": "ЗАО «Аргументы и Факты»",
            "img": "https://cdn-images-1.medium.com/max/800/1*3GPAdJVMf1IfL4-BDDNcXw.jpeg",
            "desc": "Этот спецпроект имел конкретный дедлайн — День космонавтики. Разрабатывался в суматохе: в сжатые сроки было реализовано много интересных штук, часть из которых привела к довольно-таки затейливым багам, и их пришлось убрать.",
            "link": "https://medium.com/@dushkinanatalia/%D0%BF%D0%BE%D0%B5%D1%85%D0%B0%D0%BB%D0%B8-%D1%81%D0%BF%D0%B5%D1%86%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%BA%D0%BE-%D0%B4%D0%BD%D1%8E-%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D0%BD%D0%B0%D0%B2%D1%82%D0%B8%D0%BA%D0%B8-138823431720",
            "tags": ["CSS", "JavaScript", "GSAP"]
        }
    ]);
});

module.exports = router;
