import { BsTelephoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { BsChatRightQuoteFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";

const Nav = () => {
  const data = [
    { components: BsTelephoneFill, text: "6248 0838" },
    {
      components: BsWhatsapp,
      text: "8484 9948",
    },
    { components: IoMailSharp, text: "info@visibleone.com" },
  ];

  return (
    <div className="bg-red-500 relative">
      <h1 className="absolute text-2xl bg-inherit left-[300px]">Logoer</h1>
      <div className="w-full bg-[#EAEAEB]">
        <div className={"w-[85%] mx-auto py-2"}>
          <ul className="flex items-center justify-end space-x-5">
            {data.map((i, index) => (
              <li
                className={" flex flex-cols items-center space-x-2"}
                key={index}
              >
                <i.components className="text-[#2DC4EA]" />
                <p>{i.text}</p>
              </li>
            ))}
            <button className="text-white flex items-center px-2 py-[4px] rounded-sm bg-green-500 space-x-2">
              <BsChatRightQuoteFill />
              <p>Quote</p>
            </button>
            <select className="border border-[#2DC4EA] text-[#2DC4EA] bg-inherit pr-3 pl-2 outline-none  py-1">
              <option value="SG EN">SG EN</option>
            </select>
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex w-[93%] py-3 items-center justify-end space-x-5">
          <li>Home</li>
          <select className="bg-inherit outline-none pr-3">
            <option value="Services">Services</option>
          </select>
          <select className="bg-inherit outline-none pr-3">
            <option value="Company">Company</option>
          </select>
          <li>Company</li>
          <li>Blog</li>
          <select className="bg-inherit outline-none pr-3">
            <option value="Contacts">Contact Us</option>
          </select>
          <button className="pl-10">
            <BiSearchAlt2 className="text-xl" />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
