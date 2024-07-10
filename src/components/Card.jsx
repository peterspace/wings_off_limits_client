const Card = ({ src, number, title }) => {
  return (
    <div className="w-[300px] overflow-hidden shrink-0 rounded-lg flex flex-col items-start justify-start gap-[10px_0px] text-center text-base text-white font-helvetica-neue">
      <img
        className="self-stretch rounded-3xs max-w-full overflow-hidden shrink-0 object-cover rounded-lg"
        loading="lazy"
        alt=""
        src={src}
      />
      <div className="overflow-hidden flex flex-row items-start justify-start py-0 px-2 box-border gap-2">
        <div className="self-stretch relative tracking-[-0.41px] leading-[22px] rounded-lg bg-slate-800 px-2">
         {number}
        </div>
        <div className="w-full relative text-xs tracking-[-0.41px] leading-[22px] text-crimson inline-block">
         {title}
        </div>
      </div>
    </div>
  );
};

export default Card;
