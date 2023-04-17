import { useState, useEffect, useRef } from "react";
import interact from "interactjs";

export default function DraggableContainer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 200, height: 100 });
  const draggableRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);

  useEffect(() => {
    const draggableElement = draggableRef.current;
    if (!draggableElement) return;

    // Make the element draggable
    interact(draggableElement).draggable({
      listeners: {
        move(event) {
          const { dx, dy } = event;
          setPosition((prevPosition) => ({
            x: prevPosition.x + dx,
            y: prevPosition.y + dy,
          }));
          xRef.current += dx;
          yRef.current += dy;
        },
      },
    });

    interact(draggableElement).resizable({
      edges: { top: true, left: true, bottom: true, right: true },
      listeners: {
        move: function (event) {
          let { x, y } = event.target.dataset;

          x = (parseFloat(x) || 0) + event.deltaRect.left;
          y = (parseFloat(y) || 0) + event.deltaRect.top;

          Object.assign(event.target.style, {
            width: `${event.rect.width}px`,
            height: `${event.rect.height}px`,
            transform: `translate(${x}px, ${y}px)`,
          });

          Object.assign(event.target.dataset, { x, y });
        },
      },
    });
  }, []);

  const { x, y } = position;

  return (
    <div
      ref={draggableRef}
      className="draggable w-1/4 bg-cyan-500 text-white rounded-lg p-2 touch-none select-none"
      style={{
        transform: `translate(${x}px, ${y}px)`,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
      data-x={xRef.current.toString()}
      data-y={yRef.current.toString()}
    >
      Draggable and Resizable element
    </div>
  );
}
