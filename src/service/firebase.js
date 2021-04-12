// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: process.env.REACT_APP_GOOGLE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_GOOGLE_PROJECTID,
  storageBucket: process.env.REACT_APP_GOOGLE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_GOOGLE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_GOOGLE_APPID,
  measurementId: process.env.REACT_APP_GOOGLE_MEASUREMENTID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
