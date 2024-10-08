const conf = {
    firebaseApiKey: String(import.meta.env.VITE_APP_FIREBASE_API_KEY),
    firebaseAuthDomain: String(import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN),
    firebaseProjectID: String(import.meta.env.VITE_APP_FIREBASE_PROJECT_ID),
    firebaseStorageBucket: String(import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET),
    firebaseMessagingSenderId: String(import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID),
    firebaseAppId: String(import.meta.env.VITE_APP_FIREBASE_APP_ID),
    firebaseMeasurementId: String(import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID),
    previewEndpoint: String(import.meta.env.VITE_PREVIEW_ENDPOINT),
    apiEndpoint: String(import.meta.env.VITE_BACKEND_API_ENDPOINT),
    imagekitPublicKey: String(import.meta.env.VITE_APP_IMAGEKIT_PUBLIC_KEY),
    imagekitUrlEndpoint: String(import.meta.env.VITE_APP_IMAGEKIT_URL_ENDPOINT)
};

export default conf;