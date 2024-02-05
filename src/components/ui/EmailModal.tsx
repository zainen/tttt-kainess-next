import { EmailContainer } from "./EmailContainer";
import { Modal } from "./Modal";

type Props = {
  handleClick: () => void;
}

export const EmailModal = ({ handleClick }: Props) => {

  return (
    <Modal close={handleClick}>
      <EmailContainer borderColour="" inputClassname="" textBoxColour="bg-tttt-200" />
    </Modal>
  )
}