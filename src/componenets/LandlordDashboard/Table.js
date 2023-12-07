import React from "react";
import img from "../../assets/Frame 267.png";
const users= [
    {
        image: img,
        name:"ahmed",
        email:"ahmed@gmail.com",
        password:"ahmed"
    },
    {
        image: img,
        name:"Ali",
        email:"ali@gmail.com",
        password:"ali123"
    },
    {
        image: img,
        name:"Ayesha",
        email:"Ayesha@gmail.com",
        password:"Ayesha"
    }
]




const Table = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">

      <tbody className="bg-white divide-y  divide-gray-200">
        {users.map((user) => (
          <tr key={user.id}>
            <div className="flex px-4 py-4 gap-4 ">
            <div className="md:w-12 w-16 h-16 md:h-12">
              <img
                alt="gallery"
                className="w-full  h-full rounded-lg object-center block"
                src={user.image}
              />
            </div>
                <div className="flex flex-col pt-1 gap-1">
                    <h1 className=" text-sm font-medium leading-4 whitespace-nowrap text-[#434146]">Manger Name</h1>
            <td className=" text-base font-medium leading-4 text-[#18171B] whitespace-nowrap">{user.name}</td>
            </div>
            </div>
            
            <td className="  px-6 py-4 whitespace-nowrap"> <div className="flex flex-col  text-[#18171B] text-base font-medium leading-4 gap-1"><span className="text-[#434146] text-sm font-medium leading-4 whitespace-nowrap ">Email</span>{user.email} </div> </td>
            <td className="px-6 py-4 whitespace-nowrap"> <div className="flex flex-col text-[#18171B] text-base font-medium leading-4 gap-1"><span className=" text-[#434146] text-sm font-medium leading-4 whitespace-nowrap">Password</span> {user.password} </div></td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-row gap-4 justify-center items-center">
            <button
                  type="submit"
                  className="flex justify-center p-2 gap-[8px]  text-[#CD2424] w-[130x] h-full border border-[#CD2424]   rounded-md text-base  text-center font-bold items-center  mb-2 "
                >
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M6.25 19.0006V19V6V5.5H5.75H5.25V4.5H9.75H10.25V4V3.5H15.25V4V4.5H15.75H20.25V5.5H19.75H19.25V6V19C19.25 19.4162 19.1075 19.7604 18.8084 20.0594C18.5094 20.3585 18.1658 20.5005 17.7506 20.5H17.75H7.75C7.33379 20.5 6.98962 20.3575 6.69055 20.0584C6.3915 19.7594 6.2495 19.4158 6.25 19.0006ZM18.25 6V5.5H17.75H7.75H7.25V6V19V19.5H7.75H17.75H18.25V19V6ZM11.25 8.5V16.5H10.25V8.5H11.25ZM15.25 8.5V16.5H14.25V8.5H15.25Z" fill="#FDFCFF" stroke="#CD2424"/>
</svg>
Remove
                </button>
    
<button
                  type="submit"
                  className="flex justify-center p-2 gap-[8px]  text-[#17062F] w-[130px] h-full border border-[#17062F]   rounded-md text-base font-bold text-center  items-center  mb-2 "
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M7.75 15.9928V15.9922V3.99219C7.75 3.57598 7.89249 3.23181 8.19156 2.93274C8.49061 2.63369 8.83424 2.49169 9.24939 2.49219H9.25H18.25C18.6662 2.49219 19.0104 2.63467 19.3094 2.93374C19.6085 3.23279 19.7505 3.57643 19.75 3.99158V3.99219V15.9922C19.75 16.4084 19.6075 16.7526 19.3084 17.0516C19.0094 17.3507 18.6658 17.4927 18.2506 17.4922H18.25H9.25C8.83379 17.4922 8.48962 17.3497 8.19056 17.0506C7.8915 16.7516 7.7495 16.4079 7.75 15.9928ZM8.75 15.9922V16.4922H9.25H18.25H18.75V15.9922V3.99219V3.49219H18.25H9.25H8.75V3.99219V15.9922ZM3.75 19.9928V19.9922V6.49219H4.75V19.9922V20.4922H5.25H15.75V21.4922H5.25C4.83379 21.4922 4.48962 21.3497 4.19056 21.0506C3.8915 20.7516 3.7495 20.4079 3.75 19.9928Z" fill="#434146" stroke="#17062F"/>
</svg>
Copy Link
                </button>     
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
