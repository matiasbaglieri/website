(function($) {
    "use strict";
    var chatMessages = [
        {
            name: "ms1",
            msg:"👋Hi​ Sophie! How Can I Help You?",
            msg_es: "👋¡Hola Sophie! ¿Cómo puedo ayudarte?",
            delay: 300,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.png"
        },
        {
            name: "ms2",
            msg:"I need to know more about EveryThink!",
            msg_es: "¡Necesito saber más sobre EveryThink!",
            delay: 3000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.png"
        },
        {
            name: "ms3",
            msg:"Awesome! What Do You Want To Know?",
            msg_es: "¡Genial! ¿Qué quieres saber?",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.png"
        },
        {
            name: "ms4",
            msg:"I know That is a No-Code Platform, But Need I Have Technical Skills To Use It?",
            msg_es: "Sé que es una plataforma sin código, pero ¿necesito tener habilidades técnicas para usarla?",
            delay: 2000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.png"
        },
        {
            name: "ms5",
            msg:"Nop! You Can Buil EveryThing You Want Without Coding Skilss. Only You Need To Know What You Want And How To Manage Your Business!",
            msg_es: "¡Nop! Puedes construir todo lo que quieras sin habilidades de codificación. ¡Solo tú necesitas saber lo que quieres y cómo administrar tu negocio!",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.png"
        },
        {
            name: "ms6",
            msg:"Great! Really I Need To See It! To Validate It! And What Happen If I´m Not A Business? I Mean, I am A Consultant.",
            msg_es: "¡Genial! ¡Realmente necesito verlo! ¡Validarlo! ¿Y qué pasa si no soy un negocio? Quiero decir, soy un consultor.",
            delay: 2000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.png"
        },
        {
            name: "ms7",
            msg:"You Can Also Use It And Commercialize Your Skills! We About Powering People Too With Smart Solutions For Shorten Time-To-Engagement In All Phases Of The Business Lifecycle.",
            msg_es: "¡También puede usarlo y comercializar sus habilidades! Nosotros también queremos brindarle a las personas soluciones inteligentes para acortar el tiempo de participación en todas las fases del ciclo de vida empresarial",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.png"
        },
        {
            name: "ms8",
            msg:"Lol What Makes You Different From Other No-Code Platforms?",
            msg_es: "Lol ¿Qué te diferencia de otras plataformas sin código?",
            delay: 2000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.png"
        },
        {
            name: "ms9",
            msg:"The Main Difference Is That You Are Talking With Me Now! That Is, I Will Be There To Help You, And To Help Your Consultants, Your Clients, Your Suppliers, Prospects And All Those Who Need Me!",
            msg_es: "¡La principal diferencia es que estás hablando conmigo ahora! Es decir, estaré allí para ayudarte, y para ayudar a tus consultores, tus clientes, tus proveedores, prospectos y todos aquellos que me necesiten!",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.png"
        },
        {
            name: "ms10",
            msg:"I Hadn't Realized How Important Your Role Is Here! I Like Talking To You!❤️",
            msg_es: "¡No me había dado cuenta de lo importante que es tu papel aquí! ¡Me gusta hablar contigo! ❤️",
            delay: 4000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.png"
        },
        {
            name: "ms11",
            msg:"Thank You, Sophie!",
            msg_es: "¡Gracias, Sophie!",
            delay: 1000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.png"
        },
        {
            name: "ms12",
            msg:"In Terms Of The Data, You Can Cotrol It?",
            msg_es: "En términos de los datos, ¿puede controlarlos?", 
            delay: 3000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.png"
        },
        {
            name: "ms13",
            msg:"You Are The Owner Of All Your Data, My Job Is To Assist, Connect, Observe, Analyze, Suggest To You And Automate.",
            msg_es: "Usted es el propietario de todos sus datos, mi trabajo es ayudar, conectar, observar, analizar, sugerirle y automatizar",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.png"
        },
        {
            name: "ms14",
            msg:"Love It! Sounds Like You Could Make My Job Easier!",
            msg_es: "¡Me encanta! ¡Parece que podrías hacer mi trabajo más fácil!",
            delay: 2000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.png"
        },
        {
            name: "ms15",
            msg:"Exactly! In This Way, You Can Focus On The Important Tasks So That Your Business Grows, Is Profitable And You Can Optimize Your Resources To The Maximum.",
            msg_es: "¡Exactamente! De esta manera, puede concentrarse en las tareas importantes para que su negocio crezca, sea rentable y pueda optimizar sus recursos al máximo.",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.png"
        },
        {
            name: "ms16",
            msg:"Cool! I Think You Convinced Me!! Who Is Your Creator? So Far I have Not Seen Anything Like It!",
            msg_es: "¡Genial! ¡Creo que me convenciste! ¿Quién es tu creador? ¡Hasta ahora no he visto nada parecido!",
            delay: 2000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.png"
        },
        {
            name: "ms17",
            msg:"Thanks To The Founders Of EveryThink I'm Here Today! They Have Been Training Me For A Long Time So That I Can Do My Job Correctly.",
            msg_es: "¡Gracias a los fundadores de EveryThink, estoy aquí hoy! Me han estado capacitando durante mucho tiempo para que pueda hacer mi trabajo correctamente.",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.png"
        },
        {
            name: "ms18",
            msg:"Someday I Would Like To Meet Them!",
            msg_es: "¡Algún día me gustaría conocerlas!",
            delay: 2000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.png"
        },
        {
            name: "ms19",
            msg:"That Is Not Impossible! If You Go To EveryThink Network Via Web, Android Or iOS; You Can Connect With Them And Schedule A Call With Them Too!",
            msg_es: "¡Eso no es imposible! Si va a EveryThink Network a través de la Web, Android o iOS; ¡puede conectarse con ellos y programar una llamada con ellos también!",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.png"
        },
        {
            name: "ms20",
            msg:"Cool! Excellent Idea! Thank You!❤️",
            msg_es: "¡Genial! ¡Excelente idea! ¡Gracias! ❤️",
            delay: 4000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.png"
        },
        {
            name: "ms21",
            msg:"Welcome! Let Me Know If I Can Help You With Something Else ❤️",
            msg_es: "¡Bienvenido! Avísame si puedo ayudarte con algo más ❤️",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.png"
        },
    ];
    var chatDelay = 0;
    var chatDelay2, chatDelay3, scrollDelay, chatTimeString, msgname, msginner, spinner;

    function onRowAdded() {
        $('.chat-container').animate({
            scrollTop: $('.chat-container').prop('scrollHeight')
        });
    };
    $.each(chatMessages, function(index, obj) {
        chatDelay = chatDelay + 1000;
        chatDelay2 = chatDelay + obj.delay;
        chatDelay3 = chatDelay2 + 10;
        scrollDelay = chatDelay;
        chatTimeString = " ";
        msgname = "." + obj.name;
        msginner = ".messageinner-" + obj.name;
        spinner = ".sp-" + obj.name;
        if (obj.showTime == true) {
            chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
        }
        $(".chat-message-list-en-US").append("<li class='message-" + obj.align + " " + obj.name + "' hiddenn><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hiddenn><img src='" + obj.img +"'><span class='message-text'>" + obj.msg + chatTimeString + "</span></div></li>");
        $(".chat-message-list-es").append("<li class='message-" + obj.align + " " + obj.name + "' hiddenn><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hiddenn><img src='" + obj.img +"'><span class='message-text'>" + obj.msg_es + chatTimeString + "</span></div></li>");

        $(msgname).delay(chatDelay).fadeIn();
        $(spinner).delay(chatDelay2).hide(1);
        $(msginner).delay(chatDelay3).fadeIn();
        setTimeout(onRowAdded, chatDelay);
        setTimeout(onRowAdded, chatDelay3);
        chatDelay = chatDelay3;
    });
}(jQuery))
