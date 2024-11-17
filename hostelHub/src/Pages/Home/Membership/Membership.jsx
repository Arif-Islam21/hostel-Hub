import SectionTitle from "../../../Components/SectionTitle";
import MemberCard from "./MemberCard";

const Membership = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"Be Us, Join Now"}
        heading={"special offer to join us"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 lg:mx-6">
        <MemberCard
          khicuri={true}
          snaks={true}
          plan={"Silver"}
          charge={"4.99"}
        />
        <MemberCard
          khicuri={true}
          snaks={true}
          vaji={true}
          plan={"Gold"}
          charge={"7.99"}
        />
        <MemberCard
          plan={"Platinum"}
          khicuri={true}
          snaks={true}
          vaji={true}
          roast={true}
          biryani={true}
          charge={"9.99"}
        />
      </div>
    </div>
  );
};

export default Membership;
