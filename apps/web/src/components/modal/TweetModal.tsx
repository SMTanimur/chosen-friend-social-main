import React, { ChangeEvent } from 'react';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { Input } from '@components/input';
import FormGroup from '@components/form/FormGroup';
import UserChangeAvatar from '@components/fileInput/UserChangeAvatar';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { uploadImage } from '@Hooks/useUploadImage';
interface TweetModalProps {
  isOpen: boolean;
  closeModal: () => void;
}
const TweetModal = ({ isOpen, closeModal }: TweetModalProps) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      slug: '',
      image: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Vui lòng nhập tên danh mục!'),
      slug: Yup.string().required('Vui lòng chọn tên danh mục slug!'),
      image: Yup.string().required('Vui lòng chọn hình ảnh!'),
    }),
    onSubmit: async (values) => {
      try {
        toast.success('');
      } catch (error) {
        toast.error(error?.message);
      }
    },
  });

  const handleUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const newImgUrl = await uploadImage(e);
      formik.setFieldValue('image', newImgUrl);
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Tweet Post"
      className="max-w-[600px] w-[94%] min-w-[300px] bg-white top-1/3 absolute left-1/2 -translate-y-1/2 -translate-x-1/2 p-5 rounded-md"
      style={{ overlay: { backgroundColor: '#2424247f', zIndex: '1000' } }}
    >
      <button
        className="w-[140px]"
        onClick={() => {
          closeModal();
        }}
      >
        <span className="text-2xl">
          <MdClose />
        </span>
      </button>
      <div className="flex items-center mt-4 gap-x-2">
        <form action="">
          <FormGroup>
            <div className="flex items-center">
              <span className="text-[55px] text-gray-300">
                <FaUserCircle />
              </span>
              <Input
                placeholder="What's happening?"
                className="w-full py-1 placeholder:text-lg outline-none border-none "
              />
            </div>
          </FormGroup>

          <div className='w-full'>
            <UserChangeAvatar
              avatar={formik.values.image || ''}
              handleChangeAvatar={handleUploadImage}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default TweetModal;
