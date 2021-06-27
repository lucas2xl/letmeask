import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type TFirebaseQuestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHightLighted: boolean;

    likes: Record<
      string,
      {
        authorId: string;
      }
    >;
  }
>;

type TQuestion = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHightLighted: boolean;
  likeCount: number;
  likeId: string | undefined;
};
export const useRoom = (roomId: string) => {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<TQuestion[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on("value", (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: TFirebaseQuestions =
        databaseRoom.questions ?? {};
      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHightLighted: value.isHightLighted,
            isAnswered: value.isAnswered,
            likeCount: Object.values(value.likes ?? {}).length,
            likeId: Object.entries(value.likes ?? {}).find(
              ([key, like]) => like.authorId === user?.id
            )?.[0],
          };
        }
      );

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);

      return () => {
        roomRef.off("value");
      };
    });
  }, [roomId, user?.id]);

  return { questions, title };
};
