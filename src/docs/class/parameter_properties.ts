class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // 아무것도 안 해도 된다.
  }
}

const p = new Params(1, 2, 3);
p.x; //
// p.y; // Property 'y' is protected and only accessible within class 'Params' and its subclasses.
// p.z; // Property 'z' is private and only accessible within class 'Params'.
