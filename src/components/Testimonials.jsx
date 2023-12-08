import Testimonial from "./Testimonial";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      comment:
        "I was really impressed with the quality of the materials I received from this site. They're the real deal and they delivered everything right to my doorstep. I'll definitely be using them again for my next project.",
      avatarImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "kevin heart",
      location: "Lagos",
      starRating: "4.3",
    },
    {
      id: 2,
      comment:
        "I was hesitant to buy building materials online, but this site made it so easy. The selection is amazing and the prices are unbeatable. I'm so glad I gave them a chance! ",
      avatarImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "James Bond",
      location: "Abuja",
      starRating: "5.0",
    },
    {
      id: 3,
      comment:
        "I was skeptical about using the Buy Now Pay Later feature, but it really helped me out when I was short on cash. The process was straightforward and I was able to get all the materials I needed without any stress.",
      avatarImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Rile Barwash",
      location: "America",
      starRating: "4.5",
    },
    {
      id: 4,
      comment:
        "I was really impressed with the quality of the materials I received from this site. They're the real deal and they delivered everything right to my doorstep. I'll definitely be using them again for my next project.",
      avatarImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Kira losarin",
      location: "lagos",
      starRating: "4.3",
    },
  ];
  return (
    <div className="flex flex-col mt-10 gap-10">
      <h1 className="text-center font-calSans font-semibold text-lg md:text-[32px]">
        The BuildDepot Experience: Testimonials
      </h1>
      <div className="grid grid-flow-col overflow-x-auto auto-cols-max gap-4 overscroll-contain">
        {data && data.map((item) => <Testimonial item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Testimonials;
