import { DndContext, MouseSensor, useSensor, useSensors } from "@dnd-kit/core";
import { Fragment, useRef } from "react";
import { Col, Container, Row } from "react-grid-system";
import { useSelector } from "../data/context/useSelector";
import { Ticket } from "../stories/atom/ticket/Ticket";
import { Column } from "../stories/organism/column/Column";
import CreateColumnButton from "./partials/CreateColumnButton";
import { MainContainerStyled } from "./styles";
import { useBoardPage } from "./useBoardPage";
import TicketViewForm from "../stories/molecule/ticketViewForm/TicketViewForm";
import { CONST } from "../utils/constants";

const BoardPage = () => {
  const {
    structure,
    columns,
    tickets,
    ticketIdView: ticketView,
  } = useSelector((state) => state);
  const { current: sensors } = useRef(
    useSensors(
      useSensor(MouseSensor, {
        // This is necessary to facilitate onClick on the draggable item
        activationConstraint: {
          delay: 200,
          tolerance: 0,
        },
      })
    )
  );
  const {
    handleCreateNewTicket,
    handleTicketMove,
    handleTicketSelect,
    handleEditTicket,
  } = useBoardPage();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h2>Limited issue board 🦄🪽</h2>
        </Col>
      </Row>
      <Row>
        <Col md={9}>
          <MainContainerStyled>
            <DndContext onDragEnd={handleTicketMove} sensors={sensors}>
              {Array.from(structure.entries()).map(([columnId, ticketIds]) => {
                const column = columns.get(columnId);

                if (!column) {
                  console.error(
                    `Error! Column with id:${columnId} was not found.`
                  );
                  return <Fragment key={columnId} />;
                }

                return (
                  <Column
                    key={columnId}
                    column={column}
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
              {columns.size < CONST.MAX_NO_OF_COLS && <CreateColumnButton />}
            </DndContext>
          </MainContainerStyled>
        </Col>
        <Col md={3}>
          <TicketViewForm
            ticket={tickets.get(ticketView)}
            onSaveEdit={handleEditTicket}
          />
        </Col>
      </Row>
    </Container>
  );
};

export { BoardPage };
