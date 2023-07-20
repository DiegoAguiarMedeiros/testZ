export default class Pokemon {
  public ability: {
    name: string;
    url: string;
  };
  constructor(props: Pokemon) {
    const { ability } = props;

    if (!ability.name || ability.name.length === 0) {
      throw new Error("User: Pokemon ability name is invalid.");
    }

    if (!ability.url || ability.url.length === 0) {
      throw new Error("User: Pokemon ability url is invalid.");
    }

    Object.assign(this, props);
  }
}
