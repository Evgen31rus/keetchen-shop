import IkitchenArguments from "../AvertisingCard";

type propsTypes ={
  backend: IkitchenArguments
}


export default function KitchenAvertisingCard({backend}:propsTypes) {
  return (
    <>

<div className={` w-[30%] min-h-[200px] border-box overflow-hidden flex flex-col mb-5`}>
    <div className={`w-[100%] h-[40%] bg-cover bg-center rounded-lg`}
    
    style={{
        backgroundImage: `url('${backend.photo}')`
    }}>

    </div>

<h3 className={`text-[1.3rem] font-bold mt-5 mb-5`}>{backend.title}</h3>
<p className={`w-[80%]`}>{backend.description}</p>
</div>

    </>
  );
}
