export default function StudentCard({ studentData }) {
  const { studentId, name, school, url } = studentData;
  return (
    <div className="student-card">
      <a href={url} target="_blank" rel="noreferrer">
        <div>{name}</div>
      </a>
      <div>{studentId}</div>
      <div>{school}</div>
    </div>
  );
}
