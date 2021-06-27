import "./styles.scss";
import copyImg from "../../assets/images/copy.svg";

type TRoomCode = {
  code: string;
};

export const RoomCode = (props: TRoomCode) => {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(props.code);
  };

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala -Md-FQhGyX0ZB9qnTJ7k</span>
    </button>
  );
};
