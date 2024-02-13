import firebase from "firebase/app";
import 'firebase/firestore'

if(!firebase.getApp.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREABSE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREABSE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREABSE_PROJECT_ID
    })
}

export default firebase