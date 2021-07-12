type OPTION = {
  option: String;
};
export function General({ option }: OPTION) {
  return (
    <button className="bg-grey-extralight rounded ml-4 mr-4 mb-4 sm:w-3/6 w-5/6">
      <p className="font-extrabold text-white break-all p-4">{option}</p>
    </button>
  );
}
