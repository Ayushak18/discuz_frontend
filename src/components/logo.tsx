import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div>
      <div className="flex items-center px-[1rem] mt-4">
        <Image
          src={"/Project_Logo.svg"}
          width={30}
          height={30}
          alt="Project Logo"
        />
        <p className="text-[#dbdbdb] text-[18px] font-bold mx-[0.5rem]">
          Discuz
        </p>
      </div>
    </div>
  );
};

export default Logo;
