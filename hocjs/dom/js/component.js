var component = {
  create: function (name, hanlder) {
    function BaseComponent() {
      return Reflect.construct(HTMLElement, [], BaseComponent);
    }

    BaseComponent.prototype = Object.create(HTMLElement.prototype);

    //Lifecycle Callback -> Vòng đời
    BaseComponent.prototype.constructor = BaseComponent;

    BaseComponent.prototype.connectedCallback = hanlder;

    customElements.define(name, BaseComponent);
  },
};
