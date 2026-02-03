interface DatabaseTableProps {
  name: string;
  fields: string[];
}

export const DatabaseTable = ({ name, fields }: DatabaseTableProps) => {
  return (
    <div className="db-table">
      <div className="db-table-header">{name}</div>
      {fields.map((field, index) => (
        <div key={index} className="db-field">
          {field}
        </div>
      ))}
    </div>
  );
};
