let state = {
    profilePage: {
        postsData: [
            {id: 1, message: "How are you?", likesCount: 15},
            {id: 2, message: "It's my first post", likesCount: 20},
            {id: 3, message: "I want to learn React", likesCount: 35},
            {id: 4, message: "Lorem ipsum", likesCount: 1},
        ],
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: "Arsen"},
            {id: 2, name: "Olya"},
            {id: 3, name: "Tigran"},
            {id: 4, name: "David"},
        ],
        messagesDataLeft: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Hello world"},
            {id: 4, message: "Lorem ipsum"},
        ],
        messagesDataRight: [
            {id: 1, message: "I love my wife"},
            {id: 2, message: "fg gfdgsdfg g fd"},
            {id: 3, message: "fg dfgdf dfg "},
            {id: 4, message: " fd sgdf dfg df "},
        ],
    },

    friends: [
        {name: "David", imgSource: "https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"},
        {name: "Tigran", imgSource: "https://freesvg.org/img/myAvatar.png"},
        {name: "Olga", imgSource: "https://st2.depositphotos.com/2703645/5669/v/950/depositphotos_56695985-stock-illustration-male-avatar.jpg"},
    ]
}

export default state;