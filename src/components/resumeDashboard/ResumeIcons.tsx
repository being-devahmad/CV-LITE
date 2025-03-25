export function NewResumeIcon() {
  return (
    <div className="w-full h-auto aspect-square bg-blue-500 rounded-xl p-2 flex items-center justify-center">
      <svg
        className="w-[8vw] md:w-[5vw] lg:w-[4vw] h-[8vw] md:h-[5vw] lg:h-[4vw]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.995 13.7H12.005M8.295 13.7H8.305M8.295 16.7H8.305"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.995 16.7H12.005M15.695 13.7H15.705M15.695 16.7H15.705"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function ExistingResumeIcon() {
  return (
    <div className="w-full h-auto aspect-square bg-emerald-500 rounded-xl p-2 flex items-center justify-center">
      <svg
        className="w-[8vw] md:w-[5vw] lg:w-[4vw] h-[8vw] md:h-[5vw] lg:h-[4vw]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 13H13M7 17H11"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
