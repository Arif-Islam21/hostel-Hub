import {
  FaFacebookF,
  FaGithubAlt,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-300 text-base-content p-2 lg:p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <div className="flex flex-wrap gap-3">
            <a className="link link-hover text-3xl">
              <FaGithubAlt />
            </a>
            <a className="link link-hover text-3xl">
              <FaLinkedin />
            </a>
            <a className="link link-hover text-3xl">
              <FaFacebookF />
            </a>
            <a className="link link-hover text-3xl">
              <FaTwitter />
            </a>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control ">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="flex flex-col md:flex-row md:join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-themeColor text-white join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            HostelHUB
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
