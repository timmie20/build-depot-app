import Testimonial from "./Testimonial";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      comment:
      "BuildDepot saved our projects! Before, cash flow issues would stall everything. Now, we have the flexibility to manage projects efficiently without the pressure.",
      avatarImg:
        "https://images.unsplash.com/photo-1509305717900-84f40e786d82?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwcGVvcGxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
      name: "Sunday Joshua",
      location: "Lagos",
      starRating: "4.3",
    },
    {
      id: 2,
      comment:
      "Excellent customer service! Got my credit application approved in minutes. 5 stars!",
      avatarImg:
        "https://images.unsplash.com/photo-1508243529287-e21914733111?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJsYWNrJTIwcGVvcGxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
      name: "Umar Samuel",
      location: "Abuja",
      starRating: "5.0",
    },
    {
      id: 3,
      comment:
      "No drama, just cement. Easy credit, happy purchase. Will definitely use BuildDepot again.",
      avatarImg:
        "https://plus.unsplash.com/premium_photo-1682148296943-b0db4eadb8d7?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJsYWNrJTIwcGVvcGxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
      name: "Sani David",
      location: "America",
      starRating: "4.5",
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
