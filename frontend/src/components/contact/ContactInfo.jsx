import { IoIosClose } from "react-icons/io";
import { useSelector } from "react-redux";

function ConatctInfo({ setIsContactInfoHidden }) {
    const { chatWith } = useSelector((state) => state.chat);
    return (
        <>
            <div className="h-14 flex pl-4 text-on-primary bg-primary items-center">
                <div className="flex gap-4  items-center">
                    <IoIosClose onClick={() => setIsContactInfoHidden(true)} className="text-2xl cursor-pointer " />
                    <p>ContactInfo</p>
                </div>
            </div>
            <div>
                <div className="avatar w-full">
                    <div className="w-40 mx-auto my-10 rounded-full">
                        <img src="https://img.freepik.com/premium-photo/portrait-cheerful-little-boy-with-curly-hair-tshirt-smiling-funny-carefree_2221-7628.jpg" />
                    </div>
                </div>
                <div className="flex flex-col gap-1 border-b-8 pb-5 border-secondary items-center">
                    <p className="text-2xl text-white">{chatWith?.name}</p>
                    <p>{`@${chatWith?.username}`}</p>
                </div>
                <div className="p-4 border-b-8 pb-5 border-secondary">
                    <p className="text-on-primary">About</p>
                    <p className="text-white ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ratione inventore similique culpa quidem unde, sequi dolorum fuga ea molestias!
                    </p>
                </div>


            </div>
        </>
    )
}
export default ConatctInfo;