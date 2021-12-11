import { useState } from "react";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import { XCircleIcon } from "@heroicons/react/outline";
import Modal from "../Modal";
import Image from "next/image";

export default function Comment({ comment, deleteComment }) {
  const [modalOpen, setModal] = useState(false);
  const [session, loading] = useSession();

  let deleteButton;
  if (session) {
    if (comment.author.email == session.user.email) {
      deleteButton = (
        <XCircleIcon
          className="text-red-500 ml-2 h-6 w-6 hover:text-red-400"
          onClick={() => setModal(true)}
        />
      );
    }
  }

  const modalAgree = async () => {
    deleteComment(comment._id);
  };

  return (
    <>
      <Modal
        modalOpen={modalOpen}
        modalAgree={modalAgree}
        setModal={setModal}
        title="Smazání komentáře"
        description="Opravdu chcete smazat tento komentář?"
      />
      <div className="p-4 rounded-lg border-2 border-gray-100 flex items-center mb-3">
        <div className="w-1/12">
          <Image
            src={comment.author.image}
            height="60"
            width="60"
            className="rounded-full"
            alt="Fotografie autora příspěvku"
          />
        </div>
        <div className="ml-3 w-full">
          <h3 className="text-md font-semibold">{comment.author.name}</h3>
          <p className="text-md text-gray-400">
            {format(new Date(comment.date), "dd/MM/yyyy")}
          </p>
          <p>{comment.text}</p>
        </div>
        {deleteButton}
      </div>
    </>
  );
}
