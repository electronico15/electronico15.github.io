const TelegramBot = require('node-telegram-bot-api');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

// Token de Telegram y API key de OpenAI guardados en variables de ambiente
const telegramToken = process.env.TELEGRAM_TOKEN;
const openaiApiKey = process.env.OPENAI_API_KEY;

// Iniciar el bot con los tokens previamente obtenidos
const bot = new TelegramBot(telegramToken, { polling: true });
let msgUsuario = "";
// Configuración de OpenAI y teclado del menú principal
const configuration = new Configuration({apiKey: openaiApiKey});
const openai = new OpenAIApi(configuration);
const menuKeyboard = {
  keyboard: [
    [
      { text: ' <' },
      { text: '0' },
      { text: '>' }
    ],
    ['🌐Traducir'],
    ['📝Wikipedia'],
    ['💬Chat IA'],
    ['🆘Ayuda'],
    [
      { text: ' <' },
      { text: '0' },
      { text: '>' }
    ]
    
  ],
  resize_keyboard: true,
  one_time_keyboard: false,
};
// Botón de "Atrás"
const backButton = {
  text: 'Atrás ⏪'
};
// Estado actual del usuario (inicialmente no existe)
const userStates = {};

// Función que se ejecuta cuando el bot recibe un mensaje
bot.on('message', async (msg) => {

  // Identificador del chat y mensaje que se recibe
  const chatId = msg.chat.id;
  const message = msg.text;
  const messageId = msg.message_id;
  const userName = msg.from.first_name;

  // Mensaje de consola para confirmar la recepción de un mensaje
  console.log(`Se recibió un mensaje del chat con ID: ${chatId} con el texto (${message}) del usuario ${userName} y se encuentra en (${ userStates[chatId]})`);

  // Si este es el primer mensaje del usuario, mostrar el menú principal
  if (!userStates[chatId]) {
    bot.sendMessage(chatId, `Hola ${userName}!\n Por favor selecciona una opción del menu:`, 
    { reply_markup: menuKeyboard });//envia el menu al usuario
    userStates[chatId] = 'menu';// establece el estado del usuario
  } 

  // Si el usuario ya está en el menú principal, responder según el texto ingresado
  else if (userStates[chatId] === 'menu') {
    switch (message) {
      case '🌐Traducir':
        // Pedir al usuario que ingrese un texto en inglés a traducir
        bot.sendMessage(chatId, 'Ingresa el texto en inglés que deseas traducir.', {
          reply_markup: {
            keyboard: [[backButton]],
            resize_keyboard: true,
            one_time_keyboard: false
          }
        });
        // Cambiar el estado del usuario a "traducir" y agregar el botón de "Atrás" al menú
        userStates[chatId] = 'traducir';
        menuKeyboard.keyboard.push([backButton]);
        break;
        case '💬Chat IA':
        
        bot.sendMessage(chatId, 'Este es un chat de IA', {
          reply_markup: {
            keyboard: [[backButton]],
            resize_keyboard: true,
            one_time_keyboard: false
          }
        });
        // Cambiar el estado del usuario a "Chat IA" y agregar el botón de "Atrás" al menú
        userStates[chatId] = 'Chat IA';
        menuKeyboard.keyboard.push([backButton]);
        break;
      case '🆘Ayuda':
        // Mostrar un mensaje de ayuda
        bot.sendMessage(chatId, '¡Bienvenido/a a nuestro bot de Telegram! \nEste bot tiene como objetivo proporcionarte diferentes servicios para que puedas tener una mejor experiencia en Telegram. Al iniciarlo, se te presentará un menú con diferentes opciones:\n"Traducir 🌐": esta opción te permitirá traducir cualquier texto en inglés al español. Solo debes ingresar el texto en inglés y el bot te devolverá la traducción correspondiente.\n"Wikipedia 📝": con esta opción puedes hacer preguntas sobre cualquier tema y el bot buscará la respuesta en Wikipedia para ti. Es importante que sepas que las respuestas están enfocadas en ser útiles para trabajos escolares, por lo que la respuesta puede ser más larga de lo que esperabas.\n"Ayuda 🆘": si necesitas ayuda o tienes alguna duda sobre cómo usar el bot, esta opción te mostrará un mensaje de ayuda.\n Esperamos que disfrutes del bot y que te sea útil en tus conversaciones por Telegram. ¡No dudes en contactarnos si tienes alguna pregunta o sugerencia!');
        break;
      case '📝Wikipedia':
        // Pedir al usuario que haga una pregunta para buscar en Wikipedia
        bot.sendMessage(chatId, '¡Bienvenido a Wikipedia! Ingresa tu pregunta:', {
          reply_markup: {
            keyboard: [[backButton]],
            resize_keyboard: true,
            one_time_keyboard: false
          }
        });


        // Cambiar el estado del usuario a "wikipedia" y agregar el botón de "Atrás" al menú
        userStates[chatId] = 'wikipedia';
        menuKeyboard.keyboard.push([backButton]);
        break;
        
    }

    if (
      message !== '📝Wikipedia' &&
      message !== '🌐Traducir' &&
      message !== '💬Chat IA' &&
      message !== '🆘Ayuda'
      
    ) {
      bot.sendMessage(
        chatId,
        `${userName}! Primero debes seleccionar una opción del menú:`,
        { reply_markup: menuKeyboard }
      );
      return;
    }
  } 
  // Si el usuario está en el estado "traducir"
  else if (userStates[chatId] === 'traducir') {
    if (message === backButton.text) {
      // Si el usuario presionó el botón "Atrás", volver al menú principal
      bot.sendMessage(chatId, 'Modo traducción finalizado.', { reply_markup: menuKeyboard });
      userStates[chatId] = 'menu';
      menuKeyboard.keyboard.pop();
    } else {
      // Si el usuario ingresó un texto en inglés, traducirlo a español usando OpenAI
      const textToTranslate = message;
      if (textToTranslate) {
        try {
          const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `traduceme el siguiente texto \n,y aqrgumenta que significa\n de que a cual idioma se tradujo \n comentalo:\n si esta en otro idioma traducelo al español pero si esta en español traducelo al ingles y pregunta si quieres traducir a otro idima: "${textToTranslate}"`,
            temperature: 0.3,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          });
          const translatedText = response.data.choices[0].text.trim();
          // Mostrar el texto traducido al usuario y permitir que siga escribiendo o presione "Atrás" para volver al menú
          bot.sendMessage(chatId, `Hola ${userName}!\n${translatedText}\n\nPuedes seguir escribiendo o presionar "Atrás" para volver al menú.`, {
            reply_markup: {
              keyboard: [[backButton]],
              resize_keyboard: true,
              one_time_keyboard: false
            }
          });
        } catch (error) {
          // Si no se puede traducir el texto, mostrar un mensaje de error
          bot.sendMessage(chatId, `Lo siento, no pude traducir "${textToTranslate}". Por favor intenta algo diferente o presiona "Atrás" para volver al menú.`);
        }
      } else {
        // Si el usuario no ingresó ningún texto, pedirle que proporcione un texto en inglés para traducir
        bot.sendMessage(chatId, 'Por favor, proporciona un texto en inglés para traducir.');
      }
    }
  } 
  else if (userStates[chatId] === 'Chat IA') {/////////////////////////////////////
    if (message === backButton.text) {
      // Si el usuario presionó el botón "Atrás", volver al menú principal
      bot.sendMessage(chatId, 'Modo traducción finalizado.', { reply_markup: menuKeyboard });
      userStates[chatId] = 'menu';
      menuKeyboard.keyboard.pop();
    } else {
msgUsuario += '\n Us: '+message+' \n';
console.dir('esto es lo que tiene msgUsuarioLog ahora :'+msgUsuario)
const prompt = "Soy un bot de respuesta y preguntas muy inteligente. Si me haces una pregunta que tiene sus raíces en la verdad, te daré la respuesta. Si me hace una pregunta que es una tontería, un engaño o que no tiene una respuesta clara, le responderé con (no le encuentro lógica a tu pregunta explícame mejor o revisa la ortografía para no confundirme ) el nombre del usuario es :"+userName+" agregale emogis relasionados si los tienes para mas alegre respuesta aui vamos :  ";
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: prompt+msgUsuario,
  temperature: 0.5,
  max_tokens: 250,
  
});
           const chatia = response.data.choices[0].text.trim();
           msgUsuario += chatia+' \n';
           console.log('esto es lo que tiene msgUsuario ahora :'+msgUsuario)
      
          bot.sendMessage(chatId, `${chatia}`, {
            reply_markup: {
              keyboard: [[backButton]],
              resize_keyboard: true,
              one_time_keyboard: false
            }
          });
       }
      
  } 
  // Si el usuario está en el estado "wikipedia"
  else if (userStates[chatId] === 'wikipedia') {
    if (message === backButton.text) {
      // Si el usuario presionó el botón "Atrás", volver al menú principal
      bot.sendMessage(chatId, 'Modo wikipedia finalizado.', { reply_markup: menuKeyboard });
      userStates[chatId] = 'menu';
      menuKeyboard.keyboard.pop();
    } else {
      try {
        const response = await openai.createCompletion({
          model: 'text-davinci-003',
          prompt: `respondeme a estas preguntas enfocando tu respuesta sabiendo que seran utilizadas para realizar trabajos escolares por niños y adultos:\n"${message} ?"`,
          temperature: 0.5,
          max_tokens: 150,
        });
        const answer = response.data.choices[0].text.trim();
        // Mostrar la respuesta obtenida de Wikipedia al usuario y permitir que presione "Atrás" para volver al menú
        bot.sendMessage(chatId, `Aquí está tu respuesta \n\n${answer}`, {
          reply_markup: {
            keyboard: [[backButton]],
            resize_keyboard: true,
            one_time_keyboard: true
          }
        });
       // userStates[chatId] = 'menu';
       // menuKeyboard.keyboard.pop();
      } catch (error) {
        // Si no se puede obtener una respuesta de Wikipedia, mostrar un mensaje de error
        console.log(error);
        bot.sendMessage(chatId, 'Lo siento, no pude obtener una respuesta de Wikipedia para tu pregunta. Por favor intenta algo diferente o presiona "Atrás" para volver al menú.');
      }

    }
   
  }
});

// Mensaje de consola para confirmar que el bot se inició correctamente
bot.sendMessage(1671749209, 'bot iniciado', 
{ reply_markup: menuKeyboard });
console.log('Server running at http://127.0.0.1:8081/');
