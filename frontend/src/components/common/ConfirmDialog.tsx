import Modal from "./Modal";
import PrimaryButton from "./PrimaryButton";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  open,
  title,
  message,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  return (
    <Modal
      open={open}
      title={title}
      onClose={onCancel}
    >
      <p
        style={{
          color: "#475569",
          marginBottom: 24,
          lineHeight: 1.6,
        }}
      >
        {message}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 12,
        }}
      >
        <PrimaryButton onClick={onCancel}>
          Cancelar
        </PrimaryButton>

        <PrimaryButton onClick={onConfirm}>
          Eliminar
        </PrimaryButton>
      </div>
    </Modal>
  );
}