
const SatisfiedClientCard = ({client}) => {
    const {name, image, review, date } = client;
    const reviewType = review.type;
    const reviewDes = review.description;
    return (
        <div>
            <article className="flex flex-col w-[250px] lg:w-[300px] mr-9 p-4 transition border-2 rounded-xl hover:scale-105 border-sky-500  border-opacity-30 hover:border-opacity-100 hover:no-underline focus:no-underline ">
                <div className="w-full h-52 rounded-xl bg-gray-100 flex justify-center items-center ">
                    <img className="size-[130px] bg-slate-500 object-cover rounded-full hover:blur-[2px] duration-500" src={image || 'https://source.unsplash.com/200x200/?fashion?2' } alt="avatar navigate ui" />
                </div>
                <div className="flex flex-col flex-1 py-6">
                    <a rel="noopener noreferrer"  aria-label="Te nulla oportere reprimique his dolorum"></a>
                    <p rel="noopener noreferrer"  className="text-[20px] font-semibold tracking-wider uppercase hover:underline ">{name}</p>
                    <h3 className="flex-1 py-2 text-lg font-normal leading-snug">{reviewDes.slice(0, 37)}</h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                        <span>{date}</span>
                        <span>{reviewType}</span>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default SatisfiedClientCard;