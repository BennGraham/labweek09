export default function Title({ title, subTitle }) {
  return (
    <div className="title-container">
      <div>{title}</div>
      <div>{subTitle}</div>
    </div>
  );
}
