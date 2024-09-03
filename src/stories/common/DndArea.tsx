import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { PropsWithChildren } from "react";

const DndArea = ({ children }: PropsWithChildren) => {
  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;

    const fromColumnId = active.data.current?.fromColumnId;
    const toColumnId = over?.id.toString();
    const ticketId = active.id.toString();

    console.log("Dnd data", { fromColumnId, toColumnId, ticketId });
  };

  return <DndContext onDragEnd={handleDragEnd}>{children}</DndContext>;
};

export { DndArea };
