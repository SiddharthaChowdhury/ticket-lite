import { Col, Container, Row } from "react-grid-system";
import { MainContainerStyled } from "./styles";
import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { Fragment, useCallback, useRef } from "react";
import { useAppDispatch } from "../data/context/useAppDispatch";
import { useSelector } from "../data/context/useSelector";
import { Column } from "../stories/organism/column/Column";
import { TTicket } from "../data/state/types";
import { Ticket } from "../stories/atom/ticket/Ticket";
import CreateColumnButton from "./partials/CreateColumnButton";

const BoardPage = () => {
  const dispatch = useAppDispatch();
  const { structure, columns, tickets } = useSelector((state) => state);
  const { current: sensors } = useRef(
    useSensors(
      useSensor(MouseSensor, {
        // This is necessary to facilitate onClick on the draggable item
        activationConstraint: {
          delay: 300,
          tolerance: 0,
        },
      })
    )
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { over, active } = event;

      const fromColumnId = active.data.current?.fromColumnId;
      const toColumnId = over?.id.toString();
      const ticketId = active.id.toString();

      if (!!fromColumnId && !!toColumnId && !!ticketId) {
        dispatch({
          type: "MOVE_TICKET",
          fromColumnId,
          toColumnId,
          ticketId,
        });
      }
    },
    [dispatch]
  );

  const handleCreateNewTicket = useCallback(
    (ticket: Omit<TTicket, "id">) => {},
    []
  );

  const handleTicketSelect = useCallback((ticketId: string) => {}, []);

  return (
    <Container>
      <Row>
        <Col md={12}>Top nav </Col>
      </Row>
      <Row>
        <Col md={9}>
          <MainContainerStyled>
            <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
              {Array.from(structure.entries()).map(([columnId, ticketIds]) => {
                const col = columns.get(columnId);

                if (!col) {
                  console.error(
                    `Error! Column with id:${columnId} was not found.`
                  );
                  return <Fragment key={columnId} />;
                }

                return (
                  <Column
                    column={col}
                    onCreateNewTicket={handleCreateNewTicket}
                  >
                    {ticketIds.map((ticketId: string) => {
                      const ticket = tickets.get(ticketId);

                      if (!ticket) {
                        console.error(
                          `Error! Ticket with id:${columnId} was not found.`
                        );
                        return <Fragment key={`${columnId}-${ticketId}`} />;
                      }

                      return (
                        <Ticket
                          key={`${columnId}-${ticketId}`}
                          ticket={ticket}
                          columnId={columnId}
                          onTicketClick={handleTicketSelect}
                        />
                      );
                    })}
                  </Column>
                );
              })}
              <CreateColumnButton />
            </DndContext>
          </MainContainerStyled>
        </Col>
        <Col md={3}>Ticket view</Col>
      </Row>
    </Container>
  );
};

export { BoardPage };
