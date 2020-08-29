import { observable, decorate } from "mobx"

export class Categories {
    categories = []

    get getCategories() {
        return this.categories
    }

    /**
     * @param {any[]} categories
     */
    set setCategories(categories) {
        this.categories = categories
    }
}

decorate(Categories, {
    categories: observable
})

export class User {
    user = null
    exist = false

    get getUser() {
        return this.user
    }
    /**
     * @param {object} user
     */
    set setUser(user) {
        this.user = user
        this.exist = user ? true : false
    }
}

decorate(User, {
    user: observable,
    exist: observable
})