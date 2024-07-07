import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import CopyToClipboard from "./CopyToClipboard";

export function RefferalModal() {
  const [open, setOpen] = useState<boolean>(false);
  console.log(open);
  const [referrer_name, setreferrer_name] = useState<string>();
  const [referrer_email, setReferrer_email] = useState<string>();
  const [referee_name, setreferee_name] = useState<string>();
  const [referee_email, setreferee_email] = useState<string>();
  const [refercode, setrefercode] = useState<boolean>(false);
  const [courseName, setCoureName] = useState<string>();
  const [referId, setReferId] = useState<string>("");

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    console.log("Hii");
    const { data } = await axios.post(
      "https://accredian-backend-task-4-7517.onrender.com/v1/api/referral/submit",
      {
        Referrer_name: referrer_name,
        Referrer_email: referrer_email,
        Referee_name: referee_name,
        Referee_email: referee_email,
        // refercode: referId,
        courseName: courseName,
      }
    );
    console.log(data);
    if (data.success) {
      console.log("Sucess");
      setrefercode(true);
      toast.success("Referal Id Successfully Created!");
      setReferId(uuidv4());
    }
  };
  // console.log(referrer_name, referrer_email, referee_name, referee_email);
  return (
    <>
      <button
        className=" ml-10 mb-12 xl:mt-6 h-9 xl:ml-4 text-sm bg-bottoncolor p-1 w-28 rounded-md text-white"
        onClick={() => {
          setOpen(true);
        }}
      >
        Refer Now
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative px-8 md:px-0 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <form
                className="max-w-sm mx-auto pt-12"
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="mb-5">
                  <label
                    htmlFor="referrer email"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="referrer email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Email"
                    required
                    onChange={(e) => {
                      setReferrer_email(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="referrer name"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="referrer name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                    placeholder="Name"
                    required
                    onChange={(e) => {
                      setreferrer_name(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="referee name"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Person's Name To Whom You Want To Refer
                  </label>
                  <input
                    type="referee name"
                    id="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                    placeholder="Name"
                    required
                    onChange={(e) => {
                      setreferee_name(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="referee email"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Person's Email To Whom You Want To Refer
                  </label>
                  <input
                    type="text"
                    id="referee email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                    placeholder="Name"
                    required
                    onChange={(e) => {
                      setreferee_email(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="course"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Course Name
                  </label>
                  <input
                    type="text"
                    id="course"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                    placeholder="Name"
                    required
                    onChange={(e) => {
                      setCoureName(e.target.value);
                    }}
                  />
                </div>
                {refercode ? (
                  // <p className="h-14 bg-red-400 flex items-center">{referId}</p>
                  <CopyToClipboard referId={referId} />
                ) : (
                  <></>
                )}
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="submit"
                  // onClick={(e) => handleSubmit(e)}
                >
                  Submit
                </button>
              </form>

              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
