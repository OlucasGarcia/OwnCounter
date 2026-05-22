import Button from "../Button";

export default function EmptyState({
    title,
    image,
}) {
    return (
        <div
            className="
        flex flex-col
        items-center
        justify-center
        mt-10
      "
        >
            <h2
                className="
          text-5xl
          font-bold
          mb-8
        "
            >
                {title}
            </h2>

            <img
                src={image}
                alt="Empty"
                className="w-[500px] mt-10"
            />
        </div>
    );
}