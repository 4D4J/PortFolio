import Card_Contact from "../UI/card_contact";


function Contact() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="text-center sm:text-left mb-6 sm:mb-4">
        <h1 className="text-xl sm:text-2xl mb-2 sm:mb-4">Contact Me rigth now 🚀</h1>
        <p className="text-sm sm:text-base">If you're interested by my profile, i invite you to contact me with this Email or by using Discord or LinkdIn </p>
      </div>
      
      <div className="w-full flex justify-center">
        <Card_Contact />
      </div>

    </div>
  );
}   

export default Contact;