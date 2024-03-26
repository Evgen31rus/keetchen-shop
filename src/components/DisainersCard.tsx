import IDisainers from "../IDisainers";

type propsTypes = {
  props: IDisainers;

};
export default function DisainersCard({ props }: propsTypes) {
  return (
    <div
      className={`max-w-[100%] min-w-[360px] h-[100%] flex justify-center bg-cover rounded-md bg-center `}
      style={{
        backgroundImage: `url(${props.photo})`,

      }}
      ></div>
  );
}
