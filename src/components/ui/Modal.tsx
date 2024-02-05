import { Card } from "@/components/ui/Card";

type Props = React.PropsWithChildren<{
  close: () => void
}>

export const Modal = (props: Props) => {
  return (
    <div className="fixed w-full h-full z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" onClick={props.close}>
      <Card className="fixed z-40 border-none bg-primary-200 max-w-xl w-full  sm:rounded-xl">
        <div className="flex justify-end" >
          <button className="hover:text-tttt-200 text-right" onClick={props.close}>X</button>
        </div>
        {props.children}
      </Card>
    </div>
  )
}