import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profileReducer";
const startState = {
    profile: null,
    status: "",
    postsData: [
        {id: 1, message: "How are you?", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 20},
        {id: 3, message: "I want to learn React", likesCount: 35},
        {id: 4, message: "Lorem ipsum", likesCount: 1},
    ],
}

test('posts quantity should be incremented', () => {

    const endState = profileReducer(startState, addPostActionCreator("Hello"))

    expect(endState.postsData.length).toBe(5);
    expect(endState.postsData[4].message).toBe("Hello");
    expect(endState.postsData[4].likesCount).toBe(0);
});

test('posts quantity should be decremented after deleting', () => {

    const endState = profileReducer(startState, deletePostActionCreator(1))

    expect(endState.postsData.length).toBe(3);
});
