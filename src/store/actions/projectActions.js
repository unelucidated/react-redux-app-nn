export const createProject = (project) => {
    console.log(project);
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        //asynchronous call to add
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((error) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error });
        })
    }
};