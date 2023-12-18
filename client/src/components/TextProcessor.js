import React, { useState } from "react";

function TextProcessor() {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default TextProcessor;
