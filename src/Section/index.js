import "./style.css";

const Section = ({ title, body, extraContent }) => (
    <section className="section">
        <div className="section__div">
            <h2 className="section__header">{title}</h2>
            {extraContent}
        </div>
        <div>
            {body}
        </div>
    </section>
);

export default Section;