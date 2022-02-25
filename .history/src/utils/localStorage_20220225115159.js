class LocalStrge {
  constructor() {
    this.storage = window.localStorage;
  }
  get = (key) => {
    return this.storage.getItem(key);
  };
  set = (key, value) => {
    if (typeof value === "string") this.storage.setItem(key, value);
    else if (typeof value === "object")
      this.storage.setItem(key, JSON.stringify(value));
  };
}

export default LocalStrge;
