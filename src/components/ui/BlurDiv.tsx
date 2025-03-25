export default function BlurDiv() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none ">
      <div className="absolute -right-[30%] top-[10%] w-[50vw] h-[40vh] rounded-[100%] bg-platformGreen/40 blur-[20vh]" />
      <div className="absolute left-[30%] bottom-0 w-[50vw] h-[50vh] rounded-full bg-platformPurple/40 blur-[20vh]" />
      {/* <div className="absolute right-0 bottom-[20%] w-[10vw] h-[50vh] rotate-45 rounded-full bg-orange-600/50 blur-[15vh]" /> */}
    </div>
  );
}
