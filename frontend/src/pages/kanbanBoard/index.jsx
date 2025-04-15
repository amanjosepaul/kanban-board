import "./kanbanBoardStyle.css";

const columns = [
  {
    title: "TO DO",
    color: "#1E88E5",
    cards: [
      { top: "Add Notes or Comments", bottom: "Seldim Said" },
      { bottom: "Seldim Said" },
      { bottom: "Seldim Said" },
      { bottom: "Seldim Said" },
    ],
  },
  {
    title: "IN PROGRESS",
    color: "#FFA726",
    cards: [
      { top: "Add Notes or Comments", bottom: "Seldim Said" },
      { bottom: "Seldim Said" },
    ],
  },
  {
    title: "DONE",
    color: "#7E57C2",
    cards: [
      { top: "Add Notes or Comments", bottom: "Seldim Said" },
      { bottom: "Seldim Said" },
      { bottom: "Seldim Said" },
    ],
  },
  {
    title: "APPROVED",
    color: "#43A047",
    cards: [
      { top: "Add Notes or Comments", bottom: "Seldim Said" },
      { bottom: "Seldim Said" },
    ],
  },
];

const KanbanBoard = () => {
  return (
    <div className="kanban-container">
      <h1 className="kanban-header">Jira Kanban Board</h1>
      <div className="kanban-grid">
        {columns.map((column, idx) => (
          <div
            key={idx}
            className="kanban-column"
            style={{ borderColor: column.color }}
          >
            <h2
              className="kanban-title"
              style={{ backgroundColor: column.color }}
            >
              {column.title}
            </h2>
            <div className="kanban-cards">
              {column.cards.map((card, index) => (
                <div
                  key={index}
                  className="kanban-card"
                  style={{ backgroundColor: column.color }}
                >
                  {card.top && <div className="card-top">{card.top}</div>}
                  {card.bottom && (
                    <div className="card-bottom">{card.bottom}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
