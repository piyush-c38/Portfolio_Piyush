const StatsCounters = () => (
  <div className="flex flex-row md:flex-col gap-7 md:gap-10 mt-0 md:mt-6 w-full justify-center md:justify-start">
    <div>
      <div className="text-xl sm:text-2xl font-normal text-black/80 tracking-tight mb-1">
        <span className="font-semibold text-[26px] sm:text-[32px] md:text-[36px]">+10</span>
      </div>
      <div className="text-xs sm:text-base font-light text-black/50">
        Clients Served
      </div>
    </div>
    <div>
      <div className="text-xl sm:text-2xl font-normal text-black/80 tracking-tight mb-1">
        <span className="font-semibold text-[26px] sm:text-[32px] md:text-[36px]">+3</span>
      </div>
      <div className="text-xs sm:text-base font-light text-black/50">
        Years of Experience
      </div>
    </div>
  </div>
);

export default StatsCounters;
