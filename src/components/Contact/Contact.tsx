const Contact = () => {
  return (
    <div className="glass  mt-5 mx-2 text-center px-4 pb-4 ">
      <h1 className="text-2xl md:text-4xl pt-7 pb-4  ">Contact us</h1>
      <div className=" bg-blue-300  text-center  grid grid-cols-1 md:grid-cols-2 justify ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.247570290038!2d80.85884607479731!3d26.832076963552375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bffa2fea5c721%3A0xa7cd27e5c3f3aa09!2sJ.B.%20Garden%20Purvideen%20Khera!5e0!3m2!1sen!2sin!4v1710179224452!5m2!1sen!2sin"
          loading="lazy"
          className="h-[50vh] w-[100%] md:w-auto p-5"
        ></iframe>

        <div>
          <h1 className="text-xl md:text-2xl pt-7 pb-4  ">
            Address : 545-k / 03 / 140 / 07 ,Purvindeer Khera ,Rajajipuram
          </h1>
          <h1 className="text-xl md:text-2xl pt-7 pb-4  ">
            Phone number : <a href="tel:8528014915">+91 8528014915</a> ,
            <a href="tel:7380484545">+91 7380484545</a>
          </h1>
          <h1 className="text-xl md:text-2xl pt-7 pb-4  ">
            Email : safespacecare@gmail.com
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
