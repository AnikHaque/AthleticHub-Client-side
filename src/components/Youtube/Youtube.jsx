const Youtube = () => {
  return (
    <div className="flex justify-center items-center min-h-screen  py-10 bg-black">
      <div className="hidden  md:block">
        <iframe
          width="1400"
          height="650"
          src="https://www.youtube.com/embed/zNxi2s36tS0?si=WglBnlF7zCZItGTi"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className=" md:hidden">
        <iframe
          width="250"
          height="250"
          src="https://www.youtube.com/embed/zNxi2s36tS0?si=WglBnlF7zCZItGTi"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Youtube;
