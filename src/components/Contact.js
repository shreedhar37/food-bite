const Contact = () => {
  return (
    <div className="contact">
      <h1 className="font-bold text-3xl p-4 m-4">Contact us</h1>
      <form>
        <input
          className="border-2 border-black p-2 m-2"
          type="text"
          placeholder="Name"
        ></input>
        <input
          className="border-2 border-black p-2 m-2"
          type="text"
          placeholder="Message"
        ></input>
        <button type="submit" className=" p-2 m-2 bg-black text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
