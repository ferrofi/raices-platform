interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

export default function FormInput({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
}: FormInputProps) {
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

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "12px 14px",
          border: "1px solid #CBD5E1",
          borderRadius: 10,
          fontSize: 15,
          outline: "none",
        }}
      />
    </div>
  );
}