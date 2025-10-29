import { useState, type FC } from "react";
import { EditIcon, EyeIcon, TrashIcon } from "../assets/Icons";
import ViewModal from "./ViewModal";

export type TCardProps = {
  id: number | string;
  title: string;
  subTitle: string;
  created_at: string;
  onEdit: () => void;
  onDelete: () => void;
};

const Card: FC<TCardProps> = ({
  title,
  subTitle,
  created_at,
  onEdit,
  onDelete,
}) => {
  const [viewOpen, setViewOpen] = useState(false);

  return (
    <>
      <div className="w-[330px] h-[232px] bg-[#12151E] rounded-[30px] p-4 flex flex-col justify-between">
        <div className="overflow-hidden">
          <p className="text-base text-white line-clamp-2 font-medium">
            {title}
          </p>
          <p className="text-xs text-white mt-2 line-clamp-4">{subTitle}</p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <p className="text-xs text-white opacity-50">{created_at}</p>
          <div className="flex gap-2 items-center">
            <button
              onClick={onEdit}
              className="text-xs cursor-pointer text-white border border-white/50 rounded-[30px] flex justify-between items-center p-4 py-3 w-[118px]"
            >
              Edit
              <EditIcon />
            </button>
            <button
              onClick={onDelete}
              className="text-xs text-white border cursor-pointer border-white/50 rounded-full flex justify-between items-center h-10 w-10 p-3"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewOpen(true)}
              className="text-xs text-white border cursor-pointer border-white/50 rounded-full flex justify-between items-center h-10 w-10 p-3"
            >
              <EyeIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <ViewModal
        isOpen={viewOpen}
        onClose={() => setViewOpen(false)}
        title={title}
        subTitle={subTitle}
        created_at={created_at}
      />
    </>
  );
};

export default Card;
