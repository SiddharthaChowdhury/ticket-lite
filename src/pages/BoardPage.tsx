import { DndContext, MouseSensor, useSensor, useSensors } from "@dnd-kit/core";
import { Fragment, useRef } from "react";
import { Col, Container, Row } from "react-grid-system";
import { useSelector } from "../data/context/useSelector";
import { Ticket } from "../stories/atom/ticket/Ticket";
import { Column } from "../stories/organism/column/Column";
import CreateColumnButton from "./partials/CreateColumnButton";
import { MainContainerStyled } from "./styles";
import { useBoardPage } from "./useBoardPage";

const BoardPage = () => {
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
  const { handleCreateNewTicket, handleTicketMove, handleTicketSelect } =
    useBoardPage();

  return (
    <Container>
      <Row>
        <Col md={12}>Top nav </Col>
      </Row>
      <Row>
        <Col md={9}>
          <MainContainerStyled>
            <DndContext onDragEnd={handleTicketMove} sensors={sensors}>
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
