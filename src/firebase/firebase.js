import firebase from 'firebase';

const config = { // initialize firebase
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};

////////////////////////////////////////////////////////////////////////

// database.ref('expenses').on('child_removed', snapshot => {
//     console.log('removed', snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_changed', snapshot => {
//     console.log('changed', snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_added', snapshot => { // also get called for existing ones
//     console.log('added', snapshot.key, snapshot.val());
// });
//
// // database.ref('expenses')
// //     .once('value')
// //     .then(snapshot => {
// //         const expenses = [];
// //         snapshot.forEach(childSnapshot => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val(),
// //             });
// //         });
// //         console.log(snapshot.val());
// //         console.log(expenses);
// //     });
//
// // database.ref('expenses').push({
// //     amount: '788.90',
// //     description: 'Dinner',
// //     note: 'Dinner with my friends',
// //     createdAt: 1300000,
// // });
// //
// // database.ref('expenses').push({
// //     amount: '5400',
// //     description: 'Rent',
// //     note: '',
// //     createdAt: 3800000,
// // });
// //
// // database.ref('expenses').push({
// //     amount: '124.80',
// //     description: 'Supermarket',
// //     note: '',
// //     createdAt: 8940000,
// // });
//
// ////////////////////////////////////////////////////////////////////////
//
// // database.ref('notes/-L2uFHqY0HAWcKNhskj9').update({
// //     title: 'Updated Course Topics',
// //     body: 'React Native, React.js, Node.js',
// // });
//
// // database.ref('notes').push({
// //     title: 'Course Topics',
// //     body: 'React Native, Angular, Node.js',
// // });
//
// // const notes = [{
// //     id: '12',
// //     title: 'First note',
// //     body: 'This is my note.',
// // }, {
// //     id: '761ase',
// //     title: 'Second note',
// //     body: 'This is another note.',
// // }];
// //
// // const firebaseNotes = {
// //     notes: {
// //         '12': {
// //             title: 'First note',
// //             body: 'This is my note.',
// //         },
// //         '761ase': {
// //             title: 'Second note',
// //             body: 'This is another note.',
// //         },
// //     },
// // };
// //
// // database.ref().set(notes);
//
// // const onValueChange = database.ref().on('value',
// //     snapshot => {
// //         const {name, job, location: {city, country}} = snapshot.val();
// //         console.log(snapshot.val());
// //         console.log(`${name} is a ${job} in ${city}, ${country}.`);
// //     }, err => {
// //         console.log('Error with data fetching', err);
// //     });
// //
// // setTimeout(() => {
// //     database.ref().off('value', onValueChange);
// // }, 5000);
//
// // database.ref().set({
// //     name: 'Zhiqi Pan',
// //     age: 21,
// //     isSingle: true,
// //     location: {
// //         city: 'Hong Kong',
// //         country: 'China',
// //     },
// // }).then(() => {
// //     console.log('Data is saved');
// // }).catch(err => {
// //     console.log('Set failed', err);
// // });
// //
// // database.ref().update({
// //     name: 'Mike',
// //     age: 39,
// //     job: 'Software developer',
// //     isSingle: null,
// //     'location/city': 'Guangzhou',
// // }).then(() => {
// //     console.log('Updated');
// // }).catch(err => {
// //     console.log('Update failed', err);
// // });
//
// // database.ref('isSingle').remove()
// //     .then(() => {
// //         console.log('Data is removed');
// //     })
// //     .catch(err => {
// //         console.log('Deletion failed', err);
// //     });

