interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Buscar...",
}: SearchBarProps) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        maxWidth: "350px",
        padding: "12px 16px",
        border: "1px solid #d1d5db",
        borderRadius: "10px",
        fontSize: "15px",
        outline: "none",
      }}
    />
  );
}