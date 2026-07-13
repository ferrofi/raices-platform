import React from "react";

interface EntityFormProps {
  title: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  actions: React.ReactNode;
}

export default function EntityForm({
  title,
  children,
  onSubmit,
  actions,
}: EntityFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      <h2
        style={{
          margin: 0,
          color: "#172554",
          fontSize: 24,
        }}
      >
        {title}
      </h2>

      {children}

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 12,
          marginTop: 10,
        }}
      >
        {actions}
      </div>
    </form>
  );
}