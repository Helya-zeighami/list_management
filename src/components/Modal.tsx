import { useState, useEffect, type FC } from "react";

type TModalProps = {
  isOpen: boolean;
  title: string;
  subTitle: string;
  onClose: () => void;
  onSave: (title: string, subTitle: string) => void;
};

const Modal: FC<TModalProps> = ({
  isOpen,
  title,
  subTitle,
  onClose,
  onSave,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newSubTitle, setNewSubTitle] = useState(subTitle);
  const [errors, setErrors] = useState<{ title?: string; subTitle?: string }>(
    {}
  );

  useEffect(() => {
    setNewTitle(title);
    setNewSubTitle(subTitle);
    setErrors({});
  }, [title, subTitle, isOpen]);

  const handleSave = () => {
    const newErrors: { title?: string; subTitle?: string } = {};

    if (!newTitle.trim()) newErrors.title = "Title cannot be empty";
    if (!newSubTitle.trim()) newErrors.subTitle = "Subtitle cannot be empty";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave(newTitle, newSubTitle);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#12151E] p-6 rounded-2xl w-[400px]">
        <h2 className="text-white text-lg mb-4">Edit Card</h2>

        <input
          className={`w-full p-2 mb-1 rounded bg-[#1E222B] text-white ${
            errors.title ? "border border-red-500" : ""
          }`}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Title"
        />
        {errors.title && (
          <p className="text-red-500 text-xs mb-2">{errors.title}</p>
        )}

        <textarea
          className={`w-full p-2 mb-1 rounded bg-[#1E222B] text-white ${
            errors.subTitle ? "border border-red-500" : ""
          }`}
          value={newSubTitle}
          onChange={(e) => setNewSubTitle(e.target.value)}
          placeholder="Subtitle"
          rows={4}
        />
        {errors.subTitle && (
          <p className="text-red-500 text-xs mb-2">{errors.subTitle}</p>
        )}

        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-500 text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded bg-blue-500 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
