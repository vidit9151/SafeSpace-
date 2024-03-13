const FooterCopyright = () => {
  const date = new Date();

  return (
    <div className="text-center text-sm">
      <hr />
      <p className="shadow-inner border-2  bg-blue-300 shadow-black rounded-full">
        Copytight SafeSpace &copy; {date.getFullYear()}
      </p>
    </div>
  );
};

export default FooterCopyright;
