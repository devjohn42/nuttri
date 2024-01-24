import Card from "./global/Card";

const Benefits = () => {
  return (
    <div className=" lg:h-screen py-12 flex justify-center items-center flex-col gap-y-8">
      <h2 className="font-bold">O que nós te ofereçemos?</h2>
      <div className="grid grid-rows-2 grid-cols-3 gap-6 cursor-pointer">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>


      </div>

    </div>
  )
}

export default Benefits