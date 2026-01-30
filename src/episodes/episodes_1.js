
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

        audio: {
            src: new URL("../assets/audio/scene_1.mp3", import.meta.url).href,
            loop: false,
            play: true,
            volume: 0.8, // 0–1
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

        audio: {
            src: new URL("../assets/audio/scene_2.mp3", import.meta.url).href,
            loop: false,
            play: true,
            volume: 0.8, // 0–1
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
        audio: {
            src: new URL("../assets/audio/scene_3.mp3", import.meta.url).href,
            loop: false,
            play: true,
            volume: 0.8, // 0–1
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
        audio: {
            src: new URL("../assets/audio/scene_4.mp3", import.meta.url).href,
            loop: false,
            play: true,
            volume: 0.8, // 0–1
        },
        characters: [
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
            src: new URL("../assets/scene/b7.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: true,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        audio: {
            src: new URL("../assets/audio/scene_5.mp3", import.meta.url).href,
            loop: false,
            play: true,
            volume: 0.8, // 0–1
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
        ],
        authore: "Джэк Батлер",
        dialogue: "Господа, несколько дней назад мы обнаружили новую планету. Ее название Ченора. Мы начали ее изучать и отправили к ней наши корабли разведчики и согласно нашим последним данным, планета Ченора содержит колоссальные запасы Омнилата. Этот минерал обладает уникальными свойствами, он может стать ключевым элементом в создании новых источников энергии. Также он обладает серьезными лечебными свойствами. Однако есть и проблемы. Коллеги, прошу Вас",
        actions: [{ title: "назад", next_scene: "scene_4" },
        { title: "далее", next_scene: "scene_6" }],
    },


    scene_6: {
        background: {
            src: new URL("../assets/scene/b7.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: true,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        audio: {
            src: new URL("../assets/audio/scene_6.mp3", import.meta.url).href,
            loop: false,
            play: true,
            volume: 0.8, // 0–1
        },
        characters: [
            {
                src: new URL("../assets/scene/p4.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "65%",
                y: "25%",
                width: "30%"
            },
        ],
        authore: "Самуэль Хикерс",
        dialogue: "Планета имеет сильную экосистемную взаимосвязь. Любое вмешательство в недра может привести к непредсказуемым последствиям",
        actions: [{ title: "назад", next_scene: "scene_5" },
        { title: "далее", next_scene: "scene_7" }],
    },


    scene_7: {
        background: {
            src: new URL("../assets/scene/b7.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: true,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        audio: {
            src: new URL("../assets/audio/scene_7.mp3", import.meta.url).href,
            loop: false,
            play: true,
            volume: 1, // 0–1
        },
        characters: [
            {
                src: new URL("../assets/scene/p5.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "2%",
                y: "25%",
                width: "30%"
            },

        ],
        authore: "Джессика Флэй",
        dialogue: "Кроме того, наши конкуренты из корпорация  Ironhold уже узнали об Омнилате. У нас есть максимум несколько месяцев, прежде чем они начнут свою экспедицию. Если мы задержимся, они заберут все ресурсы первыми.",
        actions: [{ title: "назад", next_scene: "scene_6" },
        { title: "далее", next_scene: "scene_8" }],
    },
    scene_8: {
        background: {
            src: new URL("../assets/scene/b7.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: true,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        // audio: {
        //     src: new URL("../assets/audio/scene_4.mp3", import.meta.url).href,
        //     loop: false,
        //     play: true,
        //     volume: 0.8, // 0–1
        // },
        characters: [
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
        dialogue: "Благодарю вас за доклад. Работа проделана отличная. Мы не можем позволить себе упустить такую возможность. (Делает паузу, осматривает всех в зале.) Вы свободны.",
        actions: [
            { title: "назад", next_scene: "scene_7" },
            { title: "далее", next_scene: "scene_9" }],
    },
    scene_9: {
        background: {
            src: new URL("../assets/scene/b7.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: true,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [],
        authore: "Система",
        dialogue: "Ученые собирают документы и выходят. Патрик останавливает Джэка...",
        actions: [
            { title: "назад", next_scene: "scene_8" },
            { title: "далее", next_scene: "scene_10" }],
    },
    scene_10: {
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
        dialogue: "Джэк, останься на минутку.<br/><i>Патрик жестом предлагает присесть в кресло напротив.</i>",
        actions: [
            { title: "назад", next_scene: "scene_9" },
            { title: "далее", next_scene: "scene_11" }],
    },
    scene_11: {
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
            {
                src: new URL("../assets/scene/p1.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "2%",
                y: "25%",
                width: "30%"
            },
        ],
        authore: "Джэк Батлер",
        dialogue: "Что-то срочное, господин Бэймар?",
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
    scene_12: {
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
            {
                src: new URL("../assets/scene/p2.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "65%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Патрик Бэймар",
        dialogue: "Более чем. <br/><i>Он наклоняется вперёд, сжимая руки в замок.</i><br/>Мы оба понимаем, что эта находка может изменить всё. Ченора — наш золотой билет. Но есть одна проблема… Ironhold.",
        actions: [
            { title: "назад", next_scene: "scene_11" },
            { title: "далее", next_scene: "scene_13" }
        ],
    },

    scene_13: {
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
            {
                src: new URL("../assets/scene/p1.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "2%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "Да, сэр. Я знаю. <br/>Они начнут разведку в ближайшие месяцы.",
        actions: [
            { title: "назад", next_scene: "scene_12" },
            { title: "далее", next_scene: "scene_14" }
        ],
    },

    scene_14: {
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
            {
                src: new URL("../assets/scene/p2.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "65%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Патрик Бэймар",
        dialogue: "Именно, Джэк. <br/>И мы не можем позволить им выиграть и опередить нас. У нас есть шанс установить полный контроль, но для этого нам нужно правильно разыграть карты.",
        actions: [
            { title: "назад", next_scene: "scene_13" },
            { title: "далее", next_scene: "scene_15" }
        ],
    },

    scene_15: {
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
            {
                src: new URL("../assets/scene/p1.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "2%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "Что вы предлагаете?",
        actions: [
            { title: "назад", next_scene: "scene_14" },
            { title: "далее", next_scene: "scene_16" }
        ],
    },

    scene_16: {
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
            {
                src: new URL("../assets/scene/p2.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "65%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Патрик Бэймар",
        dialogue: "Мы отправим экспедицию. Но не как обычную добывающую миссию.<br/>Ты и твоя команда отправитесь под прикрытием. Мы представим тебя учёным-дипломатом с Земли, прибывшим с мирной миссией.",
        actions: [
            { title: "назад", next_scene: "scene_15" },
            { title: "далее", next_scene: "scene_17" }
        ],
    },

    scene_17: {
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
            {
                src: new URL("../assets/scene/p1.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "2%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "Вы хотите, чтобы я обманул их?",
        actions: [
            { title: "назад", next_scene: "scene_16" },
            { title: "далее", next_scene: "scene_18" }
        ],
    },

    scene_18: {
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
            {
                src: new URL("../assets/scene/p2.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "65%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Патрик Бэймар",
        dialogue: "Можешь называть это дипломатией, Джэк, если тебе так комфортнее.<br/>Ты войдёшь в доверие к местным, убедишь их, что мы пришли с благими намерениями. А дальше… <br/><i>(короткая пауза)</i><br/>делаем то, что должны.",
        actions: [
            { title: "назад", next_scene: "scene_17" },
            { title: "далее", next_scene: "scene_19" }
        ],
    },

    scene_19: {
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
            {
                src: new URL("../assets/scene/p1.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "2%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "А если они откажутся? <br/><i>Он отводит взгляд.</i>",
        actions: [
            { title: "назад", next_scene: "scene_18" },
            { title: "далее", next_scene: "scene_20" }
        ],
    },

    scene_20: {
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
            {
                src: new URL("../assets/scene/p2.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "65%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Патрик Бэймар",
        dialogue: "Тогда мы убедим их иначе.<br/><br/>Итак, Джэк… ты согласен?",
        actions: [
            { title: "назад", next_scene: "scene_19" },
            { title: "Согласиться безоговорочно", next_scene: "scene_21" },
            { title: "Засомневаться", next_scene: "scene_23" }
        ],
    },

    // Развилка 1

    scene_21: {
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
            {
                src: new URL("../assets/scene/p1.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "2%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "Хорошо. Если это необходимо для успеха корпорации, я сделаю всё, что потребуется.",
        actions: [
            { title: "назад", next_scene: "scene_20" },
            { title: "далее", next_scene: "scene_22" }
        ],
    },

    scene_22: {
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
            {
                src: new URL("../assets/scene/p2.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "65%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Патрик Бэймар",
        dialogue: "Именно так, Джэк. Ты всегда был умным человеком. Готовь команду из самых лучших. Через две недели ты будешь лететь на Ченору.",
        actions: [
            { title: "назад", next_scene: "scene_21" },
            { title: "далее", next_scene: "scene_28" },
        ],
    },

    // Развилка 2

    scene_23: {
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
            {
                src: new URL("../assets/scene/p1.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "2%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "Это… не совсем то, ради чего я стал учёным.",
        actions: [
            { title: "назад", next_scene: "scene_20" },
            { title: "далее", next_scene: "scene_24" }
        ],
    },

    scene_24: {
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
            {
                src: new URL("../assets/scene/p2.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "65%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Патрик Бэймар",
        dialogue: "Миром правят не знания, Джэк. А власть. И ты можешь либо стать частью истории, либо остаться в тени, позволяя конкурентам вырвать победу у тебя из рук.",
        actions: [
            { title: "назад", next_scene: "scene_21" },
            { title: "далее !!!", next_scene: "!!!" },
        ],
    },

    scene_25: {
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
            {
                src: new URL("../assets/scene/p2.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "65%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Патрик Бэймар",
        dialogue: "Подумай. Если не мы, то они. Если мы займёмся этим по-своему, мы сможем контролировать ситуацию. Если это сделает Ironhold, они просто уничтожат всё на своём пути. Ты же не хочешь этого, верно?",
        actions: [
            { title: "назад", next_scene: "scene_24" },
            { title: "далее", next_scene: "scene_26" },
        ],
    },

    scene_26: {
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
            {
                src: new URL("../assets/scene/p1.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "2%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "Ладно. Я согласен, мистер Бэймар.",
        actions: [
            { title: "назад", next_scene: "scene_25" },
            { title: "далее", next_scene: "scene_27" }
        ],
    },

    scene_27: {
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
            {
                src: new URL("../assets/scene/p2.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "65%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Патрик Бэймар",
        dialogue: "Именно так, Джэк. Ты всегда был умным человеком. Готовь команду из самых лучших. Через две недели ты будешь лететь на Ченору. Джэк Батлер вышел из кабинета.",
        actions: [
            { title: "назад", next_scene: "scene_26" },
            { title: "далее", next_scene: "scene_28" },
        ],
    },

    // Поиск команды

    scene_28: {
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
        ],
        authore: "Мысли Джэка",
        dialogue: "В голове Джэка пролетали мысли. Кто бы лучше всех мог подойти для этой работы?",
        actions: [
            { title: "далее", next_scene: "scene_29" },
        ],
    },

    scene_29: {
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
        ],
        authore: "Мысли Джэка",
        dialogue: "И тут в памяти всплывает одно имя — Стивен Росс",
        actions: [
            { title: "назад", next_scene: "scene_28" },
            { title: "далее", next_scene: "scene_30" },
        ],
    },

    scene_30: {
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
        ],
        authore: "Мысли Джэка",
        dialogue: "Стивен Росс… Когда-то один из лучших пилотов в ВВС. Человек, который не боялся идти против приказа, если считал его неправильным. Именно за это его и вышвырнули из армии — он отказался выполнить операцию, стоившую бы сотен жизней. Тогда он потерял всё: карьеру, статус, даже семью.",
        actions: [
            { title: "назад", next_scene: "scene_29" },
            { title: "далее", next_scene: "scene_31" },
        ],
    },

    scene_31: {
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
        ],
        authore: "Мысли Джэка",
        dialogue: "После увольнения Росс не исчез. Он начал работать частным наемником, иногда брался за тёмные дела. Контрабанда, скрытые операции, опасные задания, о которых никто не должен знать. Он всегда умел находить лазейки там, где другие видели тупик.",
        actions: [
            { title: "назад", next_scene: "scene_30" },
            { title: "далее", next_scene: "scene_32" },
        ],
    },

    scene_32: {
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
        ],
        authore: "Мысли Джэка",
        dialogue: "Я помню его ещё по тем временам, когда он выполнял испытательные полёты для Alterio Industries. Неудержимый, наглый, но чётко знающий, чего хочет. И если мне нужен пилот, который не просто доставит команду на Ченору, но и сможет выкрутиться в любой ситуации…",
        actions: [
            { title: "назад", next_scene: "scene_31" },
            { title: "далее", next_scene: "scene_33" },
        ],
    },

    scene_33: {
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
        ],
        authore: "Мысли Джэка",
        dialogue: "Мне нужен именно он – подумал Джэк.",
        actions: [
            { title: "назад", next_scene: "scene_32" },
            { title: "далее", next_scene: "scene_34" },
        ],
    },

    scene_34: {
        background: {
            src: new URL("../assets/scene/b24.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: true,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
        ],
        authore: "Коммуникатор",
        dialogue: "Стив, это твой старый друг Джэк Батлер. Нужно встретиться. Есть работа.",
        actions: [
            { title: "назад", next_scene: "scene_33" },
            { title: "далее", next_scene: "scene_35" },
        ],
    },

    scene_35: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
        ],
        authore: "Система",
        dialogue: "Ангар старой орбитальной станции. В воздухе витает запах горелого металла и машинного масла. В центре — потрёпанный, но ещё рабочий космический челнок. Под ним, копается Стивен, проверяя силовые кабели. Он замечает приближающегося Джека и, не отвлекаясь от работы, говорит.",
        actions: [
            { title: "назад", next_scene: "scene_34" },
            { title: "далее", next_scene: "scene_36" },
        ],
    },

    scene_36: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: true,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
            {
                src: new URL("../assets/scene/p6.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "55%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Стивен Росс",
        dialogue: "Надо же, кто это тот у нас вспомнил про старого друга. Сам Джэк Батлер.",
        actions: [
            { title: "назад", next_scene: "scene_35" },
            { title: "далее", next_scene: "scene_37" },
        ],
    },
    scene_37: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
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
                x: "5%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "Здравствуй Стивен. Прости, что давно к тебе не заглядывал. А у тебя тут неплохое местечко.",
        actions: [
            { title: "назад", next_scene: "scene_36" },
            { title: "далее", next_scene: "scene_38" },
        ],
    },
    scene_38: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
            {
                src: new URL("../assets/scene/p6.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "55%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Стивен Росс",
        dialogue: "Ой, Джэк, только давай без этих сопливых сентиментальностей. Ты ведь знаешь — я это не люблю.<br/>Ближе к сути. Что тебе нужно?",
        actions: [
            { title: "назад", next_scene: "scene_37" },
            { title: "далее", next_scene: "scene_39" }
        ],
    },

    scene_39: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
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
                x: "5%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "У меня есть для тебя отличная работёнка. Очень крупное и, в перспективе, выгодное дело.",
        actions: [
            { title: "назад", next_scene: "scene_38" },
            { title: "далее", next_scene: "scene_40" }
        ],
    },

    scene_40: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
            {
                src: new URL("../assets/scene/p6.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "55%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Стивен Росс",
        dialogue: "Ха! Звучит так, будто ты снова влез в какое-то дерьмо, Джэк. Ты в этом специалист.",
        actions: [
            { title: "назад", next_scene: "scene_39" },
            { title: "далее", next_scene: "scene_41" }
        ],
    },

    scene_41: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
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
                x: "5%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "Послушай, Стивен. Я знаю, что ты сейчас перебиваешься случайными контрактами. А у меня есть кое-что, что вытащит тебя из этой ямы.<br/>Хорошие деньги, официальное прикрытие и работа в рамках закона.",
        actions: [
            { title: "назад", next_scene: "scene_40" },
            { title: "далее", next_scene: "scene_42" }
        ],
    },

    scene_42: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
            {
                src: new URL("../assets/scene/p6.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "55%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Стивен Росс",
        dialogue: "В рамках закона, говоришь? Тогда почему ты ищешь меня в этой дыре, а не набираешь людей через свои корпоративные каналы?",
        actions: [
            { title: "назад", next_scene: "scene_41" },
            { title: "далее", next_scene: "scene_43" }
        ],
    },

    scene_43: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
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
                x: "5%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "Потому что дело не совсем обычное.",
        actions: [
            { title: "назад", next_scene: "scene_42" },
            { title: "далее", next_scene: "scene_44" }
        ],
    },

    scene_44: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
            {
                src: new URL("../assets/scene/p6.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "55%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Стивен Росс",
        dialogue: "Я так и думал. Говори уже, что за работа.",
        actions: [
            { title: "назад", next_scene: "scene_43" },
            { title: "далее", next_scene: "scene_45" }
        ],
    },

    scene_45: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
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
                x: "5%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "Мы отправляемся на Ченору. Официально — научная экспедиция.<br/>На деле — нам нужно выйти на контакт с местными, втереться к ним в доверие и убедить их сотрудничать с Alterio. Нам нужен их ресурс — Омнилат.",
        actions: [
            { title: "назад", next_scene: "scene_44" },
            { title: "далее", next_scene: "scene_46" }
        ],
    },

    scene_46: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
            {
                src: new URL("../assets/scene/p6.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "55%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Стивен Росс",
        dialogue: "Слишком мутно. Я больше не работаю на корпорации, Джэк. И уж точно не на такие, как Alterio.",
        actions: [
            { title: "назад", next_scene: "scene_45" },
            { title: "далее", next_scene: "scene_47" }
        ],
    },

    scene_47: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
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
                x: "5%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "Да ладно, Росс. Мы оба знаем, что ты работаешь на всех, кто хорошо платит.",
        actions: [
            { title: "назад", next_scene: "scene_46" },
            { title: "далее", next_scene: "scene_48" }
        ],
    },

    scene_48: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
            {
                src: new URL("../assets/scene/p6.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "55%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Стивен Росс",
        dialogue: "В этом ты прав… Но знаешь, что мне не нравится? Слово «контроль». Это не похоже на простую сделку.",
        actions: [
            { title: "назад", next_scene: "scene_47" },
            { title: "далее", next_scene: "scene_49" }
        ],
    },

    scene_49: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
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
                x: "5%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "Послушай, если не мы, то это сделает Ironhold. Они уже заинтересовались Ченорой. Ты ведь знаешь, как они работают? Они не будут договариваться, они просто придут и отнимут всё силой. Так что если мы сделаем это первыми — у нас есть шанс оставить после себя не просто выкачанные залежи, а цивилизованное сотрудничество.",
        actions: [
            { title: "назад", next_scene: "scene_48" },
            { title: "далее", next_scene: "scene_50" }
        ],
    },

    scene_50: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
            {
                src: new URL("../assets/scene/p6.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "55%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Стивен Росс",
        dialogue: "Ты, как всегда, умеешь красиво говорить… Ладно. Я в деле.<br/><br/>Но нам нужен ещё один человек.",
        actions: [
            { title: "назад", next_scene: "scene_49" },
            { title: "далее", next_scene: "scene_51" }
        ],
    },

    scene_51: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
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
                x: "5%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "Ты ведь уже знаешь, кого предложить. Говори.",
        actions: [
            { title: "назад", next_scene: "scene_50" },
            { title: "далее", next_scene: "scene_52" }
        ],
    },

    scene_52: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
            {
                src: new URL("../assets/scene/p6.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "55%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Стивен Росс",
        dialogue: "Сиерра Купер.",
        actions: [
            { title: "назад", next_scene: "scene_51" },
            { title: "далее", next_scene: "scene_53" }
        ],
    },

    scene_53: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
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
                x: "5%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "О нет… Это невозможно. Она никогда не согласится.",
        actions: [
            { title: "назад", next_scene: "scene_52" },
            { title: "далее", next_scene: "scene_54" }
        ],
    },

    scene_54: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
            {
                src: new URL("../assets/scene/p6.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "55%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Стивен Росс",
        dialogue: "Она лучший специалист по ксенокультурам. Или у тебя есть кандидат получше?",
        actions: [
            { title: "назад", next_scene: "scene_53" },
            { title: "далее", next_scene: "scene_55" }
        ],
    },

    scene_55: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
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
                x: "5%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "Она в чёрном списке Alterio! Её уволили за критику проекта по колонизации одной из планет. Даже если она вдруг согласится, я не смогу убедить корпорацию и лично Бэймара взять её.",
        actions: [
            { title: "назад", next_scene: "scene_54" },
            { title: "далее", next_scene: "scene_56" }
        ],
    },

    scene_56: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
            {
                src: new URL("../assets/scene/p6.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "55%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Стивен Росс",
        dialogue: "Это ты не сможешь? Джэк Батлер, специалист убеждать других влезать в сомнительные авантюры?",
        actions: [
            { title: "назад", next_scene: "scene_55" },
            { title: "Продолжить", next_scene: "scene_57" }
        ],
    },
    scene_57: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
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
                x: "5%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "Это не смешно. Я говорю совершенно серьезно.",
        actions: [
            { title: "назад", next_scene: "scene_56" },
            { title: "далее", next_scene: "scene_58" }
        ],
    },

    scene_58: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
            {
                src: new URL("../assets/scene/p6.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "55%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Стивен Росс",
        dialogue: "А я и не шучу. Она действительно наш лучший шанс наладить контакт с местными, если ты действительно хочешь сначала договориться, а не просто поставить их перед фактом.",
        actions: [
            { title: "назад", next_scene: "scene_57" },
            { title: "далее", next_scene: "scene_59" }
        ],
    },

    scene_59: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
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
                x: "5%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "Ладно, мы можем попробовать… Ты знаешь где она сейчас?",
        actions: [
            { title: "назад", next_scene: "scene_58" },
            { title: "далее", next_scene: "scene_60" }
        ],
    },

    scene_60: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
            {
                src: new URL("../assets/scene/p6.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "55%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Стивен Росс",
        dialogue: "После того как ее уволили из Alterio, она читает лекции в подпольном клубе анархистов. Который располагается в старом баре на окраине города.",
        actions: [
            { title: "назад", next_scene: "scene_59" },
            { title: "далее", next_scene: "scene_61" }
        ],
    },

    scene_61: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
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
                x: "5%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Джэк Батлер",
        dialogue: "Ну разумеется… И почему я не удивлен?",
        actions: [
            { title: "назад", next_scene: "scene_60" },
            { title: "далее", next_scene: "scene_62" }
        ],
    },

    scene_62: {
        background: {
            src: new URL("../assets/scene/b5.mp4", import.meta.url).href,
            volume: 0,
            loop: false,
            play: false,
            x: "0%",
            y: "0%",
            width: "100%"
        },
        characters: [
            {
                src: new URL("../assets/scene/p6.webm", import.meta.url).href,
                volume: 0,
                loop: true,
                play: true,
                x: "55%",
                y: "25%",
                width: "30%"
            }
        ],
        authore: "Стивен Росс",
        dialogue: "Ну что ж. Пришла пора проведать нашу старую подругу.",
        actions: [
            { title: "назад", next_scene: "scene_61" },
            { title: "Продолжить", next_scene: "scene_63" }
        ],
    },






}


export default episodes_1 