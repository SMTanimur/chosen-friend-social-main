/* eslint-disable @next/next/no-img-element */


interface UserAvatarProps {
  urlAvatar: string;
  className?: string;
}

const UserAvatar = ({ urlAvatar, className }: UserAvatarProps) => {
  return (
    <img
      src={
        urlAvatar ||
        'https://res.cloudinary.com/smtanimur/image/upload/v1668569827/jazila/xs8tbg5avdctdcejfyrs.jpg'
      }
      alt="avatar"
      className={className}
    />
  );
};

UserAvatar.defaultProps = {
  className: 'max-w-[550px] min-w-[350px] ',
};

export default UserAvatar;
