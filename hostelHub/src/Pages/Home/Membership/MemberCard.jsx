import { Link } from "react-router-dom";
import ThemeBtn from "../../../Components/ThemeBtn";

const MemberCard = ({ plan, charge, khicuri, snaks, vaji, roast, biryani }) => {
  return (
    <div className="card rounded-tl-3xl rounded-br-3xl bg-base-100 shadow-xl">
      <div className="card-body mx-auto">
        <h2 className="card-title text-3xl">{plan}</h2>
        <h2 className="text-3xl font-bold mb-4">
          ${charge}/<span className="text-lg font-semibold">month</span>
        </h2>

        <div className="mx-auto">
          <div className="">
            <input
              type="checkbox"
              disabled
              checked={khicuri}
              name="access"
              id=""
            />
            <label className="ml-2" htmlFor="access">
              Khicuri
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              disabled
              checked={snaks}
              name="access"
              id=""
            />
            <label className="ml-2" htmlFor="access">
              Snaks
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              disabled
              checked={vaji}
              name="access"
              id=""
            />
            <label className="ml-2" htmlFor="access">
              Vaji
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              disabled
              checked={roast}
              name="access"
              id=""
            />
            <label className="ml-2" htmlFor="access">
              Roast
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              disabled
              checked={biryani}
              name="access"
              id=""
            />
            <label className="ml-2" htmlFor="access">
              Biryani
            </label>
          </div>
        </div>
        <div className="card-actions justify-center my-8">
          <Link to={`/checkout/${plan}/${charge}`}>
            <ThemeBtn text={"Join Now"} />
          </Link>
        </div>
        <p className="text-gray-600 text-center">Free trial 14 days</p>
      </div>
    </div>
  );
};

export default MemberCard;
