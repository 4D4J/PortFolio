import Card_Contact from "../UI/card_contact";


function Contact() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="flex flex-col items-center sm:text-left mb-6 sm:mb-4">
        <h1 className="text-xl sm:text-2xl mb-2 sm:mb-4">Contact Me Rigth now 🚀</h1>
      </div>
      
      <div className="w-[20rem] min-w-[10rem]">
        <form className="w-full mb-8">
          <div className="mb-4">
            <input 
              type="email"
              placeholder="Your email"
              className="w-[15rem] p-2 rounded bg-zinc-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text" 
              placeholder="Subject"
              className="w-[15rem] p-2 rounded bg-zinc-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full h-[8rem] p-2 rounded bg-zinc-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button 
            type="submit"
            className="w-[10rem] bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="w-full flex justify-center">
        <Card_Contact />
      </div>

    </div>
  );
}   

export default Contact;