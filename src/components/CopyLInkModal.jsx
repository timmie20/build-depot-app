import { useEffect, useState } from "react"

const CopyLInkModal = ({ setOpenLinkModal, url }) => {
  const [isCopied, setIsCopied] = useState(false)
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth)
    
  const copyToClipboard = async (text) => {
    if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text)
    } else {
        return document.execCommand('copy', true, text)
    }
  }

  const handleCopyClick = () => {
    copyToClipboard(url)
        .then(() => {
            setIsCopied(true)
            setTimeout(() => {
                setIsCopied(false)
            }, 1500)
        })
        .catch((err) => {
            console.log(err)
        })
  }

  return (
    <div className="w-full bg-slate-700/70 p-3 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer">
      <div className="flex flex-col gap-4 bg-white px-3 py-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden md:gap-7 md:px-5 md:py-10">
        <div className="flex items-center justify-between bg-slate-100 p-2 rounded-md">
            {displayWidth > 476 ? <p className="text-[15px] text-slate-500">{url.length < 46 ? url : url.slice(0, 46) + '...'}</p> :
            <p className="text-[15px] text-slate-500">{url.length < 46 ? url : url.slice(0, 20) + '...'}</p>}
            <button onClick={handleCopyClick} className={`w-fit flex items-center justify-center py-2 px-3 ${isCopied ? 'bg-[#48C546]' : 'bg-orange-clr-full'} rounded-md text-white`}>
                {isCopied ? 'Copied!' : 'Copy Link'}
            </button>
        </div>
          <button
            className="w-[80px] py-2 px-3 border-[1px] border-orange-clr-full rounded-md text-orange-clr-full"
            onClick={() => setOpenLinkModal(false)}
          >
            Close
          </button>
      </div>
    </div>
  )
}

export default CopyLInkModal