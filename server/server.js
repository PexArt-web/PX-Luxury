// const fetch = require('node-fetch')
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const SibApiV3Sdk = require('sendinblue-api');

const app = express();
const port = 3000; // Choose your port

app.use(bodyParser.json());

// Sendinblue API Key
const apiKey = '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';

// Configure Sendinblue client
const defaultClient = SibApiV3Sdk.ApiClient.instance;
defaultClient.authentications['api-key'].apiKey = apiKey;

// Define Sendinblue API instance
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// API endpoint to send email
app.post('/send-email', async (req, res) => {
    const { toEmail, subject, htmlContent } = req.body;

    // Create a Sendinblue email request
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.sender = { email: 'pexart74@gmail.com', name: 'PX Luxury' };
    sendSmtpEmail.to = [{ email: toEmail }];
    sendSmtpEmail.subject = subject;
    sendSmtpEmail.htmlContent = htmlContent;

    try {
        const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('Email sent successfully', response);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending email' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});