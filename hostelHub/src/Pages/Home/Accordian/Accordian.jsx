const Accordian = () => {
  const accordianData = [
    {
      question: "What is a hostel management system?",
      answer:
        "A hostel management system is software designed to streamline operations like room allotment, tenant details, fee management, and more, ensuring efficient management of hostel facilities.",
    },
    {
      question: "What features does this hostel management system offer?",
      answer:
        "It includes room allocation, tenant management, fee tracking, maintenance requests, notifications, and detailed reports.",
    },
    {
      question: "How can I access the hostel management system?",
      answer:
        "You can access the hostel management system from any device with an internet connection.",
    },
    {
      question: "What are the benefits of using a hostel management system?",
      answer:
        "It simplifies hostel management, reduces manual work, and ensures efficient operations.",
    },
  ];

  return (
    <div className="container mx-auto my-6 space-y-2 lg:px-24">
      {accordianData.map((data, idx) => (
        <div key={idx} className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-semibold">
            {data.question}
          </div>
          <div className="collapse-content">
            <p>{data?.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
