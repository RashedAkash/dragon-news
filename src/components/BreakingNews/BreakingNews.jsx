import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] mt-6 p-5">
    <button className="btn btn-secondary">Latest</button>

      <Marquee className=" text-xl font-bold " speed={100}>
  I can be a React component, multiple React components, or just some text.
</Marquee>
    </div>
  );
};

export default BreakingNews;