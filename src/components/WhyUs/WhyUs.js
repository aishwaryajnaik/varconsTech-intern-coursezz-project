import { Container } from "react-bootstrap";
import "./WhyUs.css";
import { BsFillAwardFill } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiRoadMapFill } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
const WhyUs = () => {
  return (
    <Container>
      <div className="why-us-card text-center">
        <div className="single-card" style={{ backgroundColor: "#f6d5f7" }}>
          <div className="single-card-icon">
            <BsFillAwardFill color="#e81cff" />
          </div>
          <h3 className="why-heading">Quality Course</h3>
          <p className="why-us-info">
            We offer best quality of courses you can ever imagine.
          </p>
        </div>
        <div className="single-card" style={{ backgroundColor: "#f6d5f7" }}>
          <div className="single-card-icon">
            <GiTakeMyMoney color="#e81cff" />
          </div>
          <h3 className="why-heading">Reasonable Price</h3>
          <p className="why-us-info">
            We offer our all course at a reasonable price.
          </p>
        </div>
        <div className="single-card" style={{ backgroundColor: "#f6d5f7" }}>
          <div className="single-card-icon">
            <MdPayments color="#e81cff" />
          </div>
          <h3 className="why-heading">Pay Once</h3>
          <p className="why-us-info">
            Pay onetime and forget about billing, get access lifetime.
          </p>
        </div>
        <div className="single-card" style={{ backgroundColor: "#f6d5f7" }}>
          <div className="single-card-icon">
            <RiRoadMapFill color="#e81cff" />
          </div>
          <h3 className="why-heading">Complete Guide</h3>
          <p className="why-us-info">
            We will guide you through complete roadmap.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default WhyUs;
