import { useState } from "react";

import { Button } from "@/components/ui/button";

const Test = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Test: Hello {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
};

export { Test };
