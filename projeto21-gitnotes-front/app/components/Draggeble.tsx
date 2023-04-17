import interact from "interactjs";

export default function DraggableComponent() {
  const slider = interact(".slider");
  slider.draggable({
    origin: "self",
    inertia: true,
    modifiers: [
      interact.modifiers.restrict({
        restriction: "self",
      }),
    ],
    listeners: {
      move(e) {
        const sliderWidth = interact.getElementRect(e.target).width;
        const value = e.pageX / sliderWidth;

        e.target.style.paddingLeft = value * 100 + "%";
        e.target.setAttribute("data-value", value.toFixed(2));
      },
    },
  });

  return (
    <div
      className="slider h-4 w-full my-6 mx-auto rounded-lg bg-cyan-600 relative
						before:content-[''] before:block before:relative before:top-0 before:w-8 before:h-8 before:-ml-4 before:rounded-lg before:bg-inherit before:border-solid before:border-1 before:border-white
						after:content-[attr(data-value)] after:absolute after:-top-6 after:w-8 after:leading-4 after:-ml-4 after:text-center
					"
    ></div>
  );
}
