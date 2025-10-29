
let episodes_1 = {

    scene_1: {
        background: {
            src: new URL("../assets/scene/b1.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: true,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [],
        authore: "Система",
        dialogue: "На дворе 2053 год. Человечество вступило в эпоху ресурсного кризиса. Земля истощена. Океаны мертвы. Леса сгорели.Государств как таковых больше нет, вместо них существует нескольких влиятельных корпораций, которые борются друг с другом за ресурсы и власть. Это корпорации – Alterio Industries, Eclipse Systems, Ironhold Corp.",
        actions: [{ title: "далее", next_scene: "scene_2" }],
    },

    scene_2: {
        background: {
            src: new URL("../assets/scene/b2.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: true,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [],
        authore: "Система",
        dialogue: "Одна из влиятельнейших корпораций – Alterio Industries решает запустить автоматизированные корабли разведчики, которые находят планету Ченора на окраине Галактики. Они сканируют ее спектральным анализом и находят на ней множество полезных и редких минералов и металлов, огромные запасы чистой воды, которой уже давно нет на земле, но самое главное они находят до настоящего времени неизвестный ресурс - Омнилат",
        actions: [
            { title: "назад", next_scene: "scene_1" },
            { title: "далее", next_scene: "scene_3" },
        ],
    },

    scene_3: {
        background: {
            src: new URL("../assets/scene/b3.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: true,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [],
        authore: "Система",
        dialogue: "Ученые начинают изучать результаты спектрального анализа и приходят к выводу что Омнилат обладает совершенно уникальными свойствами. Во первых он источник чистой энергии – при правильной обработке Омнилат выделяет в 10 раз больше энергии, чем термоядерный синтез. Во вторых Омнилат катализатор для продления жизни – ученые обнаружили, что он замедляет старение клеток и в перспективе может сделать человека бессмертным, что делает его бесценным для элиты Земли",
        actions: [
            { title: "назад", next_scene: "scene_2" },
            { title: "Познакомимся", next_scene: "scene_4" },
        ],
    },

    scene_4: {
        background: {
            src: new URL("../assets/scene/b7.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: true,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
            // {
            //     src: new URL("../assets/scene/p1.webm", import.meta.url).href,
            //     volume: 0,
            //     loop: true,
            //     play: true,
            //     x: "2%",
            //     y: "25%",
            //     width: "30%"
            // },
            {
                src: new URL("../assets/scene/p2.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "65%",
                y: "25%",
                width: "30%"
            },

        ],
        authore: "Патрик Бэймар",
        dialogue: "Дорогие коллеги, сегодня мы собрались по очень важному поводу. Наши лучшие сотрудники из научного отдела под руководством Джэка Батлера, обнаружили новую планету, которая до этого была абсолютно неизвестна и  требует тщательного изучения. Прошу Джэк, расскажите нам пожалуйста поподробнее об этой планете. Всех в зале прошу слушать крайне внимательно.",
        actions: [
            { title: "назад", next_scene: "scene_3" },
            { title: "далее", next_scene: "scene_5" }],
    },

    scene_5: {
        background: {
            src: new URL("../assets/scene/b4.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: true,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
            {
                src: new URL("../assets/scene/p1.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "2%",
                y: "25%",
                width: "30%"
            },
            // {
            //     src: new URL("../assets/scene/p2.webm", import.meta.url).href,
            //     volume: 0,
            //     loop: true,
            //     play: true,
            //     x: "65%",
            //     y: "25%",
            //     width: "30%"
            // },

        ],
        authore: "Джэк Батлер",
        dialogue: "Стивен Росс… Когда-то один из лучших пилотов в ВВС. Человек, который не боялся идти против приказа, если считал его неправильным. Именно за это его и вышвырнули из армии — он отказался выполнить операцию, стоившую бы сотен жизней. Тогда он потерял всё: карьеру, статус, даже семью.",
        actions: [{ title: "назад", next_scene: "scene_4" },
        { title: "далее", next_scene: "scene_6" }],
    },


    scene_6: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: true,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [],
        authore: "Система",
        dialogue: "Ангар старой орбитальной станции. В воздухе витает запах горелого металла и машинного масла. В центре — потрёпанный, но ещё рабочий космический челнок. Под ним, копается Стивен, проверяя силовые кабели. Он замечает приближающегося Джека и, не отвлекаясь от работы, говорит...",
        actions: [{ title: "назад", next_scene: "scene_5" },
        { title: "далее", next_scene: "scene_7" }],
    },

    scene_7: {
        background: {
            src: new URL("../assets/scene/b8.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: true,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
            {
                src: new URL("../assets/scene/p3.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "2%",
                y: "25%",
                width: "30%"
            },


        ],
        authore: "Вождь КаэЗар",
        dialogue: "Экспедиция и вождь КаэЗар идут по дороге, оглядываясь на бескрайние поля фиолетово-желтых цветов, которые тянутся вдоль горизонта. Вдали виднеются огромные кристаллические образования, отражающие свет местного солнца. Возможно, это и есть Омнилат в его природной форме. Атмосфера спокойная, но каждый шаг Джэка и его команды приближает их к разгадке тайны этого мира.",
        actions: [{ title: "назад", next_scene: "scene_6" },
        { title: "далее", next_scene: "scene_8" }],
    },

    scene_8: {
        background: {
            src: new URL("../assets/scene/b6.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: true,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [],
        authore: "Видения Джэка Батлера",
        dialogue: "Он видит разрушенный город, где некогда стояла столица Ченоры. Огонь, крики, страдания. Солдаты Alterio бьют кнутами согбенных рабов-КхаАти, заставляя их добывать Омнилат. Джэк замечает знакомые лица – КаэЗар мертв, некоторые из местных жителей прикованы цепями, а Сиерра с ужасом смотрит на всё это издалека. Затем новый образ – Земля, но она тоже в хаосе. Корпорации ведут войну за ресурсы. Десятки планет, одна за другой, поглощаются ненасытным аппетитом людей...",
        actions: [{ title: "назад", next_scene: "scene_7" },
        { title: "далее", next_scene: "scene_9" }],
    },



    scene_9: {
        headband: new URL("../assets/scene/7.png", import.meta.url).href,
        authore: "Патрик Бэймар",
        dialogue: "Джэк, останься на минутку.",
        actions: [{ title: "назад", next_scene: "scene_8" },
        { title: "далее", next_scene: "scene_10" }],
    },

    scene_10: {
        headband: new URL("../assets/scene/8.png", import.meta.url).href,
        authore: "Джэк Батлер",
        dialogue: "Что-то срочное, господин Бэймар?",
        actions: [{ title: "назад", next_scene: "scene_9" },
        { title: "далее", next_scene: "scene_11" }],
    },

    scene_11: {
        headband: new URL("../assets/scene/7.png", import.meta.url).href,
        authore: "Патрик Бэймар",
        dialogue: "Более чем. Мы оба понимаем, что эта находка может изменить всё. Ченора — наш золотой билет. Но есть одна проблема… Ironhold.",
        actions: [{ title: "назад", next_scene: "scene_10" },
        { title: "далее", next_scene: "scene_12" }],


    },

    scene_12: {
        headband: new URL("../assets/scene/8.png", import.meta.url).href,
        authore: "Джэк Батлер",
        dialogue: "Да сэр, я знаю. Они начнут разведку в ближайшие месяцы.",
        actions: [{ title: "назад", next_scene: "scene_11" },
        { title: "далее", next_scene: "scene_13" }],
    },

    scene_13: {
        headband: new URL("../assets/scene/7.png", import.meta.url).href,
        authore: "Патрик Бэймар",
        dialogue: "Именно Джэк. И мы не можем позволить им выиграть и опередить нас. У нас есть шанс установить полный контроль, но для этого нам нужно правильно разыграть карты.",
        actions: [{ title: "назад", next_scene: "scene_12" },
        { title: "далее", next_scene: "scene_14" }],


    },

    scene_14: {
        headband: new URL("../assets/scene/8.png", import.meta.url).href,
        authore: "Джэк Батлер",
        dialogue: "Что вы предлагаете?",
        actions: [{ title: "назад", next_scene: "scene_13" },
        { title: "далее", next_scene: "scene_15" }],
    },

    scene_15: {
        headband: new URL("../assets/scene/7.png", import.meta.url).href,
        authore: "Патрик Бэймар",
        dialogue: "Мы отправим экспедицию, но не как обычную добывающую миссию. Ты и твоя команда отправитесь под прикрытием. Мы представим тебя учёным-дипломатом с Земли, который прибыл с мирной миссией.",
        actions: [{ title: "назад", next_scene: "scene_14" },
        { title: "далее", next_scene: "scene_16" }],


    },

    scene_16: {
        headband: new URL("../assets/scene/8.png", import.meta.url).href,
        authore: "Джэк Батлер",
        dialogue: "Вы хотите, чтобы я обманул их?",
        actions: [{ title: "назад", next_scene: "scene_15" },
        { title: "далее", next_scene: "scene_17" }],
    },

    scene_17: {
        headband: new URL("../assets/scene/7.png", import.meta.url).href,
        authore: "Патрик Бэймар",
        dialogue: "Можешь называть это дипломатией Джэк, если тебе так комфортнее. Ты войдёшь в доверие к местным, убедишь их, что мы пришли с благими намерениями. Как только они расслабятся, мы получим доступ к ресурсам. А дальше… (пауза) делаем то, что должны.",
        actions: [{ title: "назад", next_scene: "scene_16" },
        { title: "далее", next_scene: "scene_18" }],


    },

    scene_18: {
        headband: new URL("../assets/scene/8.png", import.meta.url).href,
        authore: "Джэк Батлер",
        dialogue: "А если они откажутся?",
        actions: [{ title: "назад", next_scene: "scene_17" },
        { title: "далее", next_scene: "scene_19" }],
    },

    scene_19: {
        headband: new URL("../assets/scene/7.png", import.meta.url).href,
        authore: "Патрик Бэймар",
        dialogue: "Тогда мы убедим их иначе.",
        actions: [{ title: "назад", next_scene: "scene_18" },
        { title: "далее", next_scene: "scene_20" }],


    },

    scene_20: {
        headband: new URL("../assets/scene/7.png", import.meta.url).href,
        authore: "Патрик Бэймар",
        dialogue: "Итак Джэк, ты согласен?",
        actions: [
            { title: "назад", next_scene: "scene_19" },
            { title: "Согласиться безоговорочно", next_scene: "scene_21" },
            { title: "Засомневаться", next_scene: "scene_23" }
        ],
    },

    scene_21: {
        headband: new URL("../assets/scene/8.png", import.meta.url).href,
        authore: "Джэк Батлер",
        dialogue: "Хорошо. Если это необходимо для успеха корпорации, я сделаю всё, что потребуется.",
        actions: [{ title: "назад", next_scene: "scene_20" },
        { title: "далее", next_scene: "scene_22" }],
    },

    scene_22: {
        headband: new URL("../assets/scene/8.png", import.meta.url).href,
        authore: "Джэк Батлер",
        dialogue: "Это… не совсем то, ради чего я стал учёным.",
        actions: [{ title: "назад", next_scene: "scene_20" },
        { title: "далее", next_scene: "scene_26" }],
    },

    scene_23: {
        headband: new URL("../assets/scene/7.png", import.meta.url).href,
        authore: "Патрик Бэймар",
        dialogue: "Миром правят не знания, Джэк. А власть. И ты можешь либо стать частью истории, либо остаться в тени, позволяя конкурентам вырвать победу у тебя из рук.",
        actions: [{ title: "назад", next_scene: "scene_23" },
        { title: "далее", next_scene: "scene_24" }],
    },
    scene_24: {
        headband: new URL("../assets/scene/7.png", import.meta.url).href,
        authore: "Патрик Бэймар",
        dialogue: "Подумай. Если не мы, то они. Если мы займёмся этим по-своему, мы сможем контролировать ситуацию. Если это сделает Ironhold, они просто уничтожат всё на своём пути. Ты же не хочешь этого, верно?",
        actions: [{ title: "назад", next_scene: "scene_24" },
        { title: "далее", next_scene: "scene_25" }],
    },
    scene_25: {
        headband: new URL("../assets/scene/8.png", import.meta.url).href,
        authore: "Джэк Батлер",
        dialogue: "…Ладно. Я согласен, мистер Бэймар.",
        actions: [{ title: "назад", next_scene: "scene_25" },
        { title: "далее", next_scene: "scene_26" }],
    },

    scene_26: {
        headband: new URL("../assets/scene/7.png", import.meta.url).href,
        authore: "Патрик Бэймар",
        dialogue: "Именно так, Джэк. Ты всегда был умным человеком. Готовь команду из самых лучших. Через две недели ты будешь лететь на Ченору.",
        actions: [
            { title: "далее", next_scene: "scene_20" }],
    },


}


export default episodes_1 