class Observable {
  constructor(initialValue) {
    this._value = initialValue;
    this.observers = [];
  }

  set(value) {
    this._value = value;
    this.observers.forEach((observer) => observer(this._value));
  }
  subscribe(observer) {
    this.observers.push(observer);
  }

  value() {
    return this._value;
  }
}
