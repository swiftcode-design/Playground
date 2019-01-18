
 export const createProject = (project) => {
     console.log('acton', project)
     return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to db
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid

        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', payload: project})
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', payload: err})
        })

     }
 }
