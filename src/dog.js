// @flow

class Dog {

  name: string

  constructor(name: string) {
    this.name = name
  }

  bark() {
    return `wah wah I am ${this.name}`
  }
}

export default Dog
