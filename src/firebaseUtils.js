import firebase from 'firebase';

export const init = () => {
  var config = {
    apiKey: "AIzaSyBkVjvkbGfvPcwUC-szp_yx_JWmhUez6Gs",
    authDomain: "why-do-we-need-hooks.firebaseapp.com",
    databaseURL: "https://why-do-we-need-hooks.firebaseio.com",
    projectId: "why-do-we-need-hooks",
    storageBucket: "why-do-we-need-hooks.appspot.com",
    messagingSenderId: "142216739935"
  };
  firebase.initializeApp(config);
  incrementCounter();
}

export const getFirestore = () => firebase.firestore();

export const getCountRef = () => getFirestore().collection('counter').doc('counter');

export const updateValue = newValue => getCountRef().update({
  value: typeof newValue === 'string' ? parseInt(newValue) : newValue,
  time: new Date().toLocaleString(),
});

const incrementCounter = () => {
  const ref = getCountRef();
  ref.get().then((doc) => {
    const { value } = doc.data();
    return updateValue(value + 1);
  });
  setTimeout(() => incrementCounter(), 1000);
};
