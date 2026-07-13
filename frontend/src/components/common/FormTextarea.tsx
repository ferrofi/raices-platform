interface FormTextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}

export default function FormTextarea({
  label,
  value,
  onChange,
  placeholder = "",
  rows = 4,
}: FormTextareaProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        marginBottom: 18,
      }}
    >
      <label
        style={{
          fontWeight: 600,
          color: "#334155",
        }}
      >
        {label}
      </label>

      <textarea
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "12px 14px",
          border: "1px solid #CBD5E1",
          borderRadius: 10,
          fontSize: 15,
          outline: "none",
          resize: "vertical",
          fontFamily: "inherit",
        }}
      />
    </div>
  );
}