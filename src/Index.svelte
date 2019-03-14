<form>
  <div>
    heyho {name}
  </div>
  <div>
    Count of agents {$count}
  </div>
  <Nested />
</form>

<script>
  import { count } from "./stores.js";
  import Nested from "./Nested.svelte";

  export let name = "";

  export const increment = () => {
    count.update(n => n + 1);
  };
</script>

<style>
  :global(form) {
    color: tomato;
  }
</style>
