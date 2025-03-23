export class userModel {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static signup(data) {
        const { name, email, password } = data;
        const newUser = new userModel(users.length + 1, name, email, password);
        users.push(newUser);
        return newUser;


    }

    static signin(email, password) {
        const findUser = users.find(user => user.email == email && user.password == password)
        return findUser;

    }



}


const users = [];