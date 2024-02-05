interface Props extends React.HTMLAttributes<HTMLDivElement>   {
  title: string;
  isOpen: boolean
  handleClick: () => void
}

export const Dropdown = ({title, children, handleClick, isOpen, ...props}: Props) => {

  return (
    <div className={`relative inline-block text-left`}>
      <div>
        <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={handleClick}>
          {title}
          <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-tttt-200 px-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isOpen ? "" : "hidden"}`} role="menu" aria-orientation={props["aria-orientation"] ?? "vertical"} aria-labelledby="menu-button" tabIndex={-1}>
        <div className="py-1" role="none">
          {children}
        </div>
      </div>
    </div>
  )
}