import type { FC } from "react";

interface TViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subTitle: string;
  created_at: string;
}

const ViewModal: FC<TViewModalProps> = ({
  isOpen,
  onClose,
  title,
  subTitle,
  created_at,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-[#12151E] text-white rounded-xl p-6 w-96 max-h-[80vh] overflow-auto shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-sm mb-4">{subTitle}</p>
        <p className="text-xs text-white/50 mb-4">Created at: {created_at}</p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewModal;
