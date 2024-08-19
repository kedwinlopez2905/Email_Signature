function Linkicon({ imgurl, linkname }) {
  return (
    <label className="btn px-4 btn-sm normal-case badge badge-default round-full mr-4 rounded-3xl">
      <div className="flex justify-center items-center">
        {imgurl && (
          <img src={imgurl} alt="facebook" className="w-6 h-6 rounded-full" />
        )}
        <h1 className="ml-2 ">{linkname}</h1>
      </div>
    </label>
  );
}

export default Linkicon;
