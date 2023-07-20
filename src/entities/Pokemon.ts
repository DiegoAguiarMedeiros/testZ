export default class Pokemon {
  public name: string;

  public url: string;

  constructor(props: Pokemon) {
    const { name, url } = props;

    if (!name || name.length === 0) {
      throw new Error("User: Pokemon name is invalid.");
    }

    if (!url || url.length === 0) {
      throw new Error("User: Pokemon url is invalid.");
    }

    Object.assign(this, props);
  }
}
