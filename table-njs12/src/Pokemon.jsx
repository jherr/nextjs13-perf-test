"use client";

export default function Pokemon({ data, children }) {
  return (
    <a href="#" onClick={() => alert(JSON.stringify(data))}>
      {children}
    </a>
  );
}
