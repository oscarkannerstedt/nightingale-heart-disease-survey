import 'dotenv/config';
import jwt from 'jsonwebtoken';
import util from 'util';
import querystring from 'querystring';
import { v4 as uuidv4 } from 'uuid';

// **NOTE!** In a real production app you would want these to be sourced from real environment variables. The .env file is just
// a convenience for development.
const rksProjectId = process.env.RKS_PROJECT_ID;
const rksServiceAccount = process.env.RKS_SERVICE_ACCOUNT;
const privateKey = process.env.RKS_PRIVATE_KEY;

const baseUrl = 'https://designer.mydatahelps.org';
const tokenUrl = `${baseUrl}/identityserver/connect/token`;

async function getServiceAccessToken() {

    const assertion = {
        "iss": rksServiceAccount,
        "sub": rksServiceAccount,
        "aud": tokenUrl,
        "exp": Math.floor(new Date().getTime() / 1000) + 200,
        "jti": uuidv4()
    };

    var signedAssertion;
    try {
        signedAssertion = jwt.sign(assertion, privateKey, { algorithm: 'RS256' });
    }
    catch (err) {
        console.log(`Error signing JWT. Check your private key. Error: ${err}`);
        return null;
    }

    const payload = {
        scope: "api",
        grant_type: "client_credentials",
        client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
        client_assertion: signedAssertion
    };

    const response = await fetch(tokenUrl, { method: "POST", headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: querystring.stringify(payload) });

    if (!response.ok) {
        const error = `Get service access token failed. ${response.status} - ${await response.text()}`;
        throw new Error(error);
    }

    const data = await response.json();
    return data.access_token;
}


async function getFromApi(serviceAccessToken, resourceUrl, queryParams = {}, raiseError = true) {

    const url = `${baseUrl}${resourceUrl}`
    const response = await fetch(url, {
        headers: {
            "Authorization": `Bearer ${serviceAccessToken}`,
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        },
        queryParams: queryParams,
    });

    if (!response.ok && raiseError) {
        const error = `API call to ${url} failed. ${response.status} - ${await response.text()}`;
        throw new Error(error);
    }

    return { data: await response.json(), status: response.status };
}

// Get a participant access token for the specified participant
// Used for MyDataHelps Embeddables ONLY
async function getParticipantAccessToken(serviceAccessToken, participantID, scopes) {

    const payload = {
        "scope": scopes,
        "grant_type": "delegated_participant",
        "participant_id": participantID,
        "client_id": "MyDataHelps.DelegatedParticipant",
        "client_secret": "secret",
        "token": serviceAccessToken,
    }

    const response = await fetch(tokenUrl, { method: "POST", headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: querystring.stringify(payload) });

    if (!response.ok) {
        const error = `Get participant access token failed. ${response.status} - ${await response.text()}`;
        throw new Error(error);
    }

    const data = await response.json();
    return data.access_token;
}

// Use this utility if you ever need to print a response for debugging
function logResponse(response) {
    console.log(util.inspect(response, { colors: true, depth: 3 }));
}

async function quickstart() {
    var url;
    var response;

    // Get a service access token, needed for all API calls.
    const serviceAccessToken = await getServiceAccessToken();
    console.log('Obtained service access token:');
    console.log(serviceAccessToken);

    // Get all participants
    url = `/api/v1/administration/projects/${rksProjectId}/participants`;
    response = await getFromApi(serviceAccessToken, url);
    const participants = response.data;
    console.log(`\nTotal Participants: ${participants.totalParticipants}`);

    // Get a specific participant by identifier. We disable 'raiseError' here
    // so we can handle the 404 case ourselves.
    const participantIdentifier = "YOUR_PARTICIPANT_IDENTIFIER"

    if (participantIdentifier != "YOUR_PARTICIPANT_IDENTIFIER") {
        url = `/api/v1/administration/projects/${rksProjectId}/participants/${participantIdentifier}`;
        response = await getFromApi(serviceAccessToken, url, {}, false);
        if (response.status === 404) {
            console.log("\nParticipant not found.");
        } else {
            const participant = response.data;
            console.log(`\nParticipant Found. ID: ${participant.id}`);

            // NOTE: This piece is only necessary when using MyDataHelps Embeddables in a custom app. 
            // Most API use cases do NOT require a participant token.
            // Be sure to:
            // 1. Use the internal ID field (from participant.id above) and NOT participantIdentifier
            // 2. Request the correct scope(s) for your needs.
            const scopes = "Participant:read SurveyAnswers:read"
            const participantAccessToken = await getParticipantAccessToken(serviceAccessToken, participant.id, scopes);
            console.log(`\nObtained participant access token for ${participant.id}: ${participantAccessToken}`);
        }
    }
}


quickstart();
