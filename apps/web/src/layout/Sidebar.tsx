import LogOutModal from '@components/modal/LogOutModal';
import TweetModal from '@components/modal/TweetModal';
import useModal from '@Hooks/useModal';
import { useNavLink } from 'constants/common';
import { PATH } from 'constants/path';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import classNames from 'src/utils/className';
const Sidebar = () => {
  const { isShow, toggleModal } = useModal();
  const { isShow:isOpen, toggleModal:LogOutToggle } = useModal();
  const router = useRouter();
  const { NavLink } = useNavLink();

  return (
    <div className=" hidden md:flex px-6 sticky h-screen top-0 z-10  flex-col justify-between ml-4  border-r-2 border-gray999">
      <div>
        <Link href={PATH.home}>
          <FaTwitter className="text-4xl text-blue-600 mt-4 " />
        </Link>

        <nav className="mt-7 ">
          <ul className="flex  flex-col flex-1 space-y-6">
            {NavLink &&
              NavLink.map((item) => (
                <li key={item.name} className="text-3xl ">
                  <Link
                    href={item.path}
                    className={classNames(
                      'flex items-center space-x-4',
                      router.pathname === item.path
                        ? 'text-blue-400'
                        : 'text-gray-800'
                    )}
                  >
                    <span>{item.Icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            <button
              type="button"
              className="bg-blue-500 text-2xl rounded-full text-white hover:bg-opacity-90 w-full py-4 text-[15px]"
              onClick={toggleModal}
            >
              Add Post
            </button>
          </ul>

          <TweetModal isOpen={isShow} closeModal={toggleModal} />
        </nav>
      </div>
      <div className="">
        <button
          type="button"
          className="bg-blue-500 text-2xl  text-white hover:bg-opacity-90 w-full py-4 text-[15px]"
          onClick={LogOutToggle}
        >
          Add Post
        </button>
        <LogOutModal isOpen={isOpen} closeModal={LogOutToggle} />
      </div>
    </div>
  );
};

export default Sidebar;
