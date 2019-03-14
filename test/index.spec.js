import test from "ava";
import { MyComponent } from "./build/components.js";

test("passed name property", async t => {
  const name = "My Name";

  const mycomponent = new MyComponent({
    target: document.body,
    props: {
      name: name
    }
  });

  t.is(mycomponent.name, "My Name");
});
