const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")
    ('sk_test_51IoN77SGkL3g03hz75aEl1XTDHibL4Acw428qHXsVrEUloEgTAAENoztnOgjr3uGgkAim9lnOd8f1jbSXDilp3Yw00CuY5trrh');

//API SETTING UP
// - APP CONFIG
const app = express();

// - MIDDLEWARE
app.use(cors({ origin: true }));
app.use(express.json());

// - API ROUTES
app.get('/', (request, response) => response.status(200).send('hello world'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Congratulations! payment recieved for amount >>>>>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    //OK- CREATED
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// - LISTENER
exports.app = functions.https.onRequest(app);
//Example endpoint
//http://localhost:5001/e-comm-store-2bba5/us-central1/app