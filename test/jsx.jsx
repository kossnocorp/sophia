export default function Hello() {
  const [loading, setLoading] = useState();

  return (
    <>
      <div>
        Hello, <World who="World" />
      </div>

      <div>
        Lorem Nullam necipsum <a href="https://example.com">dolor</a> sit amet,
        consectetur adipiscing elit.
      </div>

      <button
        onClick={() => {
          setLoading(true);

          console.log("Hello, World");

          class Hello {
            constructor(who) {
              console.log(`Hello, ${who}!`);
              this.wut();
            }

            wut() {
              console.log(this.nope);
              return [1, 2, 3];
            }

            nope() {
              return { no: "nah" };
            }

            self() {
              return this;
            }
          }

          new Hello("World");
        }}
        disabled
      >
        Hello!
      </button>

      {loading && <div>Loading...</div>}
    </>
  );
}

function World({ who }) {
  return <span>{who}</span>;
}
