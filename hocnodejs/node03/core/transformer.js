class Transformer {
  #data; //Thuộc tính private (ES12)
  constructor(resource) {
    //resource là 1 mảng
    //resource là object
    if (Array.isArray(resource)) {
      this.#data = resource.map((instance) => this.response(instance));
    } else {
      this.#data = this.response(resource);
    }

    return this.#data;
  }
}
module.exports = Transformer;
