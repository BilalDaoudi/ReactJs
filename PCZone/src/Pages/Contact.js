import Menu from "../Components/Menu";
export default function Contact() {
  return (
    <div>
      <Menu active="Contact" />
      <div className="row">
        <div className="col-7 p-5">
          <div className="contact">
            <form>
              <div className="form-group mt-4">
                <label className="form-label">Nom</label>
                <input
                  className="form-control inp-contact"
                  placeholder="tapez ton nom"
                />
              </div>
              <div className="form-group mt-4">
                <label className="form-label">Email</label>
                <input
                  className="form-control inp-contact"
                  placeholder="tapez ton mail"
                />
              </div>
              <div className="form-group mt-4">
                <label className="form-label">Message</label>
                <textarea
                  rows="4"
                  cols="3"
                  className="form-control inp-contact"
                  placeholder="tapez ton message"
                />
              </div>
              <div className="form-group mt-4 text-end">
                <button className="btn btn-primary">Envoyer</button>&nbsp;
                <button type="reset" className="btn ">
                  Vider
                </button>
              </div>
              
            </form>
          </div>
        </div>
        <div className="col-5 p-5">
          <img src="./images/logo.jpg" className="img-logo" />
        </div>
      </div>
    </div>
  );
}
