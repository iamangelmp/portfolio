const contact_confirm_template = (name, email, cellphone, topic, message) => {
  const template = `
  <!DOCTYPE html>
<html>

<head>
    <title>Verificación de cuenta</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,900;1,900&family=Ubuntu&display=swap"
        rel="stylesheet">
    <style>
        /* Estilos CSS */
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            font-size: 16px;
            line-height: 1.5;
            color: #333;
            font-family: 'Lato', sans-serif;
            font-family: 'Ubuntu', sans-serif;
            font-weight: 400;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding-top: 5%;
            /* este es el margen de arriba */
            /* background-color: #f4f4f4de; */
        }

        h1 {
            font-size: 35px;
            margin: 0 0 20px 0;
            color: #272727;
        }

        h2 {
            color: #ffffff;
        }

        p {
            margin: 0 0 20px 0;
        }

        a {
            color: #007bff;
            text-decoration: underline;
        }

        img {
            max-width: 100%;
            height: auto;
        }

        .hero {
            position: relative;
        }

        .contact-info {
            margin-top: 5%;
            background-color: rgb(220, 220, 220);
            text-align: center;
            border-radius: 10px;
            padding-top: 3%;
            padding-bottom: 3%;
            margin-left: 10%;
            margin-right: 10%;
            font-size: 18px;
        }

        .container-info {
            align-items: center;
            text-align: center;
            margin-bottom: 5%;
            margin-left: 7%;
            margin-right: 7%;
        }

        .subtitle-header {
            font-size: 20px;
            font-weight: bold;
        }

        .header {
            padding-top: 10%;
            align-items: center;
            text-align: center;
            margin-bottom: 5%;
            margin-left: 7%;
            margin-right: 7%;
        }

        .body-email {
            font-size: 16px;
            padding: 0% 6%;
        }

        .link-acces {
            display: block;
            color: #ffffff;
            padding-top: 3%;
            margin-bottom: 3%;
        }

        .button-mail {
            display: inline-block;
            padding: 10px 20px;
            background-color: #1D2C57;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
        }

        .footer {
            padding-top: 3%;
            padding-left: 6%;
            padding-right: 6%;
            font-size: 10px;
        }

        .footer-bar {
            background-color: #000000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 6%;
            padding-right: 6%;
            padding-top: 2%;
            padding-bottom: 0;
            color: #ffffff;
            margin-top: 5%;
        }
    </style>
</head>

<body>
    <div class="container">

        <div class="footer-bar">
            <h2>Datos recibidos</h2>
        </div>

        <div class="header">
            <h1>Hola, ${name} !</h1>
            <p class="subtitle-header">¡Muchas gracias por tomarte el tiempo de contactarme!</p>

        </div>
        <div class="container-info">
            <span>Me pondre en contacto contigo con los siguientes datos:</span>

            <div class="contact-info">
                <span><b>email:</b> ${email} </span>
                <br>
                <span><b>tel:</b> ${cellphone} </span>
            </div>

        </div>



        <div class="body-email">
            <span>Detalles de contacto:</span>
            <p><b>${topic}</b></p>
            <p>${String(message)}</p>
            <!-- <p>Si no has emitido esta solicitud, ignora el mensaje. ¡Gracias! </p> -->
            <span>Un abrazo,</span>
            <br>
            <span>Angel Marquez :D</span>
        </div>

        <div>
            <div class="footer-bar">
                <p><a class="link-acces" href="https://github.com/iamangelmp">github.com/iamangelmp</a></p>
                <p><a class="link-acces" href="https://www.linkedin.com/in/imangelmp/">@iamangelmp</a></p>
            </div>
            <div class="footer">
                <p>Este mensaje se envío de manera automática. Tenga en cuenta que el mensaje fue enviado a la siguiente
                    dirección de correo electrónico: <a href="alexis.mplt@outlook.es">alexis.mplt@outlook.es</a></p>

            </div>
        </div>

    </div>
</body>

</html>

  `;
  return template;
};

module.exports = contact_confirm_template;
