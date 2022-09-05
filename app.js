
const nodemailer = require('nodemailer');

// Generate SMTP service account from ethereal.email
nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
    }

    console.log('Credentials obtained, sending message...');

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'alta55@ethereal.email',
            pass: 'PG9xjC8msNhPFxuUXy'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // Message object
    let message = {
        from: 'Ishmael <ishmaelnjihia@gmail.com>',
        to: 'Nganga <nganganjihia1@gmail.com>',
        subject: 'Greetings!',
        text: 'Hello Nganga, How are you going?',
        html: '<p><b>Hello</b> to myself!</p>'
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }

        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    })
});