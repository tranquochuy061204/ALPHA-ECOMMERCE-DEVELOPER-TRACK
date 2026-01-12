const FailReasonsBox = ({ imgLink, title, reason }) => {
  return (
    <div className="w-full overflow-hidden rounded-[8px]">
      <div>
        <img src={imgLink} className="w-full" />
      </div>

      <div className="p-[24px] bg-[#f7f7f7] text-center">
        <h4 className="text-[20px]! leading-base m-0 ">{title}</h4>
        <div className="bg-[#ffe3e3] py-[8px] px-[16px] round-[6px] overflow-hidden mt-[16px]md:mt-[24px] min-h-auto md:min-h-[180px]">
          <p className="subtitle m-0 flex items-center justify-center gap-[6px] font-[600] text-base">
            <span>Why it failed</span>
            <span>
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Vector_6.png?v=1760696853"
                alt=""
                className="w-full max-w-[24px]"
              />
            </span>
          </p>
          <p className="mt-[12px] text-base">{reason}</p>
        </div>
      </div>
    </div>
  );
};

export default FailReasonsBox;
