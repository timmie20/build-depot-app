const Testimonial = ({ item }) => {
  return (
    <div className="font-Inter w-[300px] bg-slate-50 p-4 md:w-[500px]">
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[24px] md:w-[41px]"
      >
        <path
          d="M13.983 19.3831H6.16634C6.29967 11.5998 7.83301 10.3165 12.6163 7.48312C13.1663 7.14979 13.3497 6.44979 13.0163 5.88312C12.6997 5.33312 11.983 5.14979 11.433 5.48312C5.79967 8.81646 3.83301 10.8498 3.83301 20.5331V29.5165C3.83301 32.3665 6.14967 34.6665 8.98301 34.6665H13.983C16.9163 34.6665 19.133 32.4498 19.133 29.5165V24.5165C19.133 21.5998 16.9163 19.3831 13.983 19.3831Z"
          fill="#D97F64"
        />
        <path
          d="M32.0163 19.3831H24.1996C24.3329 11.5998 25.8663 10.3165 30.6496 7.48312C31.1996 7.14979 31.3829 6.44979 31.0496 5.88312C30.7163 5.33312 30.0163 5.14979 29.4496 5.48312C23.8163 8.81646 21.8496 10.8498 21.8496 20.5498V29.5331C21.8496 32.3831 24.1663 34.6831 26.9996 34.6831H31.9996C34.9329 34.6831 37.1496 32.4665 37.1496 29.5331V24.5331C37.1663 21.5998 34.9496 19.3831 32.0163 19.3831Z"
          fill="#D97F64"
        />
      </svg>
      <p className="text-center font-normal text-sm md:text-base md:text-left">
        {item.comment}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 mt-2">
          <img
            src={item.avatarImg}
            alt=""
            className="w-[50px] h-[50px] rounded-[50%]"
          />
          <div>
            <h3 className="text-sm font-semibold">{item.name}</h3>
            <p className="text-[12px]">{item.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 2L15.59 8.26L22.5 9.27L17.5 14.14L18.68 21.02L12.5 17.77L6.32 21.02L7.5 14.14L2.5 9.27L9.41 8.26L12.5 2Z"
              fill="#FFB23F"
              stroke="#FFB23F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>{item.starRating}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
