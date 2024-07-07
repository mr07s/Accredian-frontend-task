import { useState } from "react";
import clipboard from "../assets/clipboard-line.svg";
import checkline from "../assets/check-line.svg";
export const CopyToClipboard = ({ referId }: { referId: string }) => {
  const newreferId = referId.slice(0, 20);
  console.log(referId);
  const [copybtn, setCopybtn] = useState<boolean>(false);
  const handleCopy = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    await navigator.clipboard.writeText(referId);
    setCopybtn(true);
    setTimeout(() => {
      setCopybtn(false);
    }, 2000);
  };
  return (
    <div className="w-full pb-4">
      <div className="relative">
        <label htmlFor="copyinput" className="sr-only">
          Label
        </label>
        <input
          id="copyinput"
          type="text"
          className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          value={newreferId + "..."}
          readOnly
        />

        <button
          className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 rounded-lg p-2 inline-flex items-center justify-center"
          onClick={(e) => handleCopy(e)}
        >
          {copybtn ? (
            <img src={checkline} alt="check image" className="h-4 w-4" />
          ) : (
            <img src={clipboard} alt="copy image" className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CopyToClipboard;
